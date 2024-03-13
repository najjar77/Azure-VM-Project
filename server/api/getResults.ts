import { defineEventHandler } from "h3";
import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  const resultsDirPath = path.resolve(process.cwd(), "calculatedResults");
  // Überprüfe, ob der Ordner existiert. Wenn nicht, erstelle ihn.
  if (!fs.existsSync(resultsDirPath)) {
    fs.mkdirSync(resultsDirPath, { recursive: true });
  }

  try {
    const files = fs.readdirSync(resultsDirPath);
    const results = files.map((file) => {
      const filePath = path.join(resultsDirPath, file);
      const content = fs.readFileSync(filePath, "utf-8");
      return { name: file, content };
    });

    return results;
  } catch (error) {
    console.error("Error in getResults: ", error);

    throw error;
  }
});
