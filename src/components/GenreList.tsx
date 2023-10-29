
// Custom Hooks
import useGenres from "../hooks/useGenres"

const GenreList = () => {
    const { isLoading, genres, error } = useGenres();
    return (
        <div>
            <ul>
                {genres.map(g => <li>{g.name}</li>)}
            </ul>
        </div>
    )
}

export default GenreList