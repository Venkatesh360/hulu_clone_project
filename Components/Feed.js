"use client"
import { useEffect, useState } from "react";
import Feedscroll from "./Feedscroll";
import Feedbar from "./Feedbar";

const feedData =[
  
    {
        title:"Action",
        id:"28"
    },

    {
      title:"Comedy",
      id:"35"
    },
    {
        title:"Science Fiction",
        id:"878"
    },

    {
        title:"Advanture",
        id:"12"
    },

    {
        title:"Horror",
        id:"27"
    },

    {
        title:"Fantasy",
        id:"10749"
    },
    {
      title:"Thriller",
      id:"53"
    },
    {
      title:"War",
      id:"10752"
    },
    {
      title:"Western",
      id:"37"
    },
    {
      title:"Music",
      id:"10402"
    },
    {
      title:"Mystery",
      id:"9648"
    },
    {
      title:"Documentary",
      id:"99"
    },
    {
      title:"Animation",
      id:"16"
    },
    {
      title:"Crime",
      id:"80"
    },
    {
      title:"Drama",
      id:"18"
    },
    {
      title:"Family",
      id:"10751"
    },
    {
      title:"Action-Comedy",
      id:"10744"
    },
    {
      title:"Action-Adventure",
      id:"10759"
    }
] 

const Feed = () => {
  const [content, setContent] = useState([]);
  const [genreId, setGenreId] = useState("");


  useEffect(() => {
    const fetchPosts = async () => {
      let url = "/api/data";
      if (genreId) {
        url = `/api/data/${genreId}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setContent(data.results);
    };

    fetchPosts();
  }, [genreId]);

  const handleClick = (e) => {
    setGenreId(e.target.value);
  };

  return (
    <div>
      <Feedbar feedData={feedData} handleClick={handleClick}/>
      <Feedscroll data={content} />
    </div>
  );
};
export default Feed;

//https://api.themoviedb.org/3/trending/movie/day?api_key=1265217b9da2630c1c6360578b704437