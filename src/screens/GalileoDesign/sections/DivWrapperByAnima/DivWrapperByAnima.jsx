import { SearchIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const DivWrapperByAnima = () => {
  // Featured dishes data
  const featuredDishes = [
    {
      id: 1,
      title: "Zereshk Polo with Chicken",
      description: "Saffron rice with barberries and chicken",
      image: "https://c.animaapp.com/m9wu7ijgw5981c/img/depth-7--frame-0.png",
    },
    {
      id: 2,
      title: "Khoresht Gheymeh",
      description: "Lamb and split pea stew",
      image: "https://c.animaapp.com/m9wu7ijgw5981c/img/depth-7--frame-0-1.png",
    },
    {
      id: 3,
      title: "Ash Reshteh",
      description: "Herbed noodle soup with legumes",
      image: "https://c.animaapp.com/m9wu7ijgw5981c/img/depth-7--frame-0-2.png",
    },
    {
      id: 4,
      title: "Tahchin",
      description: "Layered rice cake with chicken",
      image: "https://c.animaapp.com/m9wu7ijgw5981c/img/depth-7--frame-0-3.png",
    },
    {
      id: 5,
      title: "Fesenjan with Duck",
      description: "Walnut pomegranate stew with duck",
      image: "https://c.animaapp.com/m9wu7ijgw5981c/img/depth-7--frame-0-4.png",
    },
    {
      id: 6,
      title: "Kebab Koobideh",
      description: "Grilled ground meat skewers",
      image: "https://c.animaapp.com/m9wu7ijgw5981c/img/depth-7--frame-0-5.png",
    },
  ];

  return (
    <div className="flex flex-col max-w-[960px] items-start flex-1 grow">
      {/* SearchIcon Bar */}
      <div className="flex px-4 py-3 self-stretch w-full">
        <div className="flex items-center w-full h-12 rounded-xl bg-[#f2ede8] overflow-hidden">
          <div className="flex items-center pl-4">
            <SearchIcon className="h-6 w-6 text-[#96724f]" />
          </div>
          <Input
            className="flex-1 border-none bg-transparent h-full pl-2 pr-4 py-2 [font-family:'Epilogue',Helvetica] font-normal text-[#96724f] text-base focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="SearchIcon for recipes..."
          />
        </div>
      </div>

      {/* Section Title */}
      <div className="flex flex-col items-start pt-5 pb-3 px-4 w-full">
        <h2 className="self-stretch [font-family:'Epilogue',Helvetica] font-bold text-[#1c140c] text-[22px] leading-7">
          Our Featured Dishes
        </h2>
      </div>

      {/* Recipe Cards Grid */}
      <div className="flex flex-col items-start gap-3 p-4 w-full">
        {/* First Row */}
        <div className="grid grid-cols-5 gap-3 w-full">
          {featuredDishes.slice(0, 5).map((dish) => (
            <Card key={dish.id} className="w-full border-none shadow-none">
              <CardContent className="flex flex-col items-start gap-3 p-0 pb-3">
                <div
                  className="w-full h-[93px] rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${dish.image})` }}
                />
                <div className="flex flex-col items-start w-full">
                  <h3 className="mt-[-1.00px] [font-family:'Epilogue',Helvetica] font-medium text-[#1c140c] text-base leading-6">
                    {dish.title}
                  </h3>
                  <p className="mt-[-1.00px] [font-family:'Epilogue',Helvetica] font-normal text-[#96724f] text-sm leading-[21px]">
                    {dish.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex gap-3 w-full">
          {featuredDishes.slice(5).map((dish) => (
            <Card key={dish.id} className="w-[166px] border-none shadow-none">
              <CardContent className="flex flex-col items-start gap-3 p-0 pb-3">
                <div
                  className="w-full h-[93px] rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${dish.image})` }}
                />
                <div className="flex flex-col items-start w-full">
                  <h3 className="mt-[-1.00px] [font-family:'Epilogue',Helvetica] font-medium text-[#1c140c] text-base leading-6">
                    {dish.title}
                  </h3>
                  <p className="mt-[-1.00px] [font-family:'Epilogue',Helvetica] font-normal text-[#96724f] text-sm leading-[21px]">
                    {dish.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
