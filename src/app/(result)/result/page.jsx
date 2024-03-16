import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import Link from 'next/link';
import Image from 'next/image';
import aerial from '@/images/image.png';

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
];

export default function ResultPage() {
  return (
    <section
      id="result"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32 bg-green-100"
    >
      <Link href="/" aria-label="Home">
        <Logo className="h-10 w-auto" />
      </Link>
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Results
          </h2>
        </div>

        {/* Display aerial photo */}
        <div className="mx-auto max-w-2xl">
          <Image src={aerial} alt="Aerial Photo" />
        </div>

        <h1>Recommendations for Wildfire Prevention in Boreal Forest Ecosystems:</h1>
          <p>1. <strong>Understanding Natural Fire Dynamics:</strong> Acknowledge the inherent role of fire in boreal forests, contributing to forest renewal. Consider managing fires by allowing them to burn under controlled circumstances.</p>
          <p>2. <strong>Establishing Fire Mitigation Barriers:</strong> Utilize natural features like rocky outcrops and water bodies to create fire breaks. Additional fire breaks can be established by strategically clearing vegetation.</p>
          <p>3. <strong>Enhanced Monitoring and Early Warning Systems:</strong> Set up a comprehensive detection system employing lookout towers, satellite surveillance, and regular patrols to identify fires at their inception.</p>
          <p>4. <strong>Ensuring Preparedness and Rapid Response:</strong> Maintain a highly prepared response system with well-trained firefighting teams and swiftly deployable equipment to combat fire outbreaks effectively.</p>
          <p>5. <strong>Reducing Fuel Availability:</strong> Focus on reducing potential fuel sources in proximity to human infrastructure through controlled burns or mechanical removal of combustible materials like underbrush and dead trees.</p>
          <p>6. <strong>Public Awareness and Education Campaigns:</strong> Educate residents and visitors about fire risks and safety protocols, covering guidelines for campfires, burning regulations, and proper disposal of hazardous materials such as cigarettes.</p>
          <p>7. <strong>Securing Critical Infrastructure:</strong> Implement protective measures for vital infrastructure, including the use of fire-resistant materials, construction techniques, and ensuring separation from flammable materials.</p>
          <p>8. <strong>Collaborative Community Fire Preparedness Plans:</strong> Collaborate closely with local communities to develop robust fire plans encompassing evacuation routes, communication strategies, and community-led firebreak initiatives.</p>
          <p>9. <strong>Legislation Compliance and Enforcement:</strong> Enforce existing fire prevention laws rigorously, including the imposition of fire bans during periods of heightened risk to prevent potential disasters.</p>
          <p>10. <strong>Supporting Research and Adaptive Management:</strong> Invest in research initiatives to deepen our understanding of fire behavior in boreal forests and adapt management strategies accordingly to address evolving environmental challenges such as climate change.</p>

        {/* Present content */}
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
  );
}
