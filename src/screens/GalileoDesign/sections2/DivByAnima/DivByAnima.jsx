import React from "react";
import { Button } from "../../../../components/ui/button";

export const DivByAnima = () => {
  return (
    <div className="flex items-start justify-around self-stretch w-full">
      <div className="flex flex-wrap gap-3 px-4 py-3">
        <Button className="h-10 px-4 py-0 font-bold text-sm bg-[#009963] text-white rounded-[20px] hover:bg-[#008855]">
          Save Recipe
        </Button>

        <Button
          variant="outline"
          className="h-10 px-4 py-0 font-bold text-sm bg-[#f4efe5] text-[#1c160c] rounded-[20px] border-none hover:bg-[#e9e4da]"
        >
          Share
        </Button>
      </div>
    </div>
  );
};
