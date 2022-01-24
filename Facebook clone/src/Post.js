import { AccountCircleOutlined, ChatBubbleOutlined, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons'
import {Avatar} from "@material-ui/core"
import React from 'react'
import "./Post.css"

const Post = ({profilePic, image , username , timestamp , message}) => {
    console.log(username)
    return (
        <div className="post">
              <div className="post_top">
                  <Avatar
                  src={profilePic}
                  className="post_avatar"
                  />
                  <div className="post_topinfo">
                   <h3>{username}</h3>
                   <p>{new Date(timestamp?.toDate()).toUTCString()}</p>

                  </div>
              </div>
              <div className="post_bottom">
                  <p>{message}</p>
              </div>
              
              {image && (<div className="post_image">
                  <img src={image} alt={username}  height="400"/>
              </div>)}
              

              <div className="post_options">
                  <div className="post_option">
                      <ThumbUp />
                      <p>Like</p>
                  </div>
                  <div className="post_option">
                      <ChatBubbleOutlined />
                      <p>Comment</p>
                  </div>
                  <div className="post_option">
                      <NearMe />
                      <p>Share</p>
                  </div>
                  <div className="post_option">
                   <AccountCircleOutlined />
                   <ExpandMoreOutlined />
                  </div>
              </div>
        </div>
    )
}

export default Post
