import AvailabilityIcon from '../assets/home/service/location.png'
import ComfortIcon from '../assets/home/service/car.png'
import SavingsIcon from '../assets/home/service/wallet.png'

export interface Service {
  image: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    image: AvailabilityIcon,
    title: "Availability",
    description:
      "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
  },
  {
    image: ComfortIcon,
    title: "Comfort",
    description:
      "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis",
  },
  {
    image: SavingsIcon,
    title: "Savings",
    description:
      "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
  },
]