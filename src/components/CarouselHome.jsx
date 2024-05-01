import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    { id: 1, image: 'https://i.pinimg.com/originals/c5/20/fc/c520fc0a295bbb3fc8977bdab15cf664.jpg', content: 'Content 1' },
    { id: 2, image: 'https://i.pinimg.com/originals/c5/20/fc/c520fc0a295bbb3fc8977bdab15cf664.jpg', content: 'Content 2' },
    { id: 3, image: 'https://i.pinimg.com/originals/c5/20/fc/c520fc0a295bbb3fc8977bdab15cf664.jpg', content: 'Content 3' },
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const data = [
  //   { id: 1, image: '/images/image1.jpg', content: 'Content 1' },
  //   { id: 2, image: '/images/image2.jpg', content: 'Content 2' },
  //   { id: 3, image: '/images/image3.jpg', content: 'Content 3' },
  // ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-2xl">{item.content}</p>
          </div>
        </div>
      ))}
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-900 focus:outline-none" onClick={goToPrev}>
        &lt;
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-900 focus:outline-none" onClick={goToNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
