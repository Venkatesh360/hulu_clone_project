import FeedCard from "./FeedCard"


const Feedscroll = ({data}) => {
  return (
    <div className=" font-montserrat sm:grid md:grid-cols-3 lg:grid-cols-3
     2xl:grid-cols-4" >
       {data.map((results) => <FeedCard result={results} key={results.id} />)}
    </div>
  )
}

export default Feedscroll;
