import { useMemo } from "react";

const FrameComponent3 = ({
  path42,
  gadsImagePictureRFebbUK0C,
  justCloudYourBusinessInfr,
  frameDivWidth,
  frameDivAlignSelf,
  path42IconBackgroundColor,
  frameDivWidth1,
  beforeWidth,
  gadsImagePictureRFebbUKBackgroundColor,
  gadsImagePictureRFebbUKPadding,
  frameDivBackgroundColor,
  justCloudYourBorderRadius,
  propRight,
  propBackgroundColor,
}) => {
  const frameHeaderStyle = useMemo(() => {
    return {
      width: frameDivWidth,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivWidth, frameDivAlignSelf]);

  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: path42IconBackgroundColor,
    };
  }, [path42IconBackgroundColor]);

  const gadsImageStyle = useMemo(() => {
    return {
      width: frameDivWidth1,
    };
  }, [frameDivWidth1]);

  const frameDivStyle = useMemo(() => {
    return {
      width: beforeWidth,
    };
  }, [beforeWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: gadsImagePictureRFebbUKBackgroundColor,
      padding: gadsImagePictureRFebbUKPadding,
    };
  }, [gadsImagePictureRFebbUKBackgroundColor, gadsImagePictureRFebbUKPadding]);

  const beforeStyle = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivBackgroundColor]);

  const gadsImagePictureRFebbUKStyle = useMemo(() => {
    return {
      borderRadius: justCloudYourBorderRadius,
    };
  }, [justCloudYourBorderRadius]);

  const before1Style = useMemo(() => {
    return {
      right: propRight,
      backgroundColor: propBackgroundColor,
    };
  }, [propRight, propBackgroundColor]);

  return (
    <header
      className="w-[101.438rem] flex flex-col items-start justify-start gap-[1.625rem] max-w-full text-left text-[5.813rem] text-gray-100 font-signika"
      style={frameHeaderStyle}
    >
      <div className="w-[30.625rem] flex flex-row items-end justify-start max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1rem]">
          <div className="self-stretch h-[2.813rem] relative">
            <b className="absolute top-[0rem] left-[0rem] flex items-center w-full h-full">
              emali
            </b>
            <div className="absolute top-[0rem] left-[0rem] w-full h-full text-black">
              <b className="absolute top-[0rem] left-[0rem] flex items-center w-[15.313rem] h-[2.813rem] z-[1]">
                emali
              </b>
              <div
                className="absolute top-[2.188rem] left-[14.063rem] rounded-[50%] bg-on-primary-container-color w-[1.25rem] h-[1.25rem] z-[2]"
                style={ellipseDivStyle}
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-[0rem] px-[2.688rem]">
            <img
              className="h-[1.25rem] w-[6.125rem] relative z-[1]"
              loading="lazy"
              alt=""
              src={path42}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.488rem] text-black">
          <b className="self-stretch h-[5.719rem] relative flex items-center shrink-0 z-[3]">
            Cloud
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full text-center text-[4.369rem] text-gray-200 font-inter">
        <div
          className="w-[92.75rem] flex flex-col items-end justify-start gap-[0.813rem] max-w-full"
          style={gadsImageStyle}
        >
          <div
            className="w-[37.125rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full"
            style={frameDivStyle}
          >
            <div
              className="h-[16.25rem] w-[16.25rem] rounded-99xl-8 bg-darkolivegreen-100 flex flex-row items-start justify-start pt-[3.875rem] pb-[3.938rem] pr-[3.375rem] pl-[3.5rem] box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border"
              style={frameDiv1Style}
            >
              <div
                className="h-[16.25rem] w-[16.25rem] relative rounded-99xl-8 bg-darkolivegreen-100 hidden"
                style={beforeStyle}
              />
              <img
                className="h-[8.438rem] flex-1 relative rounded-lg max-w-full overflow-hidden object-cover z-[1]"
                loading="lazy"
                alt=""
                src={gadsImagePictureRFebbUK0C}
                style={gadsImagePictureRFebbUKStyle}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <b className="flex-1 relative tracking-[-2px] leading-[5rem] inline-block whitespace-pre-wrap shrink-0 max-w-full">
              {justCloudYourBusinessInfr}
            </b>
            <div
              className="h-[12.5rem] w-[12.5rem] absolute !m-[0] top-[calc(50%_-_100px)] right-[27.438rem] rounded-99xl-8 bg-darkolivegreen-200 mix-blend-multiply z-[1]"
              style={before1Style}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent3;
