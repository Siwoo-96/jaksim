function movieData() {
  let movies;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDFjNjgxZjk3MjYyMjY4NWFkYjJkZWQ3MGVlNWU2ZiIsInN1YiI6IjY0NzZkZjNjMTJjNjA0MDBlMWRjNmNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqyMjkuWeOJzkj7UauO06VhfP3Ohg7aD0LigJgVHgyw",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      movies = data["results"];
    });

  return movies;
}

export { movieData };
