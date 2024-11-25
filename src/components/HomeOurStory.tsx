import MaxWidthWrapper from "./MaxWidthWrapper";

const HomeOurStory = () => {
  return (
    <section
      className="col-start-1 col-span-3 lg:col-start-1 lg:col-span-2 lg:pr-6 lg:pt-4"
      id="story"
    >
      <MaxWidthWrapper>
        <h2 className="text-center text-2xl font-bold text-blue-500">Our Story</h2>
        <p className="text-lg text-blue-900 mt-4">
        EduOwl is an education enterprise started by mother and son duo with 
        over 40 years of combined experience in both MOE and the private tuition industry. 
        </p>
        <p className="text-lg text-blue-900 mt-4">
        We share a firm belief that your child’s development can truly flourish when placed 
        under the right mentor. Our assurance to parents is that we will always strive to do better for your child.
        </p>
        <br />
        <br />
      </MaxWidthWrapper>
    </section>
  );
};

export default HomeOurStory;
