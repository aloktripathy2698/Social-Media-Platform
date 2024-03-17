import React, { useState } from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { BarChart } from "@mui/icons-material";
import ReplyModal from "./ReplyModal";

const TweetCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openReplyModal, setOpenReplyModal] = useState(false);
  const handleOpenReplyModal = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    console.log("delete tweet");
    handleClose();
  };

  const handleCreateRetweet = () => {
    console.log("handle create retweet");
  };

  const handleLikeTweet = () => {
    console.log("handle like tweet");
  };

  const navigate = useNavigate();
  return (
    <React.Fragment>
      {/* <div className='flex items-center font-semibold text-gray 700 py-2'>
            <RepeatIcon/>
            <p>Your Retweet</p>

        </div> */}

      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_640.jpg"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Alok Tripathy</span>
              <span className="text-gray-600">@aloktrip . 2m</span>
              <img
                className="ml-2 w-5 h-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/768px-Twitter_Verified_Badge.svg.png?20230807021642"
              />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          <div
            onClick={() => navigate(`/tweet/${3}`)}
            className="cursor pointer"
          >
            <p className="mb-2 p-0">Hanging out in chicago!</p>
            <img
              className="w-[28rem] border border-gray-400 p-5 rounded-md"
              src="https://cdn.pixabay.com/photo/2016/11/29/13/54/buildings-1870010_640.jpg"
              alt=""
            />
          </div>
          <div className="py-5 flex flex-wrap justify-between items-center">
            <div className="space-x-3 flex items-center text-gray-600">
              <ChatBubbleOutlineIcon
                className="cursor-pointer"
                onClick={handleOpenReplyModal}
              />
              <p>43</p>
            </div>
            <div
              className={`${
                true ? "text-pink-600" : "text-gray-600"
              } space-x-3 flex items-center`}
            >
              <RepeatIcon
                onClick={handleCreateRetweet}
                className="cursor-pointer"
              />
              <p>54</p>
            </div>
            <div
              className={`${
                true ? "text-pink-600" : "text-gray-600"
              } space-x-3 flex items-center`}
            >
              {true ? (
                <FavoriteBorderIcon
                  onClick={handleLikeTweet}
                  className="cursor-pointer"
                />
              ) : (
                <FavoriteOutlinedIcon
                  onClick={handleLikeTweet}
                  className="cursor-pointer"
                />
              )}
              <p>54</p>
            </div>
            <div className="space-x-3 flex items-center text-gray-600">
              <BarChartOutlinedIcon
                onClick={handleCreateRetweet}
                className="cursor-pointer"
              />
              <p>430</p>
            </div>
            <div className="space-x-3 flex items-center text-gray-600">
              <FileUploadOutlinedIcon
                onClick={handleCreateRetweet}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal} />
      </section>
    </React.Fragment>
  );
};

export default TweetCard;
