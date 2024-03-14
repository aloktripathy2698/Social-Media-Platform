import React from 'react'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navigation = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    const navigate = useNavigate();

    const handleLogout=()=>{
        console.log("logout")
        handleClose()
    }

    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='py-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                        <linearGradient id="_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#2aa4f4">
                            </stop>
                            <stop offset="1" stop-color="#007ad9">
                            </stop>
                        </linearGradient>
                        <path fill="url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02">
                        </path>
                    </svg>
                </div>

                <div className='space-y-6'>
                    {navigationMenu.map((item) => <div className='cursor-pointer flex space-x-3 
                items-center' onClick={() => item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(item.path)}>
                        {item.icon}
                        <p className='text-x1'>{item.title}</p>
                    </div>)}
                </div>

                <div className='py-10'>
                    <Button
                        sx={{ width: '100%', borderRadius: '29px', py: '15px', bgcolor: "#1DA1F2" }}
                        variant='contained'
                    >
                        Tweet
                    </Button>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <Avatar
                        alt="username"
                        src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'
                    />
                    <div>
                        <span> Alok </span>
                        <span className='opacity-70'>@aloktrip</span>
                    </div>


                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
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
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>

            </div>

        </div>
    )
}

export default Navigation