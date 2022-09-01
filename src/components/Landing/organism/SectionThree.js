import React, { useEffect } from "react";
import styles from "../../../css/landing.module.css";
import { Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import CardCaraousel from "../molecules/CardCaraousel";
import axios from "axios";

const SectionThree = () => {
  const [listImg, setListImg] = React.useState([]);
  useEffect(() => {
    axios
      .get("https://joshy-app.herokuapp.com/testimonials")
      .then((res) => setListImg(res.data));
  }, []);

  return (
    <>
      {listImg && (
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
                {listImg.map((data) => (
                  <SwiperSlide key={data?.userId}>
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
      )}
    </>
  );
};

export default SectionThree;
