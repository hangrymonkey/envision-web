import MaxWidthWrapper from "./MaxWidthWrapper";
import { ClipboardPen, ThumbsUp,  UserRoundPlus } from 'lucide-react';
import Image from "next/image";

const steps = [
  {
    name: 'In-House Tutors',
    Icon: '/inhouseTutor.png',
    description:
      "All our tutors are subjected to a stringent interview and in-house training process.",
  },
  {
    name: 'Curriculum Support',
    Icon: '/curriculumSupport.png',
    description:
      'Our tutors receive up-to-date curriculum support from our curriculum experts.',
  },
  {
    name: '<24 Hours Waiting Time',
    Icon: '/quickTurnaround24h.png',
    description:
      "We will reach out to you within 24 hours. Always.",
  },
]

const HomeOurDifference = () => {

  return (
    <section
      className="col-start-1 col-span-3 lg:col-start-1 lg:col-span-2 lg:pr-6 lg:pt-4"
      id="different"
    >

      <MaxWidthWrapper>
      <h2 className="text-center text-2xl font-bold text-blue-500">What Makes Us Different</h2>
      <div className='mb-10 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {steps.map((step) => (
              <div
                key={step.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                  
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
          <br />
          
      </MaxWidthWrapper>
    </section>

    
  );
};
export default HomeOurDifference;
