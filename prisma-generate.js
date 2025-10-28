import dotenv from "dotenv";
import { execSync } from "child_process";

dotenv.config();

console.log("Loaded DATABASE_URL:", process.env.DATABASE_URL ? "✅ Found" : "❌ Missing");

execSync("npx prisma generate", { stdio: "inherit" });
