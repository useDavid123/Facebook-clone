import React,{useState,useEffect} from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from "./Post"
import db from "./firebase"

const Feed = () => {
    const [posts , setPosts] = useState([])

    useEffect(() => {
    
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot =>{
          setPosts(snapshot.docs.map(doc=>({
            id:doc.id,
          
            post:doc.data()})));
          
        })
      }, [])
    console.log(posts)
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map(({post , id})=>{
                
              return  (
                  
                    <Post key={id} {...post} />
                )
            })}
           
        </div>
    )
}

export default Feed
