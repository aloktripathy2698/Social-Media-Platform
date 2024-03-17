import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Tab, Tabs } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TweetCard from "../HomeSection/TweetCard";
import ProfileModal from "./ProfileModal";

const Profile = () => {
  const [tabValue, setTabValue] = React.useState('1');
  const[openProfileModal, setOpenProfileModal] = React.useState(false)
  const handleOpenProfileModal = () => setOpenProfileModal(true)
  const handleClose = () => setOpenProfileModal(false)

  
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);


  const handleFollowUser = () => {
    console.log("follow user");
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);

    if(newValue===4){
      console.log("likes tweet")
    }

    if(newValue===1){
      console.log("user tweets")
    }

  };

  return (
    <div>
      <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          {" "}
          Alok Tripathy{" "}
        </h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2020/04/11/18/05/red-matrix-5031496_640.jpg"
          alt=""
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt=" Alok Tripathy "
            src="https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_640.jpg"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {true ? (
            <Button
              onClick={handleOpenProfileModal}
              variant="contained"
              sx={{ borderRadius: "20px", bgcolor: "#1DA1F2" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px", bgcolor: "#1DA1F2" }}
            >
              {true ? "follow" : "unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg"> Alok Tripathy </h1>
            {true && (
              <img
                className="ml-2 w-5 h-5"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/768px-Twitter_Verified_Badge.svg.png?20230807021642"
              />
            )}
          </div>
          <h1 className="text-gray-500">@aloktrip</h1>
        </div>
        <div className="mt-2 space-y-3">
          <p>Hello, Welcome to my profile!</p>
          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Education</p>
            </div>
            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">Indian</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">Joined August 2021</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>190</span>
              <span className="text-gray-500">following</span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span>590</span>
              <span className="text-gray-500">followers</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1,1,1,1].map((item)=><TweetCard/>)}
            </TabPanel>
            <TabPanel value="2">User's Replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>
      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal}/>
      </section>
    </div>
  );
};

export default Profile;
