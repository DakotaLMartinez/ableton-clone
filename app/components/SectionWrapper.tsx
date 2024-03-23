import { ReactNode } from "react";

function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="w-5/6 md:w-2/3 xl:w-1/2 mb-1/12vw mx-auto">
      {children}
    </section>
  );
}

export default SectionWrapper;
