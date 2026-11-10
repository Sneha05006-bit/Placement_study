// Run from the placement-study folder:  node export-test-b.mjs
// Reads results/lighthouse/<version>/run1..5.json and writes results/test_b_runs.csv (one row per run)
import fs from "fs";
import path from "path";
const base = path.join("results", "lighthouse");
const rows = ["version,run,fcp_ms,lcp_ms,tbt_ms,score"];
for (const v of ["v1-plain", "v2-modules", "v3-tailwind", "v4-styled"]) {
  const dir = path.join(base, v);
  const files = fs.readdirSync(dir).filter((f) => /^run\d+\.json$/.test(f)).sort((a, b) => parseInt(a.slice(3)) - parseInt(b.slice(3)));
  for (const f of files) {
    const j = JSON.parse(fs.readFileSync(path.join(dir, f)));
    const a = j.audits;
    rows.push([v, f.replace(/\D/g, ""), a["first-contentful-paint"].numericValue, a["largest-contentful-paint"].numericValue, a["total-blocking-time"].numericValue, j.categories.performance.score * 100].join(","));
  }
}
fs.writeFileSync(path.join("results", "test_b_runs.csv"), rows.join("\n") + "\n");
console.log("Wrote results/test_b_runs.csv with " + (rows.length - 1) + " runs");
