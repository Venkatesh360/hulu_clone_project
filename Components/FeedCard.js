import Image from "next/image"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const FeedCard = ({result}) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className=" p-2 group cursor-pointer transition duration-200 ease-in 
    transform sm:hover:scale-105 hover:z-1">
      <Image 
      src={`${BASE_URL}${result.backdrop_path}`}
      height={325}
      width={580}
      alt="image"
      />
      <div className="p-2">
      <h4 className=" mt-1 text-xl text-white transition-all duration-100
       ease-in-out group-hover:font-bold ">
         {result.title} </h4>
      <p  className="text-s text-white truncate max-w-md">{result.overview}</p>
      </div>
      <p className="pl-2 text-sm " ><ThumbUpIcon className="h-4" /> {result.vote_average} </p>
    </div>
  )
}

export default FeedCard;