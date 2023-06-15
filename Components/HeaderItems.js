"use client"

function HeaderItem({Icon, title}) {
  return (
    <div className=' flex flex-col pt-5 items-center justify-center cursor-pointer group
    w-12 sm:w-20 hover:text-white' >
        <Icon className = "h-8 mb-1 group-hover:animate-bounce "  />
        <p className="opacity-0 group-hover:opacity-100 tracking-widnest pt-0" 
        >{title} </p>

    </div>
  )
}

export default HeaderItem;