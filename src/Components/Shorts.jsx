import React, { useEffect, useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ReplyIcon from "@mui/icons-material/Reply";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { Avatar } from "@mui/material";
import Button from "@mui/joy/Button";
import PauseIcon from "@mui/icons-material/Pause";
import Video from "./Video";
import Navbar from "./Navbar";
import Sea from "./Video/Sea.mp4";
import Flowers from "./Video/Flower.mp4";
import Flowers2 from "./Video/Flower2.mp4";
import Dog from "./Video/Dog.mp4";
import Rankoon from "./Video/Rankoon.mp4";
import Ballons from "./Video/Balloons.mp4";
import Cat from "./Video/Cat.mp4";

const VideoData = [
  {
    title: "Sea",
    videoLink: Sea,
  },
  {
    title: "Flowers",
    videoLink: Flowers,
  },
  {
    title: "Flowers2",
    videoLink: Flowers2,
  },
  {
    title: "Bike On Road",
    videoLink: Dog,
  },
  {
    title: "Snow",
    videoLink: Rankoon,
  },
  {
    title: "City",
    videoLink: Ballons,
  },
  {
    title: "Cat",
    videoLink: Cat,
  },
];

function Shorts() {
  const handleScrollUp = () => {
    // Implement scrolling up logic
    // You can adjust the scroll amount based on your requirements
    const scrollAmount = window.innerHeight;

    // Scroll up by subtracting the scroll amount
    window.scrollTo({
      top: window.scrollY - scrollAmount,
      behavior: "smooth", // Optional: Add smooth scrolling effect
    });
  };

  const handleScrollDown = () => {
    // Implement scrolling down logic
    // You can adjust the scroll amount based on your requirements
    const scrollAmount = window.innerHeight;

    // Scroll down by adding the scroll amount
    window.scrollTo({
      top: window.scrollY + scrollAmount,
      behavior: "smooth", // Optional: Add smooth scrolling effect
    });
  };

  return (
    <div className="">
      <div className="d-none d-lg-block">
        <Navbar />
      </div>

      <div className="d-flex align-items-start">
        <div
          className=""
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          <div>
            <div className="d-flex align-items-center row justify-content-between">
              {VideoData.map((video, index) => (
                <Video key={index} video={video} />
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-5 ms-3 d-none d-lg-block d-flex align-items-center justify-content-between gap-5 "
          style={{
            position: "fixed",
            marginBottom: "-150px",
            paddingTop: "130px", // Add padding from the top
          }}
        >
          <div className="mb-3">
            <IconButton
              className="scroll-button p-3 text-black"
              onClick={handleScrollUp}
              style={{ background: "gray" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                />
              </svg>
            </IconButton>
          </div>
          <div className="mb-3">
            <IconButton
              className="scroll-button p-3"
              onClick={handleScrollDown}
              style={{ background: "gray" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                color="black"
                class="bi bi-arrow-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                />
              </svg>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shorts;
