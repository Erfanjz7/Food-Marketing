import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DepthFrameWrapperByAnima = () => {
  // Recipe information data
  const recipeInfo = [
    { label: "Preparation Time", value: "30 min" },
    { label: "Cooking Time", value: "1 hr" },
    { label: "difficulty", value: "5" },
  ];

  return (
    <Card className="border-none shadow-none">
      <CardContent className="flex flex-col p-4 space-y-0">
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
      </CardContent>
    </Card>
  );
};
