import React, { useEffect } from 'react'
import { useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
    id: number;
    name: string;
}
interface FetchGamesResponse {
    count: number;
    results: Game[]
}

const GamesGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("")

    useEffect(() => {
        apiClient.get<FetchGamesResponse>("/games")
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message))
    }, [])

    return (
        <div>
            <ul>
                {
                    games.map(g => <li key={g.id}>{g.name}</li>)
                }
            </ul>

        </div>
    )
}

export default GamesGrid
