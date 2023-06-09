async function queryMovie(title, REGION) {
    if (title === undefined || title === null) {
        alert(`Title information is empty.`);
        return null;
    }
    if (REGION === null || REGION === undefined) {
        REGION = navigator.language;
    }

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjQxMWFmZjRiODc0OTE1MWQ1ZDBjZDAyZTIzNGVmZSIsInN1YiI6IjY0NzA4NmZmMzM2ZTAxMDBjNzA3OTc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NSCtfR7Cu5h3HYuAUk_fJ1ivWxZ8ewChQOmBNjM2VQo",
        },
    };

    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=${REGION}&page=1`,
        options
    );

    const data = await response.json();
    return data["results"];
}

export { queryMovie };