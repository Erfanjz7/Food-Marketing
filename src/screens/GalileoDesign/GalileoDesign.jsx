import React from "react";
import { DepthFrameByAnima } from "./sections/DepthFrameByAnima/DepthFrameByAnima";
import { DepthFrameWrapperByAnima } from "./sections/DepthFrameWrapperByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";

export const GalileoDesign = () => {
  return (
    <main className="flex flex-col w-full bg-white">
      <section className="flex flex-col min-h-[600px] md:min-h-[800px] w-full bg-[#fcf9f7]">
        <div className="flex flex-col w-full">
          <DepthFrameByAnima />
          <div className="flex flex-col md:flex-row gap-1 p-3 md:p-6 w-full rtl">
            <DepthFrameWrapperByAnima />
            <DivWrapperByAnima />
          </div>
        </div>
      </section>
    </main>
  );
};