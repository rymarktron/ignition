import Link from 'next/link'
import { motion, useInView, useMotionValue } from 'framer-motion'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'

import { useHistory } from 'react-router-dom';

function ContactForm() {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-8">
      <div className={`border-gray-300 h-20 w-20 ${animationComplete ? '' : 'animate-spin'} rounded-full border-8 border-t-blue-600`} />
    </div>
  );
}

export default ContactForm;
