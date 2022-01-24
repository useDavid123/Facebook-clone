import { Chat, EmojiFlags, LocalHospital, People,  VideoLibrary , Storefront, ExpandMore } from '@material-ui/icons'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider'
import {Avatar} from "@material-ui/core"

const Sidebar = () => {
  const [{user} , dispatch] = useStateValue()
    return (
        <div className="sidebar">

             {/* <SidebarRow
               src={user.photoUrl}
              title={user.displayName}
              /> */}
               <div className="sidebarrow">
             <Avatar src={user.photoUrl} />
           
            <h4>{user.displayName}</h4>
            
              </div>

             <SidebarRow
             Icon={LocalHospital}
             title="COVID-19 Information Center"
              />
             <SidebarRow 
             Icon={EmojiFlags}
             title="pages"
             
             />
             <SidebarRow
             Icon={People}
             title="Friends"
             />
             <SidebarRow
             Icon={Chat}
             title="Messenger"
             />
             <SidebarRow
             Icon={Storefront}
             title="Marketplace"
             />
              <SidebarRow
             Icon={VideoLibrary}
             title="Videos"
             />
               <SidebarRow
             Icon={ExpandMore}
             title="Marketplace"
             />
        </div>
    )
}

export default Sidebar
