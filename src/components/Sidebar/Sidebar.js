import React from 'react'
import './Sidebar.css'
import SidebarOption from '../SidebarOption/SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useStateValue } from '../../reducer/StateProvider'

function Sidebar() {
    const [{ playlists }, dispatch] = useStateValue();

    return (
        <div className="sidebar">

            <img className="sidebar-logo"
                 src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                 alt="" />
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

            <br />
            <strong className="sidebar-title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => {
                <SidebarOption title={playlist.name} />
            })}

            <SidebarOption title="Top 50 - USA" />
            <SidebarOption title="Acoustic Hits" />
            <SidebarOption title="Summer Vibes" />
            <SidebarOption title="Discover Weekly" />
            <SidebarOption title="My Shazam Tracks" />
           
        </div>
    )
}

export default Sidebar
