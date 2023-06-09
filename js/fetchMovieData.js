async function fetchMovieData(page, REGION) {
    if (page === undefined) {
        alert(`The parameter page of the function fetchMovieData is ${page}`);
        return null;
    }
    if (REGION === null || REGION === undefined) {
        REGION = navigator.language;
    }
    console.log(`Page ${page} has fetched.`);
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjQxMWFmZjRiODc0OTE1MWQ1ZDBjZDAyZTIzNGVmZSIsInN1YiI6IjY0NzA4NmZmMzM2ZTAxMDBjNzA3OTc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSCtfR7Cu5h3HYuAUk_fJ1ivWxZ8ewChQOmBNjM2VQo",
        },
    };

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=${REGION}&page=${page}`,
        options
    );

    const data = await response.json();

    return data["results"];
}

export { fetchMovieData };