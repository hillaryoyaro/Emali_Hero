const Emalilogo = () => {
  return (
    <div className="flex-1 flex flex-row items-start justify-start py-[0rem] pr-[2.125rem] pl-[0rem] box-border relative max-w-full z-[1] ml-[-15.312rem] text-left text-[5.813rem] text-black font-signika">
      <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
        <b className="self-stretch h-[2.813rem] relative flex items-center shrink-0">
          emali
        </b>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[2.688rem]">
          <img
            className="h-[1.25rem] w-[6.125rem] relative"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
      <div className="h-[1.25rem] w-[1.25rem] absolute !m-[0] bottom-[1.625rem] left-[14.063rem] rounded-[50%] bg-orange-100 z-[1]" />
      <div className="flex-1 flex flex-col items-start justify-start pt-[0.438rem] px-[0rem] pb-[0rem]">
        <b className="self-stretch h-[2.813rem] relative flex items-center shrink-0">
          Cloud
        </b>
      </div>
    </div>
  );
};

export default Emalilogo;
