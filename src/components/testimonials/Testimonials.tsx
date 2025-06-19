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
    name: "Grace M.",
    profession: "Mother of twins, Kisumu",
    comment:
      "Thanks to your support, I received a safe delivery kit and postnatal care. I never felt alone during my pregnancy—thank you for being my lifeline.",
    imgSrc: "/assets/testimonial/user.svg",
  },
  {
    name: "Dr. Faith Njoroge",
    profession: "Nurse, Community Health Center",
    comment:
      "Your donations have helped us stock essential supplies for safe births. We’ve seen a drop in complications and a rise in healthy newborns.",
    imgSrc: "/assets/mentor/user2.png",
  },
  {
    name: "Samuel K.",
    profession: "Volunteer, Maternal Care Program",
    comment:
      "Working with this initiative has been eye-opening. It’s more than giving—it’s restoring hope to families who felt forgotten.",
    imgSrc: "/assets/mentor/user3.png",
  },
  {
    name: "Linet O.",
    profession: "Young Mother, Kakamega",
    comment:
      "I had nothing when I learned I was pregnant. But your help gave me food, counseling, and confidence. My baby is now healthy and strong.",
    imgSrc: "/assets/mentor/user1.png",
  },
  {
    name: "Dr. John K.",
    profession: "Medical Director, Sunrise Clinic",
    comment:
      "We can now deliver over 100 babies a month safely, thanks to your generous contributions to our maternal care unit.",
    imgSrc: "/assets/mentor/user2.png",
  },
  {
    name: "Jane W.",
    profession: "Donor & Advocate",
    comment:
      "Giving to this cause is one of the most rewarding things I’ve done. You know your donation is saving lives and building futures.",
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
      <div className="bg-paleblue pb-10 sm:pb-32 lg:py-12" id="testimonial">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
          <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-kellygreen">
            Real Stories of <span className="text-Blueviolet">Hope & Impact</span>
          </h2>
          <p className="text-lg font-medium text-slate-400/70">
            Hear directly from those touched by your kindness
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