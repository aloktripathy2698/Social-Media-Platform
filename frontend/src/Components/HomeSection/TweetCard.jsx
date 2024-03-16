import React from "react";
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

const TweetCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
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

  const handleOpenReplyModel = () => {
    console.log("open model");
  };

  const handleCreateRetweet = () => {
    console.log('handle create retweet')
  }

  const handleLikeTweet = () => {
    console.log('handle like tweet')
  }

  const navigate = useNavigate();
  return (
    <div className="">
      {/* <div className='flex items-center font-semibold text-gray 700 py-2'>
            <RepeatIcon/>
            <p>Your Retweet</p>

        </div> */}

      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
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
          <div className="cursor pointer">
            <p className="mb-2 p-0">Hanging out in chicago!</p>
            <img
              className="w-[28rem] border border-gray-400 p-5 rounded-md"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="py-5 flex flex-wrap justify-between items-center">
            <div className="space-x-3 flex items-center text-gray-600">
              <ChatBubbleOutlineIcon
                className="cursor-pointer"
                onClick={handleOpenReplyModel}
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
              {true?<FavoriteBorderIcon
                onClick={handleLikeTweet}
                className="cursor-pointer"
              />:<FavoriteOutlinedIcon
              onClick={handleLikeTweet}
              className="cursor-pointer"
            />}
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
    </div>
  );
};

export default TweetCard;
