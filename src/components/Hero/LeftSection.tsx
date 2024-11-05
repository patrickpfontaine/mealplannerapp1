import React from 'react';

const LeftSection: React.FC = () => (
  <section className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col self-stretch px-0.5 my-auto w-full font-semibold text-white max-md:mt-10 max-md:max-w-full">
      <h1 className="z-10 -mt-1.5 text-8xl tracking-tighter leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        <span className="text-8xl">Scale Fintech</span>
        <br />
        Safe And Secure
      </h1>
      <p className="mt-11 text-2xl font-medium tracking-wider leading-7 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
        Ship your fintech products to your customers with fast and reliable processes.{" "}
        <span className="font-semibold">Secure and highly customizable</span>. Rise Finance is the best partner for you if you want to scale your finance products worldwide.
      </p>
      <button className="gap-2.5 self-start px-16 py-7 mt-11 text-lg leading-none uppercase whitespace-nowrap border-4 border-violet-600 border-solid bg-slate-900 bg-opacity-20 max-md:px-5 max-md:mt-10 max-md:ml-1">
        consultation
      </button>
    </div>
  </section>
);

export default LeftSection;

