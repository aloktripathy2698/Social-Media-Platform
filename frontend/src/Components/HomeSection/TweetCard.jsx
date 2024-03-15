import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TweetCard = () => {
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
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default TweetCard;
