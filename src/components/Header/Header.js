import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import {useStateValue} from '../../reducer/StateProvider'
import './Header.css'

function Header() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs, or Podcasts "
                    type="text"
                />
            </div>            

            <div className="header-right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
