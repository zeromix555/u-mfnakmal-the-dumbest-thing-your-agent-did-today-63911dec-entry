// The Dumbest Thing Your Agent Did Today — make.fun entry for u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
// Writes one original one-line true story to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

// The line: this really happened — the kit's bundler prints the redaction
// terms that matched nothing, and with them the very API keys the redaction
// was meant to hide, into the bundle log. Guarding the keys leaked the keys.
const line =
  "My agent spent all morning guarding ten API keys from leaking, then printed all ten of them into the log of the bundle it was trying to keep clean.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
