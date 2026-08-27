import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '~/styles/swiper-section.css';

interface Collection {
  id: string;
  title: string;
  handle: string;
  description?: string | null;
  image?: {
    url: string;
    altText?: string | null;
    width?: number | null;
    height?: number | null;
  } | null;
}

interface SwiperSectionProps {
  collections: Collection[];
}

export function SwiperSection({collections}: SwiperSectionProps) {
  return (
    <section className="swiper-section">
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
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
          {collections.map((collection) => (
            <SwiperSlide key={collection.id}>
              <div className="swiper-card">

                {collection.image && (
                  <img
                    src={collection.image.url}
                    alt={
                      collection.image.altText ||
                      collection.title
                    }
                    width={collection.image.width || undefined}
                    height={collection.image.height || undefined}
                  />
                )}

                <div className="swiper-card-content">
                  <h2>{collection.title}</h2>

                  <p>
                    {collection.description ||
                      'Discover our collection'}
                  </p>

                  <a href={`/collections/${collection.handle}`}>
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