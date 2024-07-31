import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionContent: { title: string; text: string }[] = [
  {
    title: "Do you work with small businesses?",
    text: "We specialize in providing tailored solutions for small businesses, ensuring that our services are accessible and effective. Our team works closely with you to understand your unique needs and challenges, allowing us to create customized strategies that drive growth and success.",
  },

  {
    title: "Do you offer ongoing support?",
    text: "We offer ongoing support to ensure your success. Our dedicated team is available to assist you with any questions or challenges you may face, providing timely solutions and guidance. We believe in building long-term relationships with our clients, and our support services are designed to adapt to your evolving needs.",
  },

  {
    title: "How long does it take to promote?",
    text: "The time it takes to ensure a targeted audience response can vary based on several factors, including the complexity of your campaign and the specific audience you are targeting. Generally, you can expect to see initial engagement within a few weeks, but achieving optimal results may take several months.",
  },

  {
    title: "Is there a possibility of offline meetings?",
    text: "Yes, we do offer the option for offline meetings. We understand that face-to-face interactions can be valuable for building relationships and discussing your needs in detail. Our team is happy to arrange in-person meetings at your convenience, whether at your location or in a neutral setting. Please reach out to us to schedule a meeting that works for you.",
  },
];

export default function FAQ() {
  return (
    <section
      id="FAQ"
      className="flex flex-col md:flex-row items-center md:items-start text-center md:text-start justify-between container mt-32"
    >
      <div className="max-w-72">
        <h1 className="text-4xl font-ubuntu">FAQ</h1>

        <p className="mt-3 text-gray-600">
          We have addressed common inquiries to help you understand our services
          and how we can assist you better.
        </p>
      </div>

      <div className="w-full md:w-96 text-start mt-10 md:mt-0">
        <Accordion type="single" collapsible>
          {accordionContent.map((content, index) => (
            <AccordionItem key={index} value={`${index}`}>
              <AccordionTrigger>
                <p>{content.title}</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mt-2 text-gray-600">{content.text}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
