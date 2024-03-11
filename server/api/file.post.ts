import path from "path";
import fs from "fs";

export default defineEventHandler(async (event) => {
  try {
    const files = await readMultipartFormData(event);
    if (!files) {
      return createError({ statusCode: 400, data: "File is invalid." });
    }

    const UploadedFilePaths: string[] = [];

    files.forEach((file) => {
      const filePath = path.join(
        process.cwd(),
        "./UploadedFiles",
        file.filename as string
      );
      fs.writeFileSync(filePath, file.data);
      UploadedFilePaths.push(file.filename as string);
    });
    return UploadedFilePaths;
  } catch (error) {
    return createError({
      statusCode: 500,
      data: "Something went wrong with the server!",
    });
  }
});
