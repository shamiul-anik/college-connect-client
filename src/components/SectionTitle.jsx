
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <header data-aos="fade-up">
        <h2 className="content-title text-center">{heading}</h2>
      </header>
      <p className="content-description text-center mt-2 mb-8 md:mb-12" data-aos="fade-down">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionTitle;