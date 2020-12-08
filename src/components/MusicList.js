import SongDetails from "./SongDetails";

const MusicList = ({songs}) => {

    const songsList = songs.map ( song => {
        return (
            <SongDetails song={song} />
        )
    })

return (
    <ul>{songsList}</ul>
)

}
export default MusicList;