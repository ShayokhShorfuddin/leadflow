const gridContent: { title: string; description: string }[] = [
  {
    title: "Social Ads",
    description:
      "Elevate Your Online Presence: Targeted Social Ad Campaigns to Boost Engagement.",
  },

  {
    title: "SaaS Marketing",
    description:
      "Accelerate SaaS Success: Tailored Marketing Strategies to Boost User Acquisition, Retention, and Revenue Growth.",
  },

  {
    title: "Content Marketing",
    description:
      "Craft Compelling Narratives: Strategic Content Marketing to Engage Audiences, Build Authority, and Drive Conversions.",
  },

  {
    title: "Seo",
    description:
      "Dominate the Digital Landscape: Innovative Strategies to Amplify Your Brand's Reach and Drive Measurable Growth.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between container mt-32"
    >
      <div className="max-w-72">
        <h1 className="text-4xl font-ubuntu text-center lg:text-left">
          Our Services
        </h1>

        <p className="mt-3 text-gray-600 text-center lg:text-left">
          Dominate the Digital Landscape: Innovative Strategies to Amplify Your
          Brand's Reach and Drive Measurable Growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10 lg:mt-0">
        {gridContent.map((content, index) => (
          <div
            key={index}
            className="w-full sm:w-64 md:w-72 lg:w-80 rounded-xl p-5 border border-gray-200 hover:bg-darkPink group transition-colors duration-200 ease-in-out"
          >
            <h1 className="text-3xl font-ubuntu font-normal group-hover:text-white transition-colors duration-300 ease-in-out">
              {content.title}
            </h1>
            <p className="mt-2 group-hover:text-gray-300 transition-colors duration-300 ease-in-out">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
