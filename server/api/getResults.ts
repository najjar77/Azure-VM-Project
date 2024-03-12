// Unter server/api/results.ts

import { defineEventHandler } from "h3";
import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  const resultsDir = path.resolve(process.cwd(), "calculatedResults");
  const files = fs.readdirSync(resultsDir);

  const results: string[] = files.map((file) => {
    const filePath = path.join(resultsDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    return content;
  });

  return results;
});
