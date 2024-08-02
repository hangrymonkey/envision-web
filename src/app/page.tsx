import HomeGetStarted from "@/components/HomeGetStarted";
import HomeOurDifference from "@/components/HomeOurDifference";
import HomeOurStory from "@/components/HomeOurStory";
import HomeReachOut from "@/components/HomeReachOut";
import HomeWhyHomeTuition from "@/components/HomeWhyHomeTuition";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-start-2 col-span-2 px-6 lg:px-0 lg:pt-4">
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-blue-500 text-3xl md:text-4xl lg:text-5xl">
              Looking for Reliable and Trustworthy Home Tutors? 
              <span className="block text-blue-900 text-4xl md:text-5xl lg:text-6xl">We Deliver with a Smile</span>
            </h1>
          </div>
        </MaxWidthWrapper>
      </section>
      <HomeOurStory />
      <HomeOurDifference />
      <HomeWhyHomeTuition />
      <HomeGetStarted />
      <HomeReachOut />

      <section className='padding-x sm:py-32 py-16 w-full'>
        <SignUp />
      </section>  
    </div>
    
    
  );
}
