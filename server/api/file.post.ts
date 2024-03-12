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
        "/UploadedFiles",
        file.filename as string
      );
      console.log("FilePath: ", filePath);

      fs.writeFileSync(filePath, file.data);
      UploadedFilePaths.push(file.filename as string);
    });
    return UploadedFilePaths;
  } catch (error) {
    console.error(error);
    return createError({
      statusCode: 500,
      data: "Something went wrong with the server!",
    });
  }
});
