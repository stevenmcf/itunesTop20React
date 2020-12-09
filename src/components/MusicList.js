import SongDetails from "./SongDetails";

const MusicList = ({songs, loaded}) => {

    if(!loaded){
        return <p>Geez this is slow, gimme a second....still loading</p>
    }

    const songsList = songs.map((song, index) => {

        

        return (
            <SongDetails 
                song={song} 
                chartPosition={index + 1}
                key={index}
            />
        )
    })

return (
    <>
        <h2>iTunes Top 20 Songs in the UK:</h2>
            <ul>{songsList}</ul>
    </>
)
}
export default MusicList;