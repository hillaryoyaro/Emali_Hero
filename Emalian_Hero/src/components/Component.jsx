const Component = () => {
  return (
    <div className="absolute top-[0rem] left-[0rem] w-full flex flex-col items-start justify-start gap-[3.75rem] max-w-full h-full z-[1] text-center text-[4.369rem] text-gray-200 font-inter mq700:gap-[1.875rem]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[3.375rem] max-w-full mq700:gap-[1.688rem]">
        <b className="self-stretch relative tracking-[-2px] leading-[5rem] whitespace-pre-wrap mq450:text-[2.625rem] mq450:leading-[3rem] mq925:text-[3.5rem] mq925:leading-[3.938rem]">{`Start  Optimizing  Cost & Production  `}</b>
        <div className="w-[76.75rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[4.269rem]">
          <b className="w-[65.125rem] relative tracking-[-2px] leading-[5rem] flex items-center shrink-0 max-w-full mq450:text-[2.563rem] mq450:leading-[3rem] mq925:text-[3.438rem] mq925:leading-[3.938rem]">
            <span className="w-full">
              <span>{`Workloads with `}</span>
              <span className="text-darkorange-100">Emali Cloud.</span>
            </span>
          </b>
        </div>
      </div>
      <div className="w-[85.25rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[1.5rem] text-darkslategray">
        <div className="w-[72.438rem] relative leading-[1.75rem] whitespace-pre-wrap flex items-center justify-center mq450:text-[1.188rem] mq450:leading-[1.375rem]">
          Your Next Cloud Gen, make it easier for potential customers to power
          their business with Emali Cloud.
        </div>
      </div>
    </div>
  );
};

export default Component;
