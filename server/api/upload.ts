import { defineEventHandler } from "h3";
import fs from "fs";
import formidable, { Files, File } from "formidable";

export default defineEventHandler(async (event) => {
  const form = new formidable.IncomingForm({ multiples: true });

  return new Promise((resolve, reject) => {
    form.parse(event.req, (err, fields, files: Files) => {
      if (err) {
        reject(err);
        return;
      }

      const uploadedFile = files.file;

      // Überprüfe, ob 'uploadedFile' existiert, bevor es weiterverarbeitet wird
      if (uploadedFile) {
        // Behandlung von einzelnen Dateien
        if (!Array.isArray(uploadedFile)) {
          const file = uploadedFile; // Keine Notwendigkeit für 'as File', da es bereits vom korrekten Typ ist

          //@ts-ignore
          const oldPath = file.filepath;
          console.log("oldPath value: ", oldPath);
          //@ts-ignore
          const newPath = `./uploads/${file.originalFilename}`;
          console.log("NewPath value: ", newPath);
          fs.rename(oldPath, newPath, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve({ path: newPath });
            }
          });
        } else {
          // Behandlung von Fällen, in denen 'file' ein Array von Dateien ist
          reject(
            new Error(
              "Multiple file uploads are not supported in this example."
            )
          );
        }
      } else {
        // Keine Datei wurde hochgeladen
        reject(new Error("No file uploaded."));
      }
    });
  });
});
