import React from "react";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const DepthFrameWrapperByAnima = () => {
  // Data for filter options
  const cuisineTypes = ["Italian", "Mexican", "Chinese", "Indian", "Japanese"];
  const dishCategories = [
    "Appetizer",
    "Main Course",
    "Dessert",
    "Soup",
    "Salad",
  ];
  const dietaryOptions = [
    "Vegetarian",
    "Vegan",
    "Pescatarian",
    "Keto",
    "Paleo",
  ];
  const advancedFilters = ["Gluten-Free", "Dairy-Free", "Nut-Free"];

  return (
    <aside className="flex flex-col w-80 h-[695px] items-start">
      <header className="flex flex-col items-start pt-4 pb-2 px-4 w-full">
        <h2 className="w-full font-['Epilogue',Helvetica] font-bold text-[#1c140c] text-lg leading-[23px]">
          Filter Recipes
        </h2>
      </header>

      <div className="flex flex-wrap max-w-[480px] items-end gap-[16px_16px] px-4 py-3 w-full">
        <div className="flex-col min-w-40 flex-1 grow flex items-start">
          <div className="flex flex-col items-start pb-2 w-full">
            <label className="w-full font-['Epilogue',Helvetica] font-medium text-[#1c140c] text-base leading-6">
              Cuisine Type
            </label>
          </div>
          <Select>
            <SelectTrigger className="w-full h-[53px]">
              <SelectValue placeholder="Select cuisine" />
            </SelectTrigger>
            <SelectContent>
              {cuisineTypes.map((cuisine) => (
                <SelectItem key={cuisine} value={cuisine.toLowerCase()}>
                  {cuisine}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap max-w-[480px] items-end gap-[16px_16px] px-4 py-3 w-full">
        <div className="flex-col min-w-40 flex-1 grow flex items-start">
          <div className="flex flex-col items-start pb-2 w-full">
            <label className="w-full font-['Epilogue',Helvetica] font-medium text-[#1c140c] text-base leading-6">
              Dish Category
            </label>
          </div>
          <Select>
            <SelectTrigger className="w-full h-[53px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {dishCategories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap max-w-[480px] items-end gap-[16px_16px] px-4 py-3 w-full">
        <div className="flex-col min-w-40 flex-1 grow flex items-start">
          <div className="flex flex-col items-start pb-2 w-full">
            <label className="w-full font-['Epilogue',Helvetica] font-medium text-[#1c140c] text-base leading-6">
              Dietary
            </label>
          </div>
          <Select>
            <SelectTrigger className="w-full h-[53px]">
              <SelectValue placeholder="Select dietary" />
            </SelectTrigger>
            <SelectContent>
              {dietaryOptions.map((option) => (
                <SelectItem key={option} value={option.toLowerCase()}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <img
        className="w-full h-[120px]"
        alt="Depth frame"
        src="https://c.animaapp.com/m9wu7ijgw5981c/img/depth-4--frame-4.png"
      />

      <div className="flex flex-col items-start pt-4 pb-2 px-4 w-full">
        <h2 className="w-full font-['Epilogue',Helvetica] font-bold text-[#1c140c] text-lg leading-[23px]">
          Advanced Filters
        </h2>
      </div>

      <div className="flex flex-col items-start px-4 py-0 w-full">
        {advancedFilters.map((filter) => (
          <div key={filter} className="flex items-start gap-3 px-0 py-3 w-full">
            <Checkbox
              id={filter.toLowerCase()}
              className="w-5 h-5 rounded border-2 border-solid border-[#e8dbd1]"
            />
            <label
              htmlFor={filter.toLowerCase()}
              className="font-['Epilogue',Helvetica] font-normal text-[#1c140c] text-base leading-6 whitespace-nowrap"
            >
              {filter}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};
