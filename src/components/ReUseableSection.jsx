import React from "react";

const ReUseableSection = (props) => {
  let { color, img, title, paragraph, button } = props;
  console.log(color);
  return (
    <div className={` bg-[${color}] grid grid-cols-1  lg:grid-cols-2  py-8`}>
      <div className=" flex justify-center items-center flex-col order-5">
        <h1 className="tracking-[.4rem] text-[2.2rem] leading-[3.2rem] mb-4 md:text-[3.2rem] max-w-lg text-center font-bold text-[#1e3932] ">
          {title}
        </h1>
        <p className="text-[1.2rem] md:text-2xl max-w-sm text-left mb-8">
          {paragraph}{" "}
        </p>
        <a
          href="#"
          className="py-2 px-4 outline outline-1 rounded-3xl hover:bg-gray-200"
        >
          {button}{" "}
        </a>
      </div>
      <div className="order-1">
        <img src={img} alt="#" />
      </div>
    </div>
  );
};

export default ReUseableSection;
