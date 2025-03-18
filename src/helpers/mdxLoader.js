import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getMDXContent(locale, fileName) {
  console.log(locale);

  try {
    let filePath = path.join(process.cwd(), `src/content/${locale}/${fileName}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      console.warn(`MDX file not found for locale: ${locale}. Checking for index file.`);

      // Try the alternative path with "-index.md"
      filePath = path.join(process.cwd(), `src/content/${locale}/${fileName}/-index.md`);

      if (!fs.existsSync(filePath)) {
        console.warn(`Index file not found for locale: ${locale}. Falling back to German.`);
        
        // Try loading the German version as a fallback
        filePath = path.join(process.cwd(), `src/content/de/${fileName}.mdx`);

        if (!fs.existsSync(filePath)) {
          filePath = path.join(process.cwd(), `src/content/de/${fileName}/-index.md`);

          if (!fs.existsSync(filePath)) {
            console.error("MDX file not found in fallback language:", filePath);
            return "Content not available.";
          }
        }
      }
    }

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return JSON.stringify(data);
  } catch (error) {
    console.error("Error loading MDX file:", error);
    return "Error loading content.";
  }
}
