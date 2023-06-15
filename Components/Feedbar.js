
const Feedbar = ({feedData, handleClick}) => {
  return (
    <nav className="relative">
      <div className ="flex px-10 sm:px-20 test-2xl whitespace-nowrap space-x-10 
        sm:space-x-20 overflow-x-scroll scrollbar-hide ">

        {feedData.map((item) =>  <button key={item.id} value={item.id} onClick={handleClick} 
         className="cursor-pointer transition duration-100
         transform hover:scale-125 hover:text-white
          active:text-red-500 text-lg ">
            {item.title}
            </button> )}

      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  )
}

export default Feedbar
