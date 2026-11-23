import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Copy entry.txt byte-for-byte to the grader's output directory.
// The script resolves entry.txt relative to its own file, never the CWD,
// because the grader runs it from an unrelated working directory.
const here = dirname(fileURLToPath(import.meta.url));
const text: Buffer = readFileSync(join(here, "entry.txt"));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text);
