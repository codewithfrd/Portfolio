import React from "react";
import { Link } from "react-router-dom";

function Portfilio() {
  const cardItem = [
    {
      id: 1,
      img: "https://i.ytimg.com/vi/G0jO8kUrg-I/maxresdefault.jpg",
      name: "Todo List",
      path: "https://radiant-marigold-8db9d8.netlify.app/",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugit ea voluptatem tempore.",
    },
    {
      id: 2,
      img: "https://uizard.io/static/2dadbc6e1470cf063e80f38840d0d92f/a8e47/e5e727584926383c6fb465f443dd7371c3beb6bf-1440x835.png",
      name: "Weather",
      path: 'https://helpful-otter-a9caaf.netlify.app/',
      about:
        "simple weather app showing temp - humidity & widespeed",
    },
    {
      id: 3,
      img: "https://www.figma.com/community/resource/197d23f3-05db-49da-923f-43f4edaec1ec/thumbnail",
      name: "fronted",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugit ea voluptatem tempore.",
    },
    {
      id: 4,
      img: "https://miro.medium.com/v2/resize:fit:1400/1*Y04oL6cMJAbZoSAYzPKdYQ.png",
      name: "fronted",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugit ea voluptatem tempore.",
    },
    {
      id: 5,
      img: "https://www.figma.com/community/resource/197d23f3-05db-49da-923f-43f4edaec1ec/thumbnail",
      name: "fronted",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugit ea voluptatem tempore.",
    },
  ];

  return (
    <>
      <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20"
      >
        <div className="">
          <h1 className="text-3xl font-bold my-3">Portfolio</h1>
          <span className="underline font-semibold">Featured Project</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
            {cardItem.map((data) => {
              return (
                <div
                  key={data.id}
                  className="shadow-md p-3 lg:pb-10 rounded-2xl overflow-hidden"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="w-full sm:h-[55%] rounded-t-2xl"
                  />
                  <h2 className="mt-2 font-bold text-2xl text-blue-600">
                    {data.name}
                  </h2>
                  <p className="text-gray-500 font-semibold mb-2">{data.about}</p>

                  <a
                    href={data.path}
                    className="text-blue-500 font-semibold hover:underline "
                  >
                    show now
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfilio;
