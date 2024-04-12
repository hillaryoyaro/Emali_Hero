const FrameComponent4 = () => {
  return (
    <section className="w-[89.125rem] flex flex-row items-start justify-center max-w-full text-center text-[4.269rem] text-gray-200 font-inter">
      <div className="w-[72.438rem] flex flex-col items-end justify-start gap-[1.625rem] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[3.75rem] max-w-full mq1125:gap-[1.875rem]">
          <div className="w-[68.5rem] flex flex-row items-start justify-start py-[0rem] pr-[2.438rem] pl-[2.469rem] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
              <b className="flex-1 relative tracking-[-2px] leading-[5rem] inline-block max-w-full mq450:text-[2.563rem] mq450:leading-[3rem] mq1050:text-[3.438rem] mq1050:leading-[3.938rem]">
                <span>{`Journey with `}</span>
                <span className="text-firebrick-100">Emali Cloud.</span>
              </b>
              <div className="h-[8.125rem] w-[8.125rem] absolute !m-[0] top-[calc(50%_-_65px)] right-[23.25rem] rounded-99xl-8 bg-firebrick-300 mix-blend-multiply z-[1]" />
            </div>
          </div>
          <div className="self-stretch relative text-[1.5rem] leading-[1.75rem] text-darkslategray whitespace-pre-wrap mq450:text-[1.188rem] mq450:leading-[1.375rem]">
            Your Next Cloud Gen, make it easier for potential customers to power
            their business with Emali Cloud.
          </div>
        </div>
        <div className="w-[70.688rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[45.875rem] flex flex-col items-start justify-start gap-[1.813rem] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2.125rem] max-w-full mq750:gap-[1.063rem]">
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.531rem] px-[0rem] pb-[0rem] box-border min-w-[14.188rem] max-w-full">
                <button className="cursor-pointer [border:none] py-[0.75rem] px-[1.25rem] bg-red-200 self-stretch rounded-xl shadow-[0px_16px_30px_5px_rgba(185,_95,_95,_0.12)] flex flex-row items-start justify-center whitespace-nowrap hover:bg-red-100">
                  <div className="relative text-[2rem] font-medium font-inter text-white text-left">
                    Start now
                  </div>
                </button>
              </div>
              <button className="cursor-pointer py-[1.281rem] px-[4.25rem] bg-white rounded-xl shadow-[0px_16px_30px_5px_rgba(185,_95,_95,_0.12)] box-border flex flex-row items-start justify-start whitespace-nowrap max-w-full border-[2px] border-solid border-red-200 hover:bg-gainsboro hover:box-border hover:border-[2px] hover:border-solid hover:border-red-100 mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                <div className="relative text-[2rem] font-medium font-inter text-black text-left">
                  Get an Expert
                </div>
              </button>
            </div>
            <div className="w-[45rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
              <div className="flex flex-row items-start justify-start gap-[1.25rem] mq450:flex-wrap">
                <div className="h-[2.5rem] w-[2.5rem] relative rounded-99xl-8 bg-darkgreen-200 box-border mix-blend-multiply border-[1px] border-solid border-red-200" />
                <div className="h-[2.5rem] w-[2.5rem] relative rounded-99xl-8 bg-red-300 box-border mix-blend-multiply border-[1px] border-solid border-red-200" />
                <div className="h-[2.5rem] w-[2.5rem] relative rounded-99xl-8 bg-red-300 box-border mix-blend-multiply border-[1px] border-solid border-red-200" />
                <div className="h-[2.5rem] w-[2.5rem] relative rounded-99xl-8 bg-red-200 box-border mix-blend-multiply border-[1px] border-solid border-red-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
