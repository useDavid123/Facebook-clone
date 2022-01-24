import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import {Avatar} from "@material-ui/core"
import React,{useState} from 'react'
import { useStateValue } from './StateProvider'
import "./MessageSender.css"
import db from "./firebase"
import firebase from "firebase/compat"

const MessageSender = () => {
    const [{user} , dispatch] = useStateValue();
    const [message ,   setMessage]  = useState("")
    const [imageUrl , setImageUrl] = useState("")
    
    console.log(user.displayName)

    const handleSubmit = (e) =>{
       e.preventDefault();
      db
      .collection("posts")
      .add({
          message:message,
          image:imageUrl,
          username:user.displayName,
          profilePic:user?.photoUrl || "",
          timestamp:firebase.firestore.FieldValue.serverTimestamp()

      }).catch((error)=>{
          alert(error)
      });
      

       setMessage("")
       setImageUrl("")
    }


    return (
        <div className="messageSender">
            

            <div className="messageSender_top">
                <Avatar src={user.displayName} />
                <form>
               <input
               value={message}
               onChange={e=> setMessage(e.target.value)}
               placeholder={`whats on your mind ${user.displayName}`}
               className="messageSender_input"
               />
               <input
               value={imageUrl}
               onChange={e=> setImageUrl(e.target.value)}
               placeholder="Image Url (Optional)"

               />
               <button style={{display:"none"}} onClick={handleSubmit} >Hiddden button</button>
               </form>
            </div>
            <div className="messageSender_bottom">
               <div className="messageSender_option">
                <Videocam style={{color:"red"}} />
                <h3>Photo/Video</h3>
               </div>
               <div className="messageSender_option">
               <PhotoLibrary style={{color:"green"}} />
               <h3>Photos</h3>
               </div>
               <div className="messageSender_option">
               <InsertEmoticon style={{color:"orange"}} />
               <h3>Feeling/Activity</h3>
               </div>
            </div>

            
        </div>
    )
}

export default MessageSender
