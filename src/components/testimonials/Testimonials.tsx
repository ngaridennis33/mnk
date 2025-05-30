"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

// CAROUSEL DATA
interface DataType {
  profession: string;
  comment: string;
  imgSrc: string;
  name: string;
}

const postData: DataType[] = [
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/testimonial/user.svg",
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/mentor/user2.png",
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/mentor/user3.png",
  },
  {
    name: "Robert Fox",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/mentor/user1.png",
  },
  {
    name: "Leslie Alexander",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/mentor/user2.png",
  },
  {
    name: "Cody Fisher",
    profession: "CEO, Parkview Int.Ltd",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    imgSrc: "/assets/mentor/user3.png",
  },
];

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="bg-paleblue pb-10 sm:pb-32 lg:py-32" id="testimonial">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
          <div className="flex items-center justify-center flex-col gap-y-2 py-5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-kellygreen">
              Here&apos;s what our{" "}
              <span className="text-Blueviolet">customers</span> have to say
            </h2>
            <p className="text-lg font-medium text-slate-400/70">
              Discover how our service can benefit you
            </p>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div
                  className={`bg-white m-4 p-5 my-20 relative ${
                    i % 2 ? "middleDiv" : "testimonial-shadow"
                  }`}
                >
                  <div className="absolute top-[-45px]">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={100}
                      height={100}
                      className="inline-block"
                    />
                  </div>
                  <h4 className="text-base font-normal text-darkgray my-4">
                    {items.comment}
                  </h4>
                  <hr style={{ color: "#D7D5D5" }} />
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-darkbrown pt-4 pb-2">
                        {items.name}
                      </h3>
                      <h3 className="text-sm font-normal text-lightgray pb-2">
                        {items.profession}
                      </h3>
                    </div>
                    <div className="flex">
                      <FaStar className="text-gold w-5 h-5" />
                      <FaStar className="text-gold w-5 h-5" />
                      <FaStar className="text-gold w-5 h-5" />
                      <FaStar className="text-gold w-5 h-5" />
                      <FaStar className="text-lightgray w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}