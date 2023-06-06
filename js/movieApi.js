async function movieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDFjNjgxZjk3MjYyMjY4NWFkYjJkZWQ3MGVlNWU2ZiIsInN1YiI6IjY0NzZkZjNjMTJjNjA0MDBlMWRjNmNjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jqyMjkuWeOJzkj7UauO06VhfP3Ohg7aD0LigJgVHgyw",
    },
  };
  let response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );
  let data = await response.json();
  let movies = data["results"];

  return movies;
}
// fetch가 리턴을 기다리지 않고 뱉어버려서 -> 그림판

export { movieData };
