// Run once from this folder:  node setup.mjs   (installs + builds all 4 versions)
import { execSync } from "child_process";
for (const v of ["v1-plain", "v2-modules", "v3-tailwind", "v4-styled"]) {
  console.log("\n=== " + v + ": npm install ===");
  execSync("npm install", { cwd: v, stdio: "inherit" });
  console.log("\n=== " + v + ": npm run build (copy the gzip sizes = Test A) ===");
  execSync("npm run build", { cwd: v, stdio: "inherit" });
}
