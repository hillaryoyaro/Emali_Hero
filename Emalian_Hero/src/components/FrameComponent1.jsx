import Component from "./Component";

const FrameComponent1 = () => {
  return (
    <div className="self-stretch h-[18.875rem] relative max-w-full text-center text-[4.369rem] text-gray-200 font-inter">
      <Component />
      <div className="absolute top-[6.813rem] left-[41.063rem] rounded-99xl-8 bg-darkorange-300 w-[8.125rem] h-[8.125rem] mix-blend-multiply z-[2]" />
    </div>
  );
};

export default FrameComponent1;
