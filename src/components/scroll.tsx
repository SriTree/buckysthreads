import React from "react";
import Image from "next/image";
import "./scroll.css";

const Scroll = () => {
  return (
    <div className="wrapper">
      <div className="item item1">
        <Image
          src="/scroll_img/image1.jpg"
          alt="Description of image"
          layout="fill" /* Use layout="fill" to ensure the image covers the container */
          className="object-cover" /* Use object-cover to ensure the image covers the container */
        />
      </div>
      <div className="item item2">
        <Image
          src="/scroll_img/image2.jpg"
          alt="Description of image"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="item item3">
        <Image
          src="/scroll_img/image3.jpg"
          alt="Description of image"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="item item4">
        <Image
          src="/scroll_img/image4.jpg"
          alt="Description of image"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="item item5">
        <Image
          src="/scroll_img/image5.jpg"
          alt="Description of image"
          layout="fill"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Scroll;
