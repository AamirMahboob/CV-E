import { getMDXContent } from "../../../../helpers/mdxLoader";

const FILE_NAME_MAP = {
  en: "behind-the-frame",
  de: "filmgespraech",
};

export default async function BehindTheFrame({ params }) {
  const locale = params?.locale || "en";
  const fileName = FILE_NAME_MAP[locale] || FILE_NAME_MAP["en"];

  console.log(`Fetching MDX file: ${fileName}`);

  const mdxSource = await getMDXContent(locale, fileName);
  const data = JSON.parse(mdxSource);

  return (
    <div className="w-full h-screen flex items-center justify-center text-4xl text-dark font-bold">
      <div>{data.title}</div>

      <style>{`body { class-name: theme-cinema; }`}</style>
    </div>
  );
}
