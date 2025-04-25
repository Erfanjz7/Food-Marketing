import React from "react";
import { DepthFrameByAnima } from "./sections/DepthFrameByAnima/DepthFrameByAnima";
import { DepthFrameWrapperByAnima } from "./sections/DepthFrameWrapperByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";

export const GalileoDesign = () => {
  return (
    <main className="flex flex-col w-full bg-white">
      <section className="flex flex-col min-h-[800px] w-full bg-[#fcf9f7]">
        <div className="flex flex-col w-full">
          <DepthFrameByAnima />
          <div className="flex gap-1 p-6 w-full">
            <DepthFrameWrapperByAnima />
            <DivWrapperByAnima />
          </div>
        </div>
      </section>
    </main>
  );
};
