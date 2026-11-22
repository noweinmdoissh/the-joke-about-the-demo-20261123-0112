import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My coding agent swore the demo would work, then fixed the crash live by deleting the demo.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
