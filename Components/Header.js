"use client"
import ReorderIcon from '@mui/icons-material/Reorder'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Image from 'next/image'
import HomeIcon from '@mui/icons-material/Home';
import BoltIcon from '@mui/icons-material/Bolt';
import HeaderItem from './HeaderItems';

const Header = () => {
  return (
    
    <header  className='flex flex-col sm:flex-row' >
      <div className='flex flex-grow justify-center sm:justify-start  '> 
      <Image
       src={"https://www.logo.wine/a/logo/Hulu/Hulu-Logo.wine.svg"}
       height={100}
       width={100}
       alt="hulu"
       />
       </div>
     
      <div className='flex flex-grow items-center  justify-evenly max-w-2xl ' >
       <HeaderItem Icon={HomeIcon} title="Home" />
       <HeaderItem Icon={BoltIcon} title="Trending" />
       <HeaderItem Icon={ReorderIcon} title="Favourite" />
       <HeaderItem Icon={CheckCircleIcon} title="Like" />
       <HeaderItem Icon={SearchIcon} title="Search" />
       <HeaderItem Icon={AccountCircleRoundedIcon} title="Account" />
   </div>
   
    </header>
    
  )
}

export default Header;