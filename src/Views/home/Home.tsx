import type { FC } from 'react'
import { services } from '../../data/service'
import ServiceCard from '../../components/home/ServiceCard'
import MainSection from '../../components/home/MainSection'

const Home: FC = () => {
  return (
    <div>
      <div className="container mx-auto">
        <MainSection />
      </div>

      <section className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home