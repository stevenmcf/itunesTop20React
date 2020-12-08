import { useEffect, useState } from "react";
import MusicList from "../components/MusicList";
import SongDetails from "../components/SongDetails";

const MusicContainer = () => {

    const [songs, setSongs] = useState({});

    const getSongs = () => {
        console.log("getting top 20 data")
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
    }

    useEffect(() => {
        getSongs();
    },[])

    return (
        <>
        <h1>Welcome to the iTunes Top 20 songs in the UK...</h1>
        <p>Here's your top 20...</p>
        <MusicList songs={songs}/>
        <SongDetails />
        </>
    )
}

export default MusicContainer;