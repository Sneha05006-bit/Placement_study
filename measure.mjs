// Test B.  Usage:  node measure.mjs v1-plain 5
// Needs Google Chrome installed and the version already built (setup.mjs does that).
import { exec } from "child_process";
import { promisify } from "util";
const run = promisify(exec);
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
const [ver, runsArg] = process.argv.slice(2);
const runs = Number(runsArg) || 5;
const dir = path.resolve(ver);
const out = path.resolve("results", "lighthouse", ver);
fs.mkdirSync(out, { recursive: true });
const { preview } = await import(pathToFileURL(path.join(dir, "node_modules", "vite", "dist", "node", "index.js")).href);
const server = await preview({ root: dir, preview: { port: 4173, strictPort: true } });
for (let i = 1; i <= runs; i++) {
  console.log("Lighthouse run " + i + "/" + runs);
  try {
    await run(`npx lighthouse http://localhost:4173 --only-categories=performance --output=json --output-path="${path.join(out, "run" + i + ".json")}" --chrome-flags="--headless=new" --quiet`, { maxBuffer: 1e8 });
  } catch (e) {
    console.log("Lighthouse failed on run " + i + ":\n" + (e.stderr || e.message));
    server.httpServer.close();
    process.exit(1);
  }
}
server.httpServer.close();
const rows = fs.readdirSync(out).filter((f) => f.endsWith(".json")).map((f) => JSON.parse(fs.readFileSync(path.join(out, f))));
const stats = (a) => {
  const s = [...a].sort((x, y) => x - y), n = s.length;
  const med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
  const mean = a.reduce((p, c) => p + c, 0) / n;
  const sd = Math.sqrt(a.reduce((p, c) => p + (c - mean) ** 2, 0) / (n - 1));
  return "median " + med.toFixed(0) + "  sd " + sd.toFixed(0);
};
console.log("\n" + ver + " (" + rows.length + " runs)");
for (const [name, id] of [["FCP ms", "first-contentful-paint"], ["LCP ms", "largest-contentful-paint"], ["TBT ms", "total-blocking-time"]])
  console.log(name + ": " + stats(rows.map((j) => j.audits[id].numericValue)));
console.log("Score: " + stats(rows.map((j) => j.categories.performance.score * 100)));
process.exit(0);
