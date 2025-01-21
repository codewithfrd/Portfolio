import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  const socialMedia = [
    {
      id: 1,
      icons: <FaFacebook />,
      links: "https://www.facebook.com/login.php/",
    },
    {
      id: 2,
      icons: <FaSquareInstagram />,
      links: "https://www.instagram.com/login.php/",
    },
    {
      id: 3,
      icons: <FaTwitter />,
      links: "https://www.twitter.com/login.php/",
    },
    {
      id: 4,
      icons: <FaTelegram />,
      links: "https://www.telegram.com/login.php/",
    },
  ];

  const working = [
    {
      id: 1,
      icons: <TiHtml5 />,
    },
    {
      id: 2,
      icons: <RiTailwindCssFill />,
    },
    {
      id: 3,
      icons: <IoLogoJavascript />,
    },
    {
      id: 4,
      icons: <FaReact />,
    },
  ];

  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* profile details  */}
          <div className=" md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to my Profile</span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-purple-600 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                loop={true}
                backSpeed={50}
              />
            </div>
            <br className="hidden md:block" />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              libero quas corrupti perspiciatis hic nisi, dolore ullam dolorum
              neque. Atque, blanditiis. Obcaecati placeat provident ab deserunt,
              necessitatibus odio ex perferendis.
            </p>
            <br className="hidden md:block" />
            {/* social media & working platform  icons  */}
            <div className="grid  lg:grid-cols-2 justify-center md:justify-between ">
              <div className="">
                <h1 className="my-2 mx-1 font-semibold md:text-xl text-md ">
                  Available on
                </h1>
                <ul className="flex space-x-5 text-xl md:text-2xl ">
                  {socialMedia.map((data, idx) => {
                    return (
                      <a href={data.links} key={data.id} target="_blank">
                        <li className="cursor-pointer" key={idx}>
                          {data.icons}
                        </li>
                      </a>
                    );
                  })}
                </ul>
              </div>
              <div>
                <div className="">
                  <h1 className="my-2 mx-1 font-semibold md:text-xl text-md">
                    Available on
                  </h1>
                  <ul className="flex space-x-5 text-xl md:text-2xl ">
                    {working.map((data, idx) => {
                      return (
                        <li className="cursor-pointer" key={idx}>
                          {data.icons}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* profile images */}
          <div className="order-1 md:order-2">
            <img
              src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369991.png"
              alt=""
              className="w-96 mx-auto md:w-[450px] md:h-[450px]"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
