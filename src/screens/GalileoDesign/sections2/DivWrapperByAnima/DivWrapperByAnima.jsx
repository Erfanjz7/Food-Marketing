import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = () => {
  // Ingredients data for mapping
  const ingredients = [
    "2 cups basmati rice",
    "1/4 cup vegetable oil",
    "1 large onion, finely chopped",
    "2 cloves garlic, minced",
    "1 teaspoon turmeric powder",
    "1/2 teaspoon saffron threads, soaked in 2 tablespoons hot water",
    "1 cup mixed dried fruits (raisins, barberries, apricots), soaked",
    "1/2 cup slivered almonds and pistachios",
    "Salt and pepper to taste",
    "Pomegranate seeds for garnish",
  ];

  return (
    <div className="flex flex-col items-start p-4 pl-[22px] w-full">
      <Card className="w-full rounded-xl shadow-[0px_0px_4px_#0000001a] overflow-hidden">
        <CardContent className="p-4">
          <div className="flex flex-col items-start w-full">
            <h2 className="font-bold text-2xl text-[#1c160c] [font-family:'Plus_Jakarta_Sans',Helvetica] leading-[23px] w-full mb-1">
              Ingredients
            </h2>

            <div className="w-full">
              <ul className="text-[#a08249] text-[19px] [font-family:'Plus_Jakarta_Sans',Helvetica] leading-6">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-1">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
