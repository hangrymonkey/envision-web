import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const HomeReachOut = () => {
  return (
    <div className="w-full p-12 bg-blue-100 border border-blue-200 rounded-lg shadow-lg text-center">
      <h1 className="mt-2 mb-2 text-2xl text-black font-semibold">
        In a hurry? Let us call you back
      </h1>
      <input type="text" placeholder="Enter your phone number" className="rounded-xl border-2 border-gray-400 p-2 mx-5" /> 
      
      <Link href="/submit" className={buttonVariants()}>
        Submit
      </Link>
    </div>
  );
};

export default HomeReachOut;
