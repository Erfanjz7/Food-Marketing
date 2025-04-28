import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DepthFrameWrapperByAnima = () => {
  // Recipe information data
  const recipeInfo = [
    { label: "زمان آماده سازی", value: "30 دقیقه" },
    { label: "زمان پخت", value: "1 ساعت" },
    { label: "سختی", value: "5" },
  ];

  return (
    <Card className="border-none shadow-none w-full rtl">
      <div className="flex flex-col gap-0 p-4 space-y-0 w-full">
        {recipeInfo.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between py-2 w-full"
          >
            <div className="flex flex-col">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a08249] text-[19px] leading-[21px]">
                {item.label}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#1c160c] text-lg text-right leading-[21px]">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
