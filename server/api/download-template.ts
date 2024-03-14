import { defineEventHandler, sendStream } from "h3";
import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  try {
    const filePath = path.join(process.cwd(), "templates", "template.java");
    const fileName = "template.java";

    // Prüfen, ob die Datei existiert
    if (!fs.existsSync(filePath)) {
      return createError({ statusCode: 404, statusMessage: "File not found" });
    }

    // Setzen des Headers für den Dateidownload
    event.res.setHeader("Content-Type", "application/octet-stream");
    event.res.setHeader(
      "Content-Disposition",
      `attachment; filename="${fileName}"`
    );

    // Stream der Datei zurückgeben
    const fileStream = fs.createReadStream(filePath);
    return sendStream(event, fileStream);
  } catch (error) {
    console.error("Error while trying to download file:", error);
    return createError({
      statusCode: 500,
      data: "Something went wrong with the server!",
    });
  }
});
