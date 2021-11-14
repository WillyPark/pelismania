import { data } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/pagination/pagination.scss';

// import "swiper/css/effect-coverflow";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination]);

export const Peliculas = ({ history }) => {

  const handleClick = ( nombre = "" ) => {
    history.push( "/pelicula/" + nombre );
  }

  return (
    <main className="animacionFade">
      <h2 className="peliculas__titulo">Seleccione su película preferida</h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"2"}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        }}
        loop={true}
        pagination={true}
        className="mySwiper"
      >
        {
          data.map( dato => (
            <SwiperSlide key={ dato.id }>
              <img alt="Imagen Película" src={`./assets/img/${ dato.imagen }.jpg`} onClick={ () => { handleClick( dato.nombreURL ); } }/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </main>
  )
}
