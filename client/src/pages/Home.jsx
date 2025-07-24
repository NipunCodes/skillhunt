import Header from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import bgDes from '../assets/large-bg-blur.png'
import bgBack from '../assets/Hero-Section-crop.jpg'
import { IoSearchOutline } from "react-icons/io5";
import CategoryCard from '../components/CategoryCard.jsx'
import UserReviewCard from '../components/UserReviewCard.jsx'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const CategoryCardSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  const UserReviewSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <div className='bg-cover bg-center w-full h-auto' style={{backgroundImage: `url(${bgBack})`}}>
        <div className='max-w-7xl p-25 mx-auto px-4 sm:px-6 lg:px-8'>
          <div>
            <h1 className='text-white text-2xl'> <span className='font-bold font-mono text-7xl'>Welcome to SkillHunt</span> <br />Sri Lankan's #1 job oppatunity finding platform</h1>
          </div>
          <div className="pt-10">
            <div className="relative w-full max-w-xl">
              <input type="text" placeholder="   What's on your mind  .  .  . " className="bg-white rounded-full w-full text-base p-2 pr-12"/>
              <IoSearchOutline className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className='max-w-7xl p-10 mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Category Cards */}
          
          {/* Slider */}
          <div className='w-full mt-4'>
              <div>
                <Slider {...CategoryCardSettings}>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                <a href="/JobCategory"><CategoryCard /></a>
                </Slider>
              </div>
          </div>

        {/* Discription About Us */}
        <div className='mt-10 bg-cover bg-center w-full h-auto rounded-2xl' style={{backgroundImage: `url(${bgDes})`}}>
          <div className='text-white p-10'>
            <h1 className='text-center text-4xl font-semibold font-mono'>Description About Us</h1>
            <p className='mt-7 text-xl'>Our company has 20 years of trust in software engineering industry. We are also verified dealers in Google.LLC. Our service is the best service around the world. If you are job dealer this is the right place for you. Also if you are job finder this is the best place for you. You can easily find job in this place for free.</p>
            <p className='mt-7 text-center text-3xl font-bold'>We are the GOAT</p>
          </div>
        </div>

        {/* User Reviews */}
        <div className='h-auto rounded-2xl mt-10 justify-center items-center'>
          <div className='rounded-2xl'>
            <h1 className='text-center text-4xl font-semibold font-mono pt-5'>User Reviews</h1>
          </div>
          {/* User Card */}
          <div className='flex flex-wrap justify-center items-center'>
            <div className='w-full'>
              <div>
                <Slider {...UserReviewSettings}>
                  <UserReviewCard />
                  <UserReviewCard />
                  <UserReviewCard />
                  <UserReviewCard />
                  <UserReviewCard />
                  <UserReviewCard />
                  <UserReviewCard />
                  <UserReviewCard />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home