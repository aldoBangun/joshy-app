import React from "react";
// css
import styles from "../../../css/landing.module.css";
import { Container, Button } from "react-bootstrap";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
// molecules
import CardCaraousel from "../molecules/CardCaraousel";
// axios
import axios from "axios";

const SectionThree = () => {
  
  const [testimonialData, setTestimonialData] = React.useState([]);
  
  React.useEffect(() => {
    axios.get("https://joshy-app.herokuapp.com/testimonials")
    .then(res => {
      setTestimonialData(res.data)
    })
    .catch(err => {
      console.log('err', err)
    })
  },[]);

  return (
    <>
      <div className={`bg-light py-5 ${styles.content}`}>
        <h1 className="text-center mt-5">Their opinion about peworld</h1>
        <Container className="py-5 px-5 justify-content-center">
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={3}
          >
            {testimonialData.map((data) => (
              <SwiperSlide>
                <CardCaraousel
                src={data?.userInfo?.image}
                title={data?.userInfo?.name}
                subtitle={data?.userInfo?.subTitle}
                message={data?.testimonialMessage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
      <Container className={`bg-primary py-5 px-5 mb-5 ${styles.box_bottom}`}>
        <Button
          variant="warning"
          className="float-end mt-4 me-5 py-3 text-muted fw-bold"
          size="lg"
        >
          Mulai dari sekarang
        </Button>
        <h1 className="mt-4 px-5 text-white">Lorem ipsum dolor sit amet</h1>
      </Container>
    </>
  );
};

export default SectionThree;
