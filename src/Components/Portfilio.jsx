import React from "react";

function Portfilio() {
  const cardItem = [
    {
      id: 1,
      img: "https://blog.zegocloud.com/wp-content/uploads/2024/02/landing-page-frontend-project-1024x576.jpg",
      name: "fronted",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugit ea voluptatem tempore.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWfAMqYUeUgrwTviq35mWCp3mdaK34mLtOA&s",
      name: "fronted",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugit ea voluptatem tempore.",
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
      <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="">
          <h1 className="text-3xl font-bold my-3">Portfolio</h1>
          <span className="underline font-semibold">Featured Project</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
            {cardItem.map((data)=>{
                return <div key={data.id} className="shadow-md p-3 lg:pb-10 rounded-2xl overflow-hidden">
                    <img src={data.img} alt="" className="w-full sm:h-[55%] rounded-t-2xl" />
                    <h2 className="mt-2 font-bold text-2xl text-blue-600">{data.name}</h2>
                    <p className="text-gray-500 font-semibold">{data.about}</p>
                    <button className="mt-2 px-4 py-2 bg-red-400 rounded-md text-white cursor-pointer hover:bg-green-600 duration-200">Show Now</button>
                </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfilio;
