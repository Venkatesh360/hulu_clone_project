
export const GET = async (request) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`);
        const data = await response.json();
        return new Response(JSON.stringify(data), {status: 200});

    } catch (error) {
      console.error("Error fetching data:", error);
      return new Response("Error", { status: 500 });
    }
  };