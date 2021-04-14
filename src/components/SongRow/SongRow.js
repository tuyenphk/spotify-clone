import React from 'react'
import './SongRow.css'

function SongRow({imageUrl, name, singer}) {
    return (
        <div className="songRow">
            <img className="songRow-album"
                //  src={track.album.images[0].url} 
                 src={imageUrl}
                 alt="" />
            <div className="songRow-info">
                <h1>{name}</h1>
                <p>{singer}
                    {/* {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name} */}
                </p>
            </div>
        </div>
    )
}

export default SongRow
