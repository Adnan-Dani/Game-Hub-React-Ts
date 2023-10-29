
// Custom Hooks
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres"

const GenreList = () => {
    const { isLoading, data, error } = useGenres();
    return (
        <div>
            <ul>
                {data.map(g => <li>{g.name}</li>)}
            </ul>
        </div>
    )
}

export default GenreList