import { Container } from '@/components/Container'
import qrCode from '@/images/qr-code.svg'

const parameters = [
  /*{
    name: 'Wind Speed',
    description:
      'Assess wind speed to determine the direction and intensity of the fire spread.',
    icon: windSpeedIcon,
  },
  {
    name: 'Tree Types',
    description:
      'Identify tree species in the area to understand fuel characteristics and fire behavior.',
    icon: treeTypesIcon,
  },*/
    {
      name: 'Topography',
      description:
        'Analyze the landscape to predict fire behavior based on terrain and slope.',
      icon: <TopographyIcon />,
    },
    {
      name: 'Weather Conditions',
      description:
        'Monitor weather conditions such as temperature and humidity to assess fire risk.',
      icon: <WeatherConditionsIcon />,
    },
  /*
  {
    name: 'Weather Conditions',
    description:
      'Monitor weather conditions such as temperature and humidity to assess fire risk.',
    icon: WeatherConditionsIcon,
  },*/
]

function TopographyIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M16 5.414V19h3v2H5V5.414l2.293 2.293 2.999-2.999a1 1 0 0 1 1.414 0L13.7 7.7a.997.997 0 0 1 .3.7V14a1 1 0 1 0 2 0V8.414l2.293-2.293 1.416 1.415-2.999 2.999a1 1 0 0 1-1.414 0L11 8.415 8.707 6.122l1.416-1.415L13 5.414V3h3v2.414z" />
    </svg>
  );
}

function WeatherConditionsIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      {/* Weather conditions icon SVG */}
    </svg>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Parameters for determining prescribed fire type"
      className="py-20 sm:py-32 bg-green-100"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Identify Key Parameters for Prescribed Fire
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Discover essential parameters used to determine the type of prescribed fire needed to manage forest ecosystems effectively.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {parameters.map((parameter) => (
            <li
              key={parameter.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
            <svg
              className="h-8 w-8"
              alt={parameter.name}
              dangerouslySetInnerHTML={{ __html: parameter.icon }}
            />
              <h3 className="mt-6 font-semibold text-gray-900">
                {parameter.name}
              </h3>
              <p className="mt-2 text-gray-700">{parameter.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
