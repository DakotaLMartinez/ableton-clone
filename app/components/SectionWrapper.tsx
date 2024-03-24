import { ReactNode } from "react";

function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="w-5/6 md:w-2/3 xl:w-1/2 mb-1/12vw mx-auto">
      {children}
    </section>
  );
}

export default SectionWrapper;

SectionWrapper.Header = function SectionWrapperHeader ({ children }: { children: ReactNode }) {
  return (
    <h4 className="mb-4 larger:text-2xl larger:leading-10">
      {children}
    </h4>
  );
};
  
SectionWrapper.Paragraph = function SectionWrapperParagraph({ children }: { children: ReactNode }) {
  return (
    <p className="larger:text-lg">
      {children}
    </p>
  );
}