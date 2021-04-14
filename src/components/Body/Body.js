import React from 'react'
import './Body.css'
import Header from '../Header/Header'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDataLayerValue } from '../../reducer/DataLayer'
import SongRow from '../SongRow/SongRow'

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body-info">
                <img src={discover_weekly?.images[0].url} alt="" />

                <div className="body-infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilledIcon
                        className="body-shuffle"
                      
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {/* Lists of Songs */}
                {discover_weekly?.tracks.items.map(item => {
                    <SongRow track={item.track} />
                })}
            </div>
        </div>
    )
}

export default Body
