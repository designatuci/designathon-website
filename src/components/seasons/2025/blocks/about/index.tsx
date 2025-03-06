import Image from "next/image";

function About() {
  return (
    <section className="flex justify-center md:-mt-10 lg:-mt-16 xl:-mt-40 xl:bg-gradient-to-b xl:from-white xl:via-(--blue) xl:via-40% xl:to-(--blue)">
      <div className="mask-sides relative flex min-h-[600px] max-w-[1920px] flex-col justify-end bg-white">
        <Image
          src="https://res.cloudinary.com/ucidesignathon/image/upload/v1741053627/about-background_ifrrid.png"
          alt=""
          className="mask-top"
          width={1920}
          height={1080}
          unoptimized
        />
        <div className="absolute top-[65%] left-[30%] flex w-[65%] max-w-[300px] -translate-x-1/2 -translate-y-full flex-col items-center gap-2 pb-8 pl-8 text-center font-bold text-(--blue) sm:top-[60%] sm:max-w-[350px] md:top-[50%] md:max-w-[400px] lg:max-w-[450px]">
          {/* TODO: change font */}
          <h2 className="mx-auto text-3xl font-bold">About</h2>
          <p className="sm:text-xl md:leading-relaxed lg:text-2xl">
            We hope that this experience can help you acquire and grow both your
            soft and hard skills in empathizing with your users, defining a set
            of goals and needs, developing your product, and improving your
            confidence and creativity as a human-centric designer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
