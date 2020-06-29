const API_URL="https://hoblist.com/movieList"

// export const moviesList = async ()=>{
//     const movies= await fetch(`${API_URL}`);
//     console.log(movies)
// }

const data={
    "category":"movies",
    "language":"telugu",
    "genre":"all",
    "sort":"voting"
}

export const moviesList = async ()=>{
    const movies= await fetch(`${API_URL}`,
    {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    });
    return movies.json();
}