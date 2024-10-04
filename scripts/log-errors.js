const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

function cleanLogs(line) {
  return line
    .replace(/\[\d{2}:\d{2}:\d{2}] /, '')
    .replace(/\[(INFO|WARN|ERR)\s+\]/, '')
    .replace(/\[Render thread\/(WARN|ERROR)\]:/, '')
    .trim();
}

// Function to process log files
function processLogFile(filePath) {
  const logData = fs.readFileSync(filePath, 'utf-8');
  const lines = logData.split(/\r?\n/);

  const logs = {
    info: [],
    warnings: [],
    errors: []
  };

  let inErrorSection = false;

  lines.forEach((line) => {
    if (line.includes('[INFO ]')) {
      logs.info.push(cleanLogs(line));
    } else if (
      line.includes('[WARN ]') ||
      line.includes('[Render thread/WARN]')
    ) {
      logs.warnings.push(cleanLogs(line));
    } else if (
      line.includes('[ERR  ]') ||
      line.includes('[Render thread/ERROR]') ||
      line.includes('[Load My Fucking Tags]')
    ) {
      if (line.includes(' \tat ')) {
        // Ignore stack trace lines
        return;
      }
      logs.errors.push(cleanLogs(line));
      inErrorSection = true;
    } else if (inErrorSection && line.includes(' \tat ')) {
      // Still within error stack trace, skip these lines
      return;
    } else {
      // Reset inErrorSection once out of the stack trace
      inErrorSection = false;
    }
  });

  return logs;
}

// Function to process the specified log files
function processLogs(logFiles) {
  const combinedLogs = {
    info: [],
    warnings: [],
    errors: []
  };

  logFiles.forEach((file) => {
    const logs = processLogFile(file);
    combinedLogs.info.push(...logs.info);
    combinedLogs.warnings.push(...logs.warnings);
    combinedLogs.errors.push(...logs.errors);
  });

  return combinedLogs;
}

// Function to write the organized logs to a YAML file
function writeLogsToYaml(outputPath, logs) {
  // Clear the file at the start of each run
  fs.writeFileSync(outputPath, '', 'utf-8');

  const yamlContent = yaml.dump(logs, { lineWidth: -1 });
  fs.writeFileSync(outputPath, yamlContent, 'utf-8');
  console.log(`Logs saved to ${outputPath}`);
}

// Main execution
const logFiles = [
  path.join(__dirname, '../logs/kubejs/client.txt'),
  path.join(__dirname, '../logs/kubejs/server.txt'),
  path.join(__dirname, '../logs/kubejs/startup.txt'),
  path.join(__dirname, '../logs/latest.log')
];

const combinedLogs = processLogs(logFiles);
writeLogsToYaml('./logs/output_logs.yaml', combinedLogs);
