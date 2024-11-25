import MaxWidthWrapper from "./MaxWidthWrapper";
import { ClipboardPen, ThumbsUp,  UserRoundPlus } from 'lucide-react';
import Image from "next/image";

const steps = [
  {
    name: 'REQUEST',
    text: 'STEP 1', 
    Icon: '/whatsapp.png',
    description:
      'For a suitable tutor, just drop us a text!',
  },
  {
    name: 'RECEIVE',
    text: 'STEP 2', 
    Icon: '/owlthumbsup.png',
    description:
      'We will reach out and follow up with you!',
  },
  {
    name: 'SELECT',
    text: 'STEP 3', 
    Icon: '/owltexting.png',
    description:
      "We will confirm the lesson details and tutor wtih you.",
  },
]
const HomeGetStarted = () => {
  return (
    <section
      className="col-start-1 col-span-3 lg:col-start-1 lg:col-span-2 lg:pr-6 lg:pt-4"
      id="getstarted"
    >
      <MaxWidthWrapper>
      <h2 className="text-center text-2xl font-bold text-blue-500">Request a Tutor via our Simple 3-Step Process</h2>
      <div className='mb-10 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {steps.map((step) => (
              <div
                key={step.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>

                <p className="mt-4  text-gray-500 text-center"> {step.text} </p>
                <div className='mt-4 md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                      <Image src={step.Icon} alt='logo' width={118} height={18} className='object-contain' />
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='font-bold text-base text-gray-900'>
                    {step.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HomeGetStarted;
