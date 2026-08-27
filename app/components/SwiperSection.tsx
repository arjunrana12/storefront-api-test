import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '~/styles/swiper-section.css';

export function SwiperSection() {
  const slides = [
    {
      id: 1,
      image: '/images/banner-1.jpg',
      title: 'New Collection',
      description: 'Discover our latest collection',
    },
    {
      id: 2,
      image: '/images/banner-2.jpg',
      title: 'Summer Sale',
      description: 'Up to 50% off selected products',
    },
    {
      id: 3,
      image: '/images/banner-3.jpg',
      title: 'New Arrivals',
      description: 'Check out our newest products',
    },
    {
      id: 4,
      image: '/images/banner-4.jpg',
      title: 'Best Sellers',
      description: 'Shop our most popular products',
    },
    {
      id: 5,
      image: '/images/banner-5.jpg',
      title: 'Special Offers',
      description: 'Limited time offers',
    },
  ];

  return (
    <section className="swiper-section">
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{clickable: true}}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="swiper-card">
                <img
                  src={slide.image}
                  alt={slide.title}
                />

                <div className="swiper-card-content">
                  <h2>{slide.title}</h2>

                  <p>{slide.description}</p>

                  <a href="/collections/all">
                    Shop Now
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}