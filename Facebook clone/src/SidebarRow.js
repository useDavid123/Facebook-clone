import React from 'react'
import { Avatar } from '@material-ui/core'

const SidebarRow = ({src , title , Icon}) => {
    return (
        <div className="sidebarrow">
            {src && <Avatar src={src} />}
            {Icon &&  <Icon />}
            <h4>{title}</h4>
            
        </div>
    )
}

export default SidebarRow
