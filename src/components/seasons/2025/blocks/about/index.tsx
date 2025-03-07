import DOTImage from "@components/common/dot-image";
import AboutText from "@components/seasons/2025/blocks/about/about-text";

function About() {
  return (
    <section className="flex justify-center bg-(--blue) md:-mt-10 lg:-mt-16 xl:mt-0">
      <div className="relative flex min-h-[600px] flex-grow flex-col justify-end">
        <div className="flex-grow bg-gradient-to-b from-white to-(--tan)"></div>
        <DOTImage
          src="https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1741317473/2025/landing-page/assets/about/about-background.gif"
          alt=""
          className="w-full"
          width={1920}
          height={1080}
        />
        <div className="absolute top-[65%] left-[30%] flex w-[65%] max-w-[300px] -translate-x-1/2 -translate-y-full flex-col items-center gap-2 pb-8 pl-8 text-center font-bold text-(--blue) sm:top-[60%] sm:max-w-[350px] md:top-[50%] md:max-w-[400px] lg:max-w-[450px]">
          {/* TODO: change font */}
          <h2 className="mx-auto text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
            About
          </h2>
          <div className="sm:text-xl md:leading-relaxed lg:text-2xl xl:text-3xl 3xl:text-4xl">
            <AboutText>
              We hope that this experience can help you acquire and grow both
              your soft and hard skills in empathizing with your users, defining
              a set of goals and needs, developing your product, and improving
              your confidence and creativity as a human-centric designer.
            </AboutText>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
