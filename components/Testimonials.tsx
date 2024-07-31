import man2 from "../public/man2.jpg";
import man3 from "../public/man3.jpg";
import man4 from "../public/man4.jpg";
import girl4 from "../public/girl4.jpg";

import Image, { StaticImageData } from "next/image";

const clients: {
  title: string;
  text: string;
  name: string;
  role: string;
  img: StaticImageData;
}[] = [
  {
    title: "Their experience has helped us to grow our business.",
    text: "Through innovative marketing strategies and targeted campaigns, our team has significantly increased our brand visibility and customer engagement. Their expertise in digital marketing has driven measurable results, leading to a 30% increase in our sales over the last quarter.",
    name: "Philip Lane",
    img: man2,
    role: "Business Owner",
  },
  {
    title: "Innovative solutions that drive results.",
    text: "Their innovative solutions have not only improved our internal processes but have also led to a remarkable increase in our overall efficiency and productivity. I highly recommend their services to anyone looking to enhance their operational capabilities!",
    name: "Emily Davis",
    img: girl4,
    role: "Product Manager",
  },
  {
    title: "A game changer for our outreach efforts.",
    text: "The team's strategic approach to social media marketing has completely transformed our outreach efforts, resulting in an impressive 50% increase in our online engagement metrics. Their insights and strategies have proven to be invaluable assets to our marketing initiatives.",
    name: "Thomas Stone",
    img: man3,
    role: "Designer",
  },
  {
    title: "Exceptional service and support.",
    text: "Working with this dedicated team has been an absolute pleasure. Their unwavering commitment to customer service and support has made a significant and positive difference in our daily operations and overall business success.",
    name: "Michael Johnson",
    img: man4,
    role: "Operations Manager",
  },
];

function TestimonialCard({
  title,
  text,
  name,
  role,
  img,
}: {
  title: string;
  text: string;
  name: string;
  role: string;
  img: StaticImageData;
}) {
  return (
    <div className="flex flex-col w-[400px] border border-gray-200 p-6 mx-6 rounded-xl">
      <h1 className="text-3xl font-ubuntu">{title}</h1>
      <p className="mt-5 text-gray-600">{text}</p>

      <div className="flex mt-6">
        <Image
          src={img}
          alt={name}
          height={50}
          width={50}
          className="rounded-full mr-3"
        />

        <div className="flex flex-col">
          <p className="font-ubuntu">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="flex flex-col items-center mt-36">
      <div className="max-w-[520px] text-center mx-9">
        <h1 className="text-2xl font-ubuntu text-center font-medium leading-snug">
          Our Clients
          <br />
          <span className="text-4xl">Speak For Us</span>
        </h1>

        <p className="mt-4 text-gray-600">
          The experiences and feedback from our clients reflect our dedication
          to quality. Their testimonials echo trust and dependability,
          demonstrating that we fulfill our commitments.
        </p>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden mt-10">
        <ul className="flex items-center animate-infinite-scroll-testimonials">
          {clients.map((client, index) => (
            <li key={`first-${index}`}>
              <TestimonialCard key={index} {...client} />
            </li>
          ))}
        </ul>

        <ul className="flex items-center animate-infinite-scroll-testimonials">
          {clients.map((client, index) => (
            <li key={`second-${index}`}>
              <TestimonialCard key={index} {...client} />
            </li>
          ))}
        </ul>

        <ul className="flex items-center animate-infinite-scroll-testimonials">
          {clients.map((client, index) => (
            <li key={`third-${index}`}>
              <TestimonialCard key={index} {...client} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
