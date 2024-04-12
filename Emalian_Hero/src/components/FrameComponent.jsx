const FrameComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[6.5rem] pl-[1.25rem] box-border max-w-full mq450:pr-[1.625rem] mq450:box-border mq925:pr-[3.25rem] mq925:box-border">
      <div className="w-[49.75rem] flex flex-col items-end justify-start gap-[1.5rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq925:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.438rem] px-[0rem] pb-[0rem] box-border min-w-[16.188rem] max-w-full mq925:flex-1">
            <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-[0.75rem] px-[1.5rem] box-border max-w-full z-[1]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 rounded-21xl flex flex-row items-start justify-start max-w-full">
                <div className="flex-1 rounded-xl bg-orange-100 shadow-[0px_16px_30px_5px_rgba(185,_95,_95,_0.12)] flex flex-row items-center justify-center py-[1.281rem] px-[1.25rem] box-border whitespace-nowrap max-w-full">
                  <div className="relative text-[2rem] font-medium font-inter text-white text-left">
                    Start now
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex-[0.8794] flex flex-row items-start justify-start py-[0.75rem] px-[1.5rem] box-border min-w-[16.188rem] max-w-full z-[2] mq925:flex-1">
            <button className="cursor-pointer py-[1.281rem] px-[4.25rem] bg-white flex-1 rounded-xl shadow-[0px_16px_30px_5px_rgba(185,_95,_95,_0.12)] box-border flex flex-row items-start justify-start whitespace-nowrap max-w-full border-[2px] border-solid border-orange-100 hover:bg-gainsboro hover:box-border hover:border-[2px] hover:border-solid hover:border-chocolate mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
              <div className="relative text-[2rem] font-medium font-inter text-black text-left">
                Get an Expert
              </div>
            </button>
          </div>
        </div>
        <div className="w-[48.875rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[1.25rem]">
            <div className="h-[2.5rem] w-[2.5rem] relative rounded-99xl-8 bg-orange-100 box-border mix-blend-multiply border-[1px] border-solid border-orange-100" />
            <div className="h-[2.5rem] w-[2.5rem] relative rounded-99xl-8 bg-orange-200 box-border mix-blend-multiply border-[1px] border-solid border-orange-100" />
            <div className="h-[2.5rem] w-[2.5rem] relative rounded-99xl-8 bg-orange-200 box-border mix-blend-multiply border-[1px] border-solid border-orange-100" />
            <div className="h-[2.5rem] w-[2.5rem] relative rounded-99xl-8 bg-orange-200 box-border mix-blend-multiply border-[1px] border-solid border-orange-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
