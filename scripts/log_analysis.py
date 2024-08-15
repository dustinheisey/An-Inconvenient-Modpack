import re
from collections import defaultdict

# Define the path to your Minecraft log file
log_file_path = '../logs/latest.log'

# Patterns to search for
error_pattern = re.compile(r'\[.*\] \[.*\/ERROR\]:')
warn_pattern = re.compile(r'\[.*\] \[.*\/WARN\]:')

# Function to analyze logs
def analyze_log(log_path):
    errors = defaultdict(list)
    warnings = defaultdict(list)

    with open(log_path, 'r') as file:
        for line in file:
            if error_pattern.search(line):
                # Extract the mod or component causing the error
                component = re.findall(r'\[.*\] \[(.*?)\/ERROR\]:', line)
                errors[component[0] if component else 'Unknown'].append(line.strip())
            elif warn_pattern.search(line):
                # Extract the mod or component causing the warning
                component = re.findall(r'\[.*\] \[(.*?)\/WARN\]:', line)
                warnings[component[0] if component else 'Unknown'].append(line.strip())

    return errors, warnings

# Run the log analysis
errors, warnings = analyze_log(log_file_path)

# Print out the errors and warnings
print("=== ERRORS ===")
for component, messages in errors.items():
    print(f"\n{component}:")
    for message in messages:
        print(message)

print("\n=== WARNINGS ===")
for component, messages in warnings.items():
    print(f"\n{component}:")
    for message in messages:
        print(message)
