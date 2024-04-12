import { useMemo } from "react";

const FrameComponent2 = ({
  propWidth,
  propBackgroundColor,
  propBorder,
  propBackgroundColor1,
  propBorder1,
  propBackgroundColor2,
  propBorder2,
  propBackgroundColor3,
  propBorder3,
  propBackgroundColor4,
  propBorder4,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const elevetedButtonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const elevetedButton1Style = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const before2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
      border: propBorder1,
    };
  }, [propBackgroundColor1, propBorder1]);

  const before3Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
      border: propBorder2,
    };
  }, [propBackgroundColor2, propBorder2]);

  const before4Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
      border: propBorder3,
    };
  }, [propBackgroundColor3, propBorder3]);

  const before5Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor4,
      border: propBorder4,
    };
  }, [propBackgroundColor4, propBorder4]);

  return (
    <section
      className="w-[93.625rem] flex flex-row items-start justify-center max-w-full text-center text-[1.5rem] text-darkslategray font-inter"
      style={frameSectionStyle}
    >
      <div className="w-[72.438rem] flex flex-col items-end justify-start gap-[1.625rem] max-w-full">
        <div className="self-stretch relative leading-[1.75rem] whitespace-pre-wrap mq450:text-[1.188rem] mq450:leading-[1.375rem]">
          Your Next Cloud Gen, make it easier for potential customers to power
          their business with Emali Cloud.
        </div>
        <div className="w-[70.688rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <div className="w-[45.875rem] flex flex-col items-start justify-start gap-[1.813rem] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[2.125rem] max-w-full mq950:gap-[1.063rem]">
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.531rem] px-[0rem] pb-[0rem] box-border min-w-[14.188rem] max-w-full">
                <button
                  className="cursor-pointer [border:none] py-[0.75rem] px-[1.25rem] bg-on-primary-container-color self-stretch rounded-xl shadow-[0px_16px_30px_5px_rgba(185,_95,_95,_0.12)] flex flex-row items-start justify-center whitespace-nowrap hover:bg-forestgreen"
                  style={elevetedButtonStyle}
                >
                  <div className="relative text-[2rem] font-medium font-inter text-white text-left">
                    Start now
                  </div>
                </button>
              </div>
              <button
                className="cursor-pointer py-[1.281rem] px-[4.25rem] bg-white rounded-xl shadow-[0px_16px_30px_5px_rgba(185,_95,_95,_0.12)] box-border flex flex-row items-start justify-start whitespace-nowrap max-w-full border-[2px] border-solid border-on-primary-container-color hover:bg-gainsboro hover:box-border hover:border-[2px] hover:border-solid hover:border-forestgreen mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border"
                style={elevetedButton1Style}
              >
                <div className="relative text-[2rem] font-medium font-inter text-black text-left">
                  Get an Expert
                </div>
              </button>
            </div>
            <div className="w-[45rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
              <div className="flex flex-row items-start justify-start gap-[1.25rem] mq450:flex-wrap">
                <div
                  className="h-[2.5rem] w-[2.5rem] relative rounded-99xl-8 bg-darkolivegreen-400 box-border mix-blend-multiply border-[1px] border-solid border-darkgreen-100"
                  style={before2Style}
                />
                <div
                  className="h-[2.5rem] w-[2.5rem] relative rounded-99xl-8 bg-darkolivegreen-100 box-border mix-blend-multiply border-[1px] border-solid border-darkgreen-100"
                  style={before3Style}
                />
                <div
                  className="h-[2.5rem] w-[2.5rem] relative rounded-99xl-8 bg-darkolivegreen-400 box-border mix-blend-multiply border-[1px] border-solid border-darkgreen-100"
                  style={before4Style}
                />
                <div
                  className="h-[2.5rem] w-[2.5rem] relative rounded-99xl-8 bg-darkolivegreen-400 box-border mix-blend-multiply border-[1px] border-solid border-darkgreen-100"
                  style={before5Style}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
