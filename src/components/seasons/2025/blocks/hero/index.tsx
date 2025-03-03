import DOTImage from "@components/common/dot-image";

function Hero() {
  return (
    <section className="flex h-svh max-h-[800px] min-h-[400px] w-full flex-col bg-(--sky) pt-14 font-primary">
      <div className="relative z-10 flex items-center justify-center">
        <span className="relative inline-block h-[300px] w-[1000px] overflow-hidden">
          <DOTImage
            src="https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1740975343/header_tlucgg.gif"
            alt="Designathon Beyond Our Horizons"
            className="rotate-12 object-contain duration-700 ease-out-back animate-in fade-in-0 slide-in-from-bottom-4 zoom-in-50"
            priority
            fill
          />
        </span>
      </div>
      <div className="relative -mt-16 flex w-full flex-grow items-center justify-center">
        <video
          className="h-full w-full object-cover object-bottom"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 1.0) 95%, transparent 100%)",
          }}
          src="https://res.cloudinary.com/ucidesignathon/video/upload/f_auto,q_auto/v1740974663/ROLLERCOASTER2_outhyj.mp4"
          poster="https://res.cloudinary.com/ucidesignathon/video/upload/f_auto,q_auto,so_0/v1740974663/ROLLERCOASTER2_outhyj.jpg"
          preload="auto"
          autoPlay
          playsInline
          muted
        ></video>
      </div>
    </section>
  );
}

export default Hero;
