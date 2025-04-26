import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SectionComponentNodeByAnima = () => {
  // Recipe card data for mapping
  const recipeCards = [
    {
      id: 1,
      title: "Fesenjan (Walnut Pomegranate Stew)",
      image:
        "https://c.animaapp.com/m9yjlkqjSvoVOw/img/komi-san-wa-komyushou-desu---chapter-411---16-1.png",
      imageAlt: "Komi san wa",
    },
    {
      id: 2,
      title: "Ghormeh Sabzi (Herb Stew)",
      image: "https://c.animaapp.com/m9yjlkqjSvoVOw/img/toradora-1.png",
      imageAlt: "Toradora",
    },
    {
      id: 3,
      title: "Koobideh Kebab (Ground Meat Kebab)",
      image:
        "https://c.animaapp.com/m9yjlkqjSvoVOw/img/love--chunibyo---other-delusions--waaalll-1.png",
      imageAlt: "Love chunibyo other",
    },
    {
      id: 4,
      title: "Tahdig \n(Crispy Rice)",
      image:
        "https://c.animaapp.com/m9yjlkqjSvoVOw/img/shes-tired-of-fighting-with-you-link-attached-v0-dxmr0toz3hz81-2.png",
      imageAlt: "Shes tired of",
    },
  ];

  return (
    <section className="flex items-start w-full">
      <div className="w-full p-4 flex items-start gap-3 overflow-x-auto">
        {recipeCards.map((card) => (
          <Card
            key={card.id}
            className="flex flex-col min-w-[256px] h-[267px] rounded-xl overflow-hidden shadow-[0px_0px_4px_#0000001a] bg-white"
          >
            <div className="h-[131px] rounded-xl overflow-hidden">
              <img
                className="w-full h-[139px] object-cover"
                alt={card.imageAlt}
                src={card.image}
              />
            </div>

            <CardContent className="flex flex-col justify-between flex-1 p-4">
              <div className="flex flex-col items-start w-full">
                <h3 className="font-medium text-xl leading-6 text-[#1c160c] font-['Plus_Jakarta_Sans',Helvetica]">
                  {card.title.includes("\n")
                    ? card.title.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i === 0 && <br />}
                        </React.Fragment>
                      ))
                    : card.title}
                </h3>
              </div>

              <Button
                variant="ghost"
                className="w-full h-10 mt-auto bg-[#f4efe5] rounded-[20px] hover:bg-[#f4efe5] hover:brightness-95"
              >
                <span className="font-bold text-sm text-center text-[#1c160c] font-['Plus_Jakarta_Sans',Helvetica]">
                  Explore Related Recipes
                </span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
