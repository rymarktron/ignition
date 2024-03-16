import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-green-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Take Action Against Forest Fires Today
          </h2>
          <p className="mt-4 text-lg text-gray-300 mb-5">
            Preventing forest fires is crucial. Join us now to take proactive steps
            in safeguarding our environment. Download our app and get started!
          </p>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded">
            Get Started Today
          </button>
        </div>
      </Container>
    </section>
  )
}
