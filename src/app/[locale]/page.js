import Header from "../../components/Header";

const DEFAULT_LOCALE = "en"; 

export default async function Home({ params }) {
  const paramsData = await params;
  const locale = paramsData.locale || DEFAULT_LOCALE; 

  return (
    <div className="px-10">
      <Header locale={locale} />
    </div>
  );
}
