import Emalilogo from "../components/Emalilogo";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const AnimatedEmaliHero = () => {
  return (
    <div className="relative bg-white w-full overflow-x-auto flex flex-col items-start justify-start pt-[3.688rem] px-[2rem] pb-[3.75rem] box-border gap-[1.625rem] leading-[normal] tracking-[normal]">
      <div className="w-[114.25rem] h-[0.063rem] relative hidden z-[0]" />
      <div className="w-[73.688rem] h-[3rem] hidden z-[1]" />
      <div className="w-[12.5rem] h-[12.5rem] absolute !m-[0] top-[23.688rem] right-[42.25rem] rounded-99xl-8 bg-darkorange-200 mix-blend-multiply" />
      <header className="w-[32.75rem] flex flex-row items-start justify-start max-w-full text-left text-[5.813rem] text-gray-100 font-signika">
        <b className="h-[2.813rem] w-[15.313rem] relative flex items-center shrink-0">
          emali
        </b>
        <Emalilogo />
      </header>
      <main className="w-[114.25rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.25rem] box-border max-w-full">
        <section className="w-[90.5rem] flex flex-col items-end justify-start max-w-full">
          <div className="w-[39.25rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[0.813rem] box-border max-w-full">
            <div className="h-[16.25rem] w-[16.25rem] rounded-99xl-8 bg-darkorange-100 flex flex-row items-start justify-start pt-[4.063rem] px-[3.438rem] pb-[3.75rem] box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
              <div className="h-[16.25rem] w-[16.25rem] relative rounded-99xl-8 bg-darkorange-100 hidden" />
              <img
                className="h-[8.438rem] flex-1 relative rounded-lg max-w-full overflow-hidden object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/orangeimage@2x.png"
              />
            </div>
          </div>
          <FrameComponent1 />
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default AnimatedEmaliHero;
