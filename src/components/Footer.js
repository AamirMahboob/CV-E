import Image from "next/image";
import Social from "./Social.js";
import Script from "next/script.js";
import { getMDXContent } from "../helpers/mdxLoader.js"; 

export default async function Footer ({locale = "en"}){
      const mdxSource = await getMDXContent(locale, "footer");
      const data = JSON.parse(mdxSource);

  return (
    <footer className="text-[10px] mt-2 mb-18">
      <div className="grid grid-cols-12 gap-2">
        <div className="grid grid-rows col-span-2 gap-2">
          <h2 className="underline underline-offset-10 font-bold !text-xl nav-text text-nowrap">
            {data.support[0].headline}
          </h2>
          <p className="row-span-10 !text-xs">{data.support[0].subheadline}</p>
        </div>
        <div className="grid grid-cols-2 col-span-2 py-[10%] gap-1 px-10  !text-xs">
          <div>
            <Image
              src={data.support[0].img1}
              alt="Giltching logo"
              width={45}
              height={45}
            />
            <p className="!text-xs">Gemeinde Glitching</p>
          </div>
          <div>
            <Image
              className="my-0.5 "
              src={data.support[0].img2}
              alt="emmering logo"
              width={45}
              height={45}
            />
            <p className="!text-xs">Gemeinde Emmering</p>
          </div>
        </div>
        <div className="col-span-3"></div>
        <div className="grid grid-rows col-span-1 w-36">
          <h2 className="underline underline-offset-10 font-bold !text-xl nav-text row-span-1">
            {data.contact[0].headline}
          </h2>
          <p className="whitespace-pre-line pt-2 !text-xs row-span-8">
            {data.contact[1].subheadline}
          </p>
        </div>
        <div className="grid grid-rows-6 ml-6 pt-1.25">
          <p className="text-nowrap !text-xs">
            Ust.ID.nr.: {data.contact[2].ustid}
          </p>
          <p className="flex items-center gap-1.5 hover:underline">
            <Image
              src="/icons/email.svg"
              alt="Email Icon"
              width={16}
              height={16}
            />
            <span className="hover:text-yellow-600 !text-xs">
              {data.contact[3].email}
            </span>
          </p>

          <p className="flex items-center gap-1 hover:underline !text-xs">
            <Image
              src="/icons/cellphone.svg"
              alt="Cellphone Icon"
              width={16}
              height={16}
            />
            <span className="hover:text-yellow-600">
              {data.contact[4].cellphone}
            </span>
          </p>

          <p className="flex items-center gap-1 hover:underline">
            <Image
              src="/icons/phone.svg"
              alt="Phone Icon"
              width={16}
              height={16}
            />
            <span className="hover:text-yellow-600 text-nowrap !text-xs">
              {data.contact[5].phone}
            </span>
          </p>

          <div></div>
        </div>
        <div></div>
        <div className="col-span-2">
          <div className="grid grid-rows-3 pr-10">
            <p className="!text-xs">{data.social[1].subheadline}</p>
            <Social
              type="footer"
              className="place-items-center gap-2 grid grid-cols-5"
            />
            <div>
              <div className="flex justify-center">
                <div className="pe-richsnippets"></div>
                <Script
                  src="https://www.provenexpert.com/widget/richsnippet.js?u=1HwolOwA1DQplqGB1xmp5DQpkMmpk9Tp&v=2"
                  strategy="lazyOnload"
                  async
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-6 font-semibold gap-2">
        <p className="col-span-3">
          © 2009 - 2025 Campos Viola gUG (i.G.), All rights reserved
        </p>
        <div className="col-span-5"></div>
        <div className="ml-6">Bewertungen</div>
        <div>Datenschutzerklärung</div>
        <div className="ml-8">Sitemap</div>
        <div>Impressum</div>

      </div>
    </footer>
  );
};

