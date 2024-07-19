import React from "react";
import Image from "next/image";
import "./logoscroll.css";

const LogoScroll = () => {
  return (
    <div className="logowrapper">
      <div className="logoitem logoitem1">
        <Image
          src="/logos/adidas.svg"
          alt="Adidas logo"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="logoitem logoitem2">
        <Image
          src="/logos/awdis.svg"
          alt="AWDis logo"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="logoitem logoitem3">
        <Image
          src="/logos/champion-logo.svg"
          alt="Champion logo"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="logoitem logoitem4">
        <Image
          src="/logos/comfort-colors.svg"
          alt="Comfort Colors logo"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="logoitem logoitem5">
        <Image
          src="/logos/fruit-of-the-loom.svg"
          alt="Fruit of the Loom logo"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="logoitem logoitem6">
        <Image
          src="/logos/Gildan Logo Vector.svg"
          alt="Gildan logo"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="logoitem logoitem7">
        <Image
          src="/logos/hanes.svg"
          alt="Hanes logo"
          layout="fill"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default LogoScroll;
