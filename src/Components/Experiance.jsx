import React from "react";

function Experiance() {
  const cardItems = [
   {
    id:1,
    img:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    name:"HTML"
   },
   {
    id:2,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGec7kH2HjxuwdnV0XH2KyojMdkYLJU-sfw&s",
    name:"Tailwind"
   },
   {
    id:3,
    img:"https://ih1.redbubble.net/image.815350031.4911/st,large,507x507-pad,600x600,f8f8f8.u1.webp",
    name:"Javascript"
   },
   {
    id:4,
    img:"https://www.stonebranch.com/integration-hub/media/3c/64/66/1636642258/Stonebranch_SQL_Vendor_Product_Logo.svg",
    name:"SQL"
   },
   {
    id:5,
    img:"https://miro.medium.com/v2/resize:fit:1000/1*Yafu7ihc1LFuP4azerAa4w.png",
    name:"React js"
   },
   {
    id:6,
    img:"https://banner2.cleanpng.com/20180410/qgw/avf4qeujo.webp",
    name:"Node js"
   },
  ]

  return (
    <>
      <div name="Experiance" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="">
          <h1 className="text-3xl font-bold my-3">Experices </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-3 ">
            {
              cardItems.map((data)=>{
                return <div key={data.id} className="">
                  <img src={data.img} alt="" className="w-28 h-28 rounded-full mx-auto shadow-md hover:scale-105 duration-200 cursor-pointer"/>
                  <p className="text-center my-2 font-semibold text-2xl">{data.name}</p>
                </div>
              })  
            }
        </div>
      </div>
    </>
  );
}

export default Experiance;
