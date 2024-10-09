import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const MAX_RAM = '6G';
export const JAVA_ARGS =
  '-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -Dfml.readTimeout=180 -Dfml.queryResult=confirm';
export const CRASH_COUNT = 5;
export const CRASH_TIMER = 600;
export const RUN_FROM_BAD_FOLDER = 0;
export const USE_SPONGE = 0;
export const MODPACK_NAME = 'An Inconvenient Modpack';
export const MC_VERSION = '1.18.2';
export const MODPACK_VERSION = '0.6.9';
export const FORGE_VERSION = '40.2.17';
export const AUTHOR = 'Inconvenient Dev';
export const INSTANCE_ROOT = path.join(__dirname, '../'); // or the path to the instance root
export const MANIFEST_FILE = 'manifest.json';
export const MINECRAFT_INSTANCE_FILE = path.join(
  INSTANCE_ROOT,
  'minecraftinstance.json'
);
export const OUTPUT_FOLDER = path.join(__dirname, '../output');
export const ZIP_FILE_PATH = path.join(OUTPUT_FOLDER, 'modpack.zip');
