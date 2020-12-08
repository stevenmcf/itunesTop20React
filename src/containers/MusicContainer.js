import { useEffect, useState } from "react";
import MusicList from "../components/MusicList";

const MusicContainer = () => {

    const [songs, setSongs] = useState({});
    const [loaded, setLoaded] = useState(false);

    const getSongs = () => {
        console.log("getting top 20 data")
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
        .then(() => setLoaded(true))
    };

    useEffect(() => {
        getSongs();
    },[]);

    return (
            <MusicList 
                songs={songs}
                loaded={loaded}
            />
    );
};

export default MusicContainer;