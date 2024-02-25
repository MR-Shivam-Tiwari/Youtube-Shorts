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

function Video({ video, index }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const handleTogglePlay = () => {
    if (!isPlaying) {
      videoRef.current.play().catch((error) => console.error(error));
    } else {
      videoRef.current.pause();
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    setIsButtonVisible(true);

    // Set a timeout to hide the button after 5 seconds
    setTimeout(() => {
      setIsButtonVisible(false);
    }, 3000);
  };

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((error) => console.error(error));
    }
    setIsPlaying(!isPlaying);
    setIsButtonVisible(true);

    // Set a timeout to hide the button after 5 seconds
    setTimeout(() => {
      setIsButtonVisible(false);
    }, 3000);
  };
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
  const handleLikeClick = () => {
    // Toggle the like state
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };


  return (
    <div>
    <div>
      <div key={index} className="d-flex justify-content-between ">
        <div className="" style={{ width: "100%" }}>
          <div className="d-flex align-items-center justify-content-center">
            <div
              className=" "
              style={{
                ...(windowWidth <= 500 && { padding: "0px" }),
              }}
            >
              <video
                className="rounded-4"
                src={video?.videoLink}
                controls={false}
                autoPlay={isPlaying}
                style={{
                  width: "52%",
                  height: "100%",

                  maxWidth: "100%",
                  // Dynamic width based on window width
                  ...(windowWidth <= 500 && {
                    width: "110%",
                    height: "150%",
                    marginLeft: "5px",
                    marginTop: "5px",
                  }),
                }}
                loop
                ref={videoRef}
                onClick={handleVideoClick}
              />

              <div
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  marginLeft: "0px",
                  marginRight: "0px",
                  marginTop: "-300px",
                  marginBottom: "250px",
                  transition: "opacity 0.3s ease-out",
                  opacity: isButtonVisible ? 1 : 0,
                  ...(windowWidth <= 500 && {
                    marginTop: "-400px",
                    marginBottom: "350px",
                    marginLeft: "20px",
                  }),
                }}
              >
                <IconButton className="p-3" onClick={handleTogglePlay}>
                  {isPlaying ? (
                    <PauseIcon style={{ color: "white", fontSize: "45px" }} />
                  ) : (
                    <PlayCircleFilledIcon
                      style={{ color: "white", fontSize: "45px" }}
                    />
                  )}
                </IconButton>
              </div>

              <div
                style={{
                  marginRight: "-50px",
                  cursor: "pointer",
                  marginTop: "-140px",
                  marginLeft: "145px",
                  marginBottom: "80px",
                  ...(windowWidth <= 500 && { marginLeft: "35px" }),
                }}
              >
                <div
                  className="d-flex align-items-center gap-2 text-white"
                  style={{}}
                >
                  <Avatar
                    style={{ width: "40px", height: "40px" }}
                    alt="Remy Sharp"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1708795728~exp=1708799328~hmac=679c04b01b0b283cf13d2e1ccefa5ce8ac185dfb08e774e404c0f3c7231eb5b4&w=900"
                  />
                  <div>@shivam_tiwari</div>
                  <div className="text-captilize">
                    <Button
                      variant="soft"
                      className="rounded-5 text-dark"
                      style={{ fontSize: "10px" }}
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
                <div className="text-white text-start mt-2">
                  <p>{video.title}</p>
                </div>
              </div>
            </div>

            <div>
              <div
                className="mt-5 d-sm-none"
                style={{
                  marginBottom: "-85px",
                  marginLeft: "-90px",
                }}
              >
                <div className=" mb-3">
                  <IconButton
                    className="like-button p-3"
                    onClick={handleLikeClick}
                    color={isLiked ? "primary" : "default"}
                  >
                    {isLiked ? (
                      <ThumbUpIcon
                        style={{
                          fontSize: "25px",
                          color: "blue",
                        }}
                      />
                    ) : (
                      <ThumbUpIcon
                        style={{ fontSize: "25px", color: "white" }}
                      />
                    )}
                  </IconButton>
                </div>
                <div className="mb-3">
                  <IconButton className="p-3">
                    <ThumbDownIcon
                      style={{ fontSize: "25px", color: "white" }}
                    />
                  </IconButton>
                </div>
                <div className="mb-3">
                  <IconButton className="p-3">
                    <CommentIcon style={{ fontSize: "25px", color: "white" }} />
                  </IconButton>
                </div>
                <div className="mb-3">
                  <IconButton className="p-3">
                    <ReplyIcon
                      style={{
                        fontSize: "25px",
                        transform: "scalex(-1.2)",
                        color: "white",
                      }}
                    />
                  </IconButton>
                </div>
                <div className="mb-3">
                  <IconButton className="p-3">
                    <MoreVertIcon
                      style={{ fontSize: "25px", color: "white" }}
                    />
                  </IconButton>
                </div>
              </div>
            </div>

            <div
              className="mt-5 d-none d-lg-block"
              style={{
                marginBottom: "-40px",
                marginLeft: "-100px",
                marginRight: "100px",
              }}
            >
              <div className=" mb-3">
                <IconButton
                  className="like-button p-3"
                  onClick={handleLikeClick}
                  color={isLiked ? "primary" : "default"}
                >
                  {isLiked ? (
                    <ThumbUpIcon
                      style={{
                        fontSize: "25px",
                        color: "blue",
                        background: "white",
                      }}
                    />
                  ) : (
                    <ThumbUpIcon style={{ fontSize: "25px", color: "black" }} />
                  )}
                </IconButton>
              </div>
              <div className="mb-3">
                <IconButton className="p-3">
                  <ThumbDownIcon style={{ fontSize: "25px", color: "black" }} />
                </IconButton>
              </div>
              <div className="mb-3">
                <IconButton className="p-3">
                  <CommentIcon style={{ fontSize: "25px", color: "black" }} />
                </IconButton>
              </div>
              <div className="mb-3">
                <IconButton className="p-3">
                  <ReplyIcon
                    style={{
                      fontSize: "25px",
                      transform: "scalex(-1.2)",
                      color: "black",
                    }}
                  />
                </IconButton>
              </div>
              <div className="mb-3">
                <IconButton className="p-3">
                  <MoreVertIcon style={{ fontSize: "25px", color: "black" }} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    </div>
  );
}

export default Video;
