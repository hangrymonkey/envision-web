import MaxWidthWrapper from "./MaxWidthWrapper";

const HomeWhyHomeTuition = () => {
  return (
    <section
      className="col-start-1 col-span-3 lg:col-start-1 lg:col-span-2 lg:pr-6 lg:pt-4"
      id="whytuition"
    >
      <MaxWidthWrapper>
        <h2 className="text-2xl font-bold text-blue-500">Why Tuition</h2>
        <p className="text-lg text-blue-900 mt-4">
          We are a team of experienced educators who have been in the industry
          for over 10 years. We have helped thousands of students achieve their
          academic goals by providing them with the best tutors in the industry.
          Our tutors are highly qualified and experienced professionals who are
          dedicated to helping students succeed. We believe that every student
          has the potential to excel academically, and we are committed to
          helping them reach their full potential.
        </p>
      </MaxWidthWrapper>
    </section>
  );
};

export default HomeWhyHomeTuition;
