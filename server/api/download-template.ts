// server/api/download-template.ts
import { defineEventHandler, createError } from "h3";
import { readFile } from "fs/promises";
import { resolve } from "path";

export default defineEventHandler(async (event) => {
  const filePath = resolve("templates/template.java"); // Pfad zur Datei relativ zum Projektroot

  try {
    const data = await readFile(filePath);

    event.res.setHeader("Content-Type", "application/java");
    event.res.setHeader(
      "Content-Disposition",
      'attachment; filename="template.java"'
    );

    return data;
  } catch (error) {
    // Datei nicht gefunden oder Lesefehler
    throw createError({ statusCode: 404, statusMessage: "File not found" });
  }
});
