import { useState } from "react";
import MovieList from "./components/MovieList";
import { Container,Row,Col } from "react-bootstrap";
import './App.css';



function App() {
    const [movies, setMovies] = useState([
        {
            Title: "Starwars: Goretech",
            Year: "2018",
            imdbID: "tt9336300",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg"
        },
        {
            Title: "MeUndies x StarWars: The Dark Side",
            Year: "2018",
            imdbID: "tt9414858",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMzg3ZDcwNDQtOTVlMC00ZjE0LThiYjktY2U2YTVjODU5MWY5XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
        },
        {
            Title: "MeUndies x StarWars: The Force",
            Year: "2018",
            imdbID: "tt9414918",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BZTdjYjM1YzgtYmViMS00ODFjLTgyM2EtMjRkNTFiNDEyMTU2XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
        },
        {
            Title: "40 Years: StarWars & ILM",
            Year: "2016",
            imdbID: "tt5320598",
            Type: "movie",
            Poster: "N/A"
        },
        {
            Title: "Batman v Superman: Dawn of Justice",
            Year: "2016",
            imdbID: "tt2975590",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            Title: "Superman Returns",
            Year: "2006",
            imdbID: "tt0348150",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
        },
        {
            Title: "Superman",
            Year: "1978",
            imdbID: "tt0078346",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
        },
        {
            Title: "Superman II",
            Year: "1980",
            imdbID: "tt0081573",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
        },
        {
            Title: "Superman III",
            Year: "1983",
            imdbID: "tt0086393",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
        },
        {
            Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
            Year: "2016",
            imdbID: "tt18689424",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BN2I4OTllM2MtMWVhNC00MjkzLWJlMDUtN2FhMGQ2ZGVjMjllXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
        },
        {
            Title: "Superman IV: The Quest for Peace",
            Year: "1987",
            imdbID: "tt0094074",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
        },
        {
            Title: "Superman & Lois",
            Year: "2021–",
            imdbID: "tt11192306",
            Type: "series",
            Poster: "https://m.media-amazon.com/images/M/MV5BOGYyMmViMjgtZjViZi00NjkzLThjZGItMzZhYmZmOWZlMzdhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
            Title: "Superman/Batman: Apocalypse",
            Year: "2010",
            imdbID: "tt1673430",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            Title: "Lois & Clark: The New Adventures of Superman",
            Year: "1993–1997",
            imdbID: "tt0106057",
            Type: "series",
            Poster: "https://m.media-amazon.com/images/M/MV5BZTU1ZGFjNzEtZWYzZC00ZmI0LTg2NmMtN2YyNTY4YzhlODIyXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg"
        },
    ]);
    return (
        <div className="App">
            <MovieList movies={movies} />

           </div>
    );
}

export default App;
