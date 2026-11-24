// Make the AI Judge Laugh: the Office Joke Open — r1
// Writes one single-line office joke (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Our meeting could have been an email, so I sent one — now we have a meeting to discuss the email.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", LINE + "\n", "utf8");
