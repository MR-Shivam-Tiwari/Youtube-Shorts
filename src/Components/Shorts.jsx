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

const VideoData = [
    {
        title: "Sea",
        videoLink:
          "https://vod-progressive.akamaized.net/exp=1708822229~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4047%2F16%2F420239849%2F1814679272.mp4~hmac=722503dc467ed34d2a3d847ccb144392274ce4863920afe0ccb123e9daff85f8/vimeo-prod-skyfire-std-us/01/4047/16/420239849/1814679272.mp4",
      },
      {
        title: "Flowers",
        videoLink:
          "https://vod-progressive.akamaized.net/exp=1708822236~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4198%2F21%2F545994848%2F2589071592.mp4~hmac=a72b90e6e2e0fb2733aab18363f47c1486b12bfc527bd427e46103422a86790b/vimeo-prod-skyfire-std-us/01/4198/21/545994848/2589071592.mp4",
      },
      {
        title: "Kid Walking",
        videoLink:
          "https://vod-progressive.akamaized.net/exp=1708822242~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4047%2F19%2F495239914%2F2237596963.mp4~hmac=6ae2b9207bdd9571ae87bfeb0d2931d4b7f13e1bdbaac5a51f5f5069bef59feb/vimeo-prod-skyfire-std-us/01/4047/19/495239914/2237596963.mp4",
      },
  {
    title: "Bike On Road",
    videoLink:
      "https://download-video.akamaized.net/v3-1/playback/7fd25488-9ec4-4cbc-86bf-c130a0861c16/bdfd9b00-602841d7?__token__=st=1708800494~exp=1708814894~acl=%2Fv3-1%2Fplayback%2F7fd25488-9ec4-4cbc-86bf-c130a0861c16%2Fbdfd9b00-602841d7%2A~hmac=d87cf34dcd95698c4f2b15f70807916aa5d4930c577f3df6ca25fecaef6b0895&r=dXMtY2VudHJhbDE%3D",
  },
  {
    title: "Snow",
    videoLink:
      "https://download-video.akamaized.net/v3-1/playback/942fc942-267f-4605-a211-f8fc64f9dfe6/6bf4faec?__token__=st=1708800522~exp=1708814922~acl=%2Fv3-1%2Fplayback%2F942fc942-267f-4605-a211-f8fc64f9dfe6%2F6bf4faec%2A~hmac=6f0e6d66c266a328487484b8ca8b8c08e031684d631e8d4198bdde86600fb751&r=dXMtY2VudHJhbDE%3D",
  },
  {
    title: "City",
    videoLink:
      "https://vod-progressive.akamaized.net/exp=1708814964~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4568%2F26%2F672840900%2F3099162631.mp4~hmac=497dd2b4adcf1dea4734d20d25791ae5b5b1c9ed901cb68eafd703ffe7b0ce2c/vimeo-prod-skyfire-std-us/01/4568/26/672840900/3099162631.mp4?filename=540p.mp4",
  },
  {
    title: "WaterFall",
    videoLink:
      "https://vod-progressive.akamaized.net/exp=1708822036~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F945%2F19%2F479728625%2F2144103953.mp4~hmac=c97f81f5150d124a17b30aa341853ef46450e225a54399078af5026601c63279/vimeo-prod-skyfire-std-us/01/945/19/479728625/2144103953.mp4",
  },
  {
    title: "Sea",
    videoLink:
      "https://vod-progressive.akamaized.net/exp=1708822075~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F509%2F20%2F502545915%2F2293524865.mp4~hmac=2bd4e09268d42ef8d6f522b750eaef69de447b7b17ec050c478c66c9cb3bbbe8/vimeo-prod-skyfire-std-us/01/509/20/502545915/2293524865.mp4",
  },
  {
    title: "Farmer",
    videoLink:
      "https://vod-progressive.akamaized.net/exp=1708822122~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2134%2F17%2F435674703%2F1899001271.mp4~hmac=01d77e76c7631622699349d79a09b646f7ef4d4090ece598a53401e2f21880fd/vimeo-prod-skyfire-std-us/01/2134/17/435674703/1899001271.mp4",
  },
  {
    title: "Man Walking",
    videoLink:
      "https://vod-progressive.akamaized.net/exp=1708822162~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2901%2F18%2F464508537%2F2059543194.mp4~hmac=0f72c5b0559f8d52f12bd0440dbe3cd1c577f5e6eaad90c34fd5808ddaee2da9/vimeo-prod-skyfire-std-us/01/2901/18/464508537/2059543194.mp4",
  },
  {
    title: "Sea",
    videoLink:
      "https://vod-progressive.akamaized.net/exp=1708822167~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1946%2F19%2F484732151%2F2170751063.mp4~hmac=7d6833e6a18db8c12e20e3ae81f056eadab3c5d1e95ea8df3b6ce63212bddfdd/vimeo-prod-skyfire-std-us/01/1946/19/484732151/2170751063.mp4",
  },
 
];

function Shorts() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
        <div className="d-none d-lg-block"><Navbar /></div>
       
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
