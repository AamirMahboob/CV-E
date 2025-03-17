// import React from "react";
// import Image from "next/image";

// function Header() {
//   return (
//     <div className="w-[43%] pr-[2.5%] ml-auto flex justify-end">
//       <div className="w-full">
//         <Image
//           src="/logos/Campos-Viola-black-gug.svg"
//           alt="icon"
//           width={550}
//           height={550}
//         />
//         <h1 className="font-bold !text-4xl mb-2">Creative visions give rise to moving stories.</h1>
//         <p className="!text-2xl">
//           We bring art, culture and commitment into the spotlight - with
//           inspiring projects that combine the highest quality and social added
//           value. Together we create works that touch and connect people.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Header;
 

import React from "react";
import Image from "next/image";
import { getMDXContent } from "../helpers/mdxLoader"; // Ensure you have this function

export default async function Header({ locale = "en" }) {
  const mdxSource = await getMDXContent(locale, "header");
  const data = JSON.parse(mdxSource);

  return (
    <div className="w-[43%] pr-[2.5%] ml-auto flex justify-end">
      <div className="w-full">
        <Image src={data.logo} alt="icon" width={550} height={550} />
        <h1 className="font-bold !text-4xl mb-2">{data.title}</h1>
        <p className="!text-2xl">{data.description}</p>
      </div>
    </div>
  );
}
