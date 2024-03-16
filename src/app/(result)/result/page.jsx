import { Container } from '@/components/Container'

const resultData = [
  [
    {
      question: "What are preventative fires and how do they work?",
      answer: "Preventative fires are a proactive measure to reduce fuel in forests, mitigating the risk of wildfires. These controlled burns are strategically set in wildland areas such as forests, grasslands, and prairies, as well as in wildland-urban interfaces. By reducing the buildup of flammable materials, preventative fires increase urban resilience, decrease infrastructure damage, and improve the ability to withstand wildfire seasons."
    },
    {
      question: "Why are preventative fires important?",
      answer: "Preventative fires play a crucial role in mitigating the devastating impacts of wildfires. They not only reduce the risk of uncontrolled blazes but also help protect vast areas of land from destruction. Additionally, preventative measures are more cost-effective than reactive firefighting efforts, saving both lives and resources."
    },
    {
      question: "What are the key challenges in implementing preventative fires?",
      answer: "One of the major challenges in mainstream adoption of preventative fires is the lack of proper planning and environmental research. Additionally, there may be regulatory barriers and concerns about the impact of controlled burns on ecosystems. Leveraging AI and computer vision technology can help address these challenges by enhancing the accuracy and efficiency of preventative burning analysis."
    },
  ],
  [
    {
      question: "How can AI and computer vision technology aid in preventative burning analysis?",
      answer: "AI and computer vision technology can revolutionize preventative fire strategies by providing real-time analysis of forest conditions. By analyzing satellite imagery and other data sources, these tools can identify areas at high risk of wildfires and optimize the timing and location of preventative burns. This not only increases the effectiveness of fire management efforts but also reduces the environmental impact of controlled burns."
    },
    {
      question: "Who are the intended users of this technology?",
      answer: "The primary users of our forest preventative fire computer vision technology include landowners, forestry agencies, and wildfire management organizations. These stakeholders can leverage our solution to assess fire risk, plan preventative measures, and monitor the effectiveness of controlled burns."
    },
    {
      question: "What is the financial impact of implementing preventative fires?",
      answer: "Implementing preventative fires can lead to significant cost savings by reducing the economic damage caused by wildfires. By investing in proactive measures, communities can minimize infrastructure damage, protect valuable natural resources, and avoid the high costs associated with emergency firefighting efforts."
    },
  ],
  [
    {
      question: "Where do we see the future of this product?",
      answer: "In the future, we envision our forest preventative fire computer vision technology becoming an essential tool for wildfire management worldwide. By continuously refining our algorithms and expanding our data sources, we aim to improve the accuracy and scalability of our solution, making it accessible to more users and adaptable to changing environmental conditions."
    },
    {
      question: "What is our tech stack and development plan?",
      answer: "Our technology stack includes state-of-the-art AI algorithms, computer vision models, and geospatial data processing tools. We follow an agile development approach, continually iterating on our software based on user feedback and emerging research. Our roadmap includes enhancing the usability and scalability of our platform, as well as integrating new features to address evolving wildfire management challenges."
    },
  ],
]

export default function ResultPage() {
  return (
    <section
      id="result"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32 bg-green-100"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Results
          </h2>
        </div>
        <

        <h2>These ecosystems are characterized by ancient trees, a multi-layered canopy, high levels of precipitation, and a rich undergrowth of ferns and other moisture-loving plants.
Preventative fire procedures for an old-growth temperate rainforest include:


Minimal Intervention: Because of the high moisture content and natural fire resistance, these ecosystems typically require less active management for fire prevention compared to drier forests.
Protection of Key Areas: Protecting the oldest and most ecologically significant trees, which can sometimes be done by clearing underbrush and smaller trees in the immediate vicinity to reduce potential fuel.
Monitoring Human Activity: Limiting and monitoring human activities that can cause fires, such as campfires, smoking, and use of machinery that can create sparks.
Infrastructure Readiness: Even though fires are less common, having infrastructure in place for fire detection and suppression is essential. This can include lookout towers, trained personnel, and firefighting equipment.
Public Education: Educating the public on the importance of these ecosystems and how to prevent wildfires through responsible behavior.
Scientific Management: Collaborating with ecologists and forest managers to conduct scientific assessments that can help in understanding the natural fire cycles of these forests, if any, and adapting management practices accordingly.
Policy and Regulation Enforcement: Enforcing policies and regulations designed to protect these environments, including restrictions on logging and development that can alter the natural fire defenses of the forest.
Emergency Plans: Developing and maintaining emergency plans and evacuation routes for areas adjacent to these forests.
It's important to note that old-growth forests have a unique ecological balance that has been established over centuries or millennia. Fire prevention and intervention should be carefully considered and based on ecological best practices to avoid disrupting this balance.</h2>


        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {resultData.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
