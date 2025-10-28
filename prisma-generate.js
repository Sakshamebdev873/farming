import dotenv from "dotenv";
import { execSync } from "child_process";

dotenv.config();

console.log("Loaded DATABASE_URL:", process.env.DATABASE_URL ? "✅ Found" : "❌ Missing");

execSync("npx prisma generate", { stdio: "inherit" });
// execSync comes from Node’s child_process module.
// It’s used to run another command (like one you’d type in your terminal) from inside your Node script, and “Sync” means it waits for that command to finish before moving on.
//  stdio: "inherit" it is used to show output in terminal