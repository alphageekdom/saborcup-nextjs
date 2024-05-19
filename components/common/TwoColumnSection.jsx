const TwoColumnSection = ({ children, reverseOnMobile = false }) => {
  return (
    <section className='container mx-auto px-4 py-28'>
      <div
        className={`flex flex-col md:flex-row ${
          reverseOnMobile ? 'md:flex-row-reverse' : 'flex-row'
        } items-center gap-8`}
      >
        {children}
      </div>
    </section>
  );
};

export default TwoColumnSection;
