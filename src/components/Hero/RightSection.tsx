import React from 'react';

const RightSection: React.FC = () => (
  <section className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
    <img 
      loading="lazy" 
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b245947521deff407e1e9344597c7fb5fcc4df5e37c1103026e5105f6f1a389f?placeholderIfAbsent=true&apiKey=8cec0b3fca4a4810ab9f61cb89411e81" 
      alt="Fintech product illustration" 
      className="object-contain grow w-full aspect-[1.38] max-md:mt-10 max-md:max-w-full"
    />
  </section>
);

export default RightSection;

