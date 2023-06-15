
export const GET = async (request, { params }) => {
    try {
      const genreId = params.id;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&with_genres=${genreId}`);
      const data = await response.json();  
      return new Response(JSON.stringify(data), { status: 200 });


    } catch (error) {
      console.error("Error fetching data:", error);
      return new Response("Error", { status: 500 });
    }
  };
