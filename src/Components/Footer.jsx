import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
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

  return (
    <>
      <footer className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <hr className="my-8" />
        <ul className="flex space-x-5 text-xl md:text-2xl justify-center">
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
        <div className="mt-5 border-t border-gray-700 py-5 flex flex-col items-center sm:w-96 mx-auto">
          <p className="text-center">&copy; 2025 Your Company. All rights reserved.</p>
          <p>Suppotive Partner Friends....</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
