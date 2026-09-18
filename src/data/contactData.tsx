import type { ReactNode } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export interface ContactItem {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export const contactData: ContactItem[] = [
  {
    id: 1,
    icon: <MapPin className="w-6 h-6 text-white" strokeWidth={2} />,
    title: 'Address',
    description: 'Oxford Ave. Cary, NC 27511',
  },
  {
    id: 2,
    icon: <Mail className="w-6 h-6 text-white" strokeWidth={2} />,
    title: 'Email',
    description: 'nwiger@yahoo.com',
  },
  {
    id: 3,
    icon: <Phone className="w-6 h-6 text-white" strokeWidth={2} />,
    title: 'Phone',
    description: '+537 547-6401',
  },
  {
    id: 4,
    icon: <Clock className="w-6 h-6 text-white" strokeWidth={2} />,
    title: 'Opening hours',
    description: 'Sun-Mon: 10am - 10pm',
  },
];