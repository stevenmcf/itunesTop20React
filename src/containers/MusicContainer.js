import MusicList from "../components/MusicList";
import SongDetails from "../components/SongDetails";

const MusicContainer = () => {

    return (
        <>
        <h1>Welcome to the iTunes Top 20 songs in the UK...</h1>
        <MusicList />
        <SongDetails />
        </>
    )
}

export default MusicContainer;