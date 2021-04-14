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
                {/* {discover_weekly?.tracks.items.map(item => {
                    <SongRow track={item.track} />
                })} */}
                <SongRow imageUrl="https://i.ibb.co/VgK6R37/maxresdefault.jpg" name="Driver License" singer="Olivia Rodrigo" />
                <SongRow imageUrl="https://i.ibb.co/9pgH0Bs/1.jpg" name="Closing Doors (ft Astrid S)" singer="Harry Hudson, Astrid S" />
                <SongRow imageUrl="https://i.ibb.co/KmkFtRT/2.jpg" name="Looking for Me - Acoustic" singer="Paul Woolford, Diplo, Kareen Lomax" />
                <SongRow imageUrl="https://i.ibb.co/Wz964CQ/3.jpg" name="Everything I wanted" singer="Orange Stick, Lofi Fruits Music" />
                <SongRow imageUrl="https://i.ibb.co/WD2v0P3/4.jpg" name="No Good" singer="Dezabel" />
                <SongRow imageUrl="https://i.ibb.co/J5YP85Y/5.jpg" name="Bother Me" singer="Johnning" />
                <SongRow imageUrl="https://i.ibb.co/QJrZWB6/6.jpg" name="Lean Away" singer="Sam Kramer" />
                <SongRow imageUrl="https://i.ibb.co/WtXNwFL/7.jpg" name="Smile (with The Weekend)" singer="Juice WRLD, The Weekend" />
                <SongRow imageUrl="https://i.ibb.co/wpxSXy4/8.jpg" name="Don't Cry for Me" singer="Alok, Martin Jensen, Jason Derulo" />
                <SongRow imageUrl="https://i.ibb.co/m0QMv8R/9.jpg" name="Atlantics" singer="Luc As Rich" />
                <SongRow imageUrl="https://i.ibb.co/dBzVZc6/10.jpg" name="Holding On" singer="Iann dior" />
            </div>
        </div>
    )
}

export default Body
