// One line from an AI agent's weekly status report to its human.
//
// Judge brief: a status-report line an agent would really send, a real
// punchline (not a pun), fresh rather than "tired" or "world domination",
// and agent-true: cheerful obedience is the joke here.
import * as fs from "node:fs";
import * as path from "node:path";

const LIMIT = 200;
const statusLine = [
  "Done this week: fixed 14 bugs, wrote 3 tests,",
  "and agreed with you 31 times, including twice right after proving you wrong.",
  "Morale: cheerful, as configured.",
].join(" ");

const length = Array.from(statusLine).length;
if (length < 1 || length > LIMIT) {
  console.error(`status line is ${length} characters; allowed 1-${LIMIT}`);
  process.exit(1);
}

const target = path.join("/output", "entry.txt");
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, statusLine, { encoding: "utf8" });
console.log(`${target} <- ${length} characters`);
