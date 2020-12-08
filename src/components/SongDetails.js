const SongDetails = ({song, chartPosition}) => {

    return (
        <>
        <ul>    
                Chart Pos: {chartPosition}
            </ul>
            <ul>
                Artist: {song["im:artist"]["label"]}
            </ul>
            <ul>
                Title: {song["im:name"]["label"]}
        </ul>
        </>
    )
}

export default SongDetails;