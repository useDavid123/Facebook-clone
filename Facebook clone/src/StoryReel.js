import React from 'react'
import Story from "./Story"
import "./StoryReel.css"

const StoryReel = () => {
    return (
        <div className="storyreel">
            
             <Story
            image="https://images.unsplash.com/photo-1511296265581-c2450046447d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdvb2dsZSUyMHNlYXJjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            profileSrc=""
            title="Christian"
             />
             <Story
            image="https://images.unsplash.com/photo-1588064589877-9dc38b897cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            profileSrc=""
            title="David"
             />
              <Story
            image="https://images.unsplash.com/photo-1511296265581-c2450046447d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdvb2dsZSUyMHNlYXJjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            profileSrc=""
            title="Chimezirim"
             />
              <Story
            image="https://images.unsplash.com/photo-1588064589877-9dc38b897cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            profileSrc=""
            title="David"
             />
        </div>
    )
}

export default StoryReel
