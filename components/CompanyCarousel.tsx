import Image from "next/image";
import chanel from "../public/chanel.svg";
import chevrolet from "../public/chevrolet.svg";
import lancome from "../public/lancome.svg";
import zara from "../public/zara.svg";
import nike from "../public/nike.svg";

const logos: { src: string; alt: string }[] = [
  { src: chanel, alt: "chanel" },
  { src: chevrolet, alt: "chevrolet" },
  { src: lancome, alt: "lancome" },
  { src: zara, alt: "zara" },
  { src: nike, alt: "nike" },
];

export default function CompanyCarousel() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden mt-9">
      <ul className="flex items-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-brands">
        {logos.map((logo, index) => (
          <li key={index}>
            <div className="px-3">
              <Image src={logo.src} alt={logo.alt} height={32} />
            </div>
          </li>
        ))}
      </ul>

      <ul
        className="flex items-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-brands"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={`second-${index}`}>
            <div className="p-5">
              <Image src={logo.src} alt={logo.alt} height={32} />
            </div>
          </li>
        ))}
      </ul>

      <ul
        className="flex items-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll-brands"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={`third-${index}`}>
            <div className="p-5">
              <Image src={logo.src} alt={logo.alt} height={32} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
