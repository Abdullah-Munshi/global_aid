import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iconUserAdd from "../../assets/userAdd.svg";
import iconLightning from "../../assets/lightning.svg";
import iconTicket from "../../assets/ticket.svg";
import iconFlag from "../../assets/flag.svg";

const ctaArray = [
  {
    icon: iconUserAdd,
    title: "Joined GlobalAid",
    text: "ID 131 - 0xAu89a...s0d",
  },
  {
    icon: iconLightning,
    title: "Activated a Pack",
    text: "ID 131 - 0xAu89a...s0d",
  },
  {
    icon: iconTicket,
    title: "Purchased a Pack",
    text: "ID 131 - 0xAu89a...s0d",
  },
  {
    icon: iconFlag,
    title: "Claimed $12",
    text: "ID 131 - 0xAu89a...s0d",
  },
  {
    icon: iconFlag,
    title: "Claimed $12",
    text: "ID 131 - 0xAu89a...s0d",
  },
  {
    icon: iconTicket,
    title: "Purchased a Pack",
    text: "ID 131 - 0xAu89a...s0d",
  },
];

const CarouselCard = ({ iconUrl, title, text }) => {
  return (
    <div className="bg-gradient-three rounded-10 mr-4 lg:mr-5 grid grid-cols-[24px_auto] gap-3 items-center p-4">
      <div>
        <img src={iconUrl} alt="" />
      </div>
      <div>
        <h6 className="text-xs_next font-bold text-white leading-tight">
          {title}
        </h6>
        <p className="text-[#B3A6E6] font-xs_prev font-normal">{text}</p>
      </div>
    </div>
  );
};

const CtaCarousel = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: "",
    centerMode: true,
    centerPadding: 70,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: 50,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: 20,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {ctaArray.map((item, index) => {
        return (
          <CarouselCard
            key={index}
            iconUrl={item.icon}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </Slider>
  );
};

export default CtaCarousel;
