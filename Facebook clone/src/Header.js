import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import FlagIcon from "@material-ui/icons/Flag"
import { SubscriptionsOutlined } from '@material-ui/icons'
import { StorefrontOutlined } from '@material-ui/icons'
import { SupervisedUserCircle } from '@material-ui/icons'
import "./Header.css"
import { Avatar, IconButton } from '@material-ui/core'
import { Add , Forum, NotificationsActive,ExpandMore } from '@material-ui/icons'
import { useStateValue } from './StateProvider'
  
const Header = () => {
    const [{user} , dispatch] = useStateValue()
    return (
        <div className="header">
           <div className="header_left" >
           <img
           className="header_facebook"
           src="https://www.seekpng.com/png/detail/265-2657650_facebook-icon-png-facebook.png"
            alt="facebook"
           
           />
           <div className="header_input">
               <SearchIcon />
               <input placeholder="search facebook" type="text"  />
           </div>
           </div>
           <div className="header_middle">
          <div className="header_option header_isActive">
           <HomeIcon fontSize="large" />
          </div>
          <div className="header_option">
           <FlagIcon fontSize="large" />
          </div>
          <div className="header_option">
           <SubscriptionsOutlined fontSize="large" />
          </div>
          <div className="header_option">
           <StorefrontOutlined fontSize="large" />
          </div>
          <div className="header_option">
           <SupervisedUserCircle fontSize="large" />
          </div>


           </div>




           <div className="header_right">
            <div className="header_info">
                <Avatar src={user.photoUrl} />
                <h4>{user.displayName}</h4>
            </div>
             <IconButton>
                 <Add />

             </IconButton>
             <IconButton>
                 <Forum />
             </IconButton>
            <IconButton>
            <NotificationsActive />    
            </IconButton>   
            <IconButton>
                <ExpandMore/>
            </IconButton>
           </div>

           
        </div>
    )
}

export default Header
