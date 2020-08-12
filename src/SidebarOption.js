import React from 'react'
import "./SidebarOption.css"
import { useHistory } from 'react-router-dom'
import db from './firebase'
function SidebarOption({Icon, title, id, addChannelOption}) {
    const history = useHistory(); /*force a redirect, or push the next page into history meaning push it on top!*/
    const selectChannelFunc = () => {
        if(id){
            history.push(`/room/${id}`) /*this actually pushes it, and history does that for us*/
        } else {
            history.push(title) /*for other pages without room id*/
        }
    }

    const addChannelFunc = () => {
        const channelName = prompt('Please enter the channel name: ')
        if(channelName)
        {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }
    return (
        <div className = "sidebarOption" onClick = {addChannelOption ? addChannelFunc: selectChannelFunc}>
            {Icon && <Icon className = "sidebarOption__icon"/>} {/*only render if icon is passed*/}
            {Icon ? (<h3>{title}</h3>): (<h3 className = "sidebarOption__channel"><span className = "sidebarOption__hash"># </span>{title} </h3>)}
        </div>
    )
}

export default SidebarOption
