import React from "react";
import { DepthFrameByAnima } from "./sections/DepthFrameByAnima/DepthFrameByAnima";
import { DepthFrameWrapperByAnima } from "./sections2/DepthFrameWrapperByAnima";
import { DivByAnima } from "./sections2/DivByAnima/DivByAnima";
import { DivWrapperByAnima } from "./sections2/DivWrapperByAnima";
import { SectionComponentNodeByAnima } from "./sections2/SectionComponentNodeByAnima";

export const GalileoDesign2 = () => {
  // Data for sidebar images
  const sidebarImages = [
    {
      type: "background",
      className: "relative w-full h-[240px] rounded-xl",
      style: {
        background:
          "url(https://c.animaapp.com/m9yjlkqjSvoVOw/img/depth-7--frame-0.png) 50% 50% / cover",
      },
      alt: "Depth frame 0",
    },
    {
      type: "background",
      className: "relative flex-1 w-full grow rounded-xl",
      style: {
        background:
          "url(https://c.animaapp.com/m9yjlkqjSvoVOw/img/depth-7--frame-0-1.png) 50% 50% / cover",
      },
      alt: "Depth frame 0-1",
    },
    {
      type: "image",
      src: "https://c.animaapp.com/m9yjlkqjSvoVOw/img/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3-2.png",
      className: "relative w-full h-[220px] object-cover",
      alt: "Chorizo mozarella",
    },
    {
      type: "image",
      src: "https://c.animaapp.com/m9yjlkqjSvoVOw/img/article-1-1.png",
      className: "relative w-full h-[240px] object-cover",
      alt: "Article",
    },
    {
      type: "image",
      src: "https://c.animaapp.com/m9yjlkqjSvoVOw/img/komi-wallpaperjpg-transformed--3--1.png",
      className: "relative w-full h-[240px] object-cover",
      alt: "Komi wallpaperjpg",
    },
  ];

  // Recipe instructions
  const recipeInstructions = [
    "1. Rinse the basmati rice under cold water until the water runs clear.",
    "2. In a large pot, heat the oil over medium heat. Add the chopped onion and cook until softened, about 5 minutes.",
    "3. Add the minced garlic and cook for another minute.",
    "4. Stir in the turmeric powder and cook for 30 seconds.",
    "5. Add the rice to the pot and stir to coat it in the oil and spices.",
    "6. Pour in 3 cups of water and bring to a boil. Reduce the heat to low, cover, and simmer for 20 minutes or until most of the water is absorbed.",
    "7. Stir in the saffron water, dried fruits, nuts, and salt to taste.",
    "8. Cover the pot and cook for another 10-15 minutes on low heat, until the rice is fully cooked and fluffy.",
    "9. Garnish with pomegranate seeds before serving.",
  ];

  return (
    <main className="flex flex-col w-full bg-white">
      <section className="flex flex-col min-h-[500px] md:min-h-[700px] w-full bg-[#fcf9f7] px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-start relative w-full">
            <DepthFrameByAnima />
            <div className="flex flex-col lg:flex-row items-start justify-center px-4 sm:px-6 md:px-10 py-3 w-full">
              {/* Sidebar with images */}
              <div className="flex flex-col items-start gap-3 w-full lg:w-3/4 pr-0 lg:pr-4 py-3">
                {sidebarImages.map((image, index) => (
                  <div key={index} className="flex w-full gap-2 items-start">
                    <div className="flex flex-col w-full items-start gap-2">
                      {image.type === "background" ? (
                        <div
                          className={image.className}
                          style={image.style}
                          aria-label={image.alt}
                        />
                      ) : (
                        <img
                          className={image.className}
                          alt={image.alt}
                          src={image.src}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Main content area */}
              <div className="flex flex-col w-full lg:w-3/4 items-start">
                <div className="flex flex-col items-start w-full">
                  <div className="flex flex-col w-full py-3 items-start">
                    <div className="relative w-full h-70 md:h-80 rounded-xl bg-[url(https://c.animaapp.com/m9yjlkqjSvoVOw/img/depth-6--frame-0.svg)] bg-cover bg-[50%_50%]" />
                  </div>
                </div>
                <DepthFrameWrapperByAnima />
                <DivWrapperByAnima />
                <DivByAnima />

                <div className="flex flex-col items-start pt-1 pb-3 w-full">ّ
                  <div className="w-full mt-[-1.00px] font-sans font-normal text-[#1c160c] text-base md:text-lg leading-6">
                    {recipeInstructions.map((instruction, index) => (
                      <React.Fragment key={index}>
                        {instruction}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="w-full h-16 md:h-20" />

                <SectionComponentNodeByAnima />
              </div>
            </div>
          </div>
      </section>
    </main>
  );
};