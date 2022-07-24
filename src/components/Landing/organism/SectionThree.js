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
// image
import articleImgTwo from "../../../images/articleTwo.png";
// axios
import axios from "axios";

const SectionThree = () => {
  const [listImg, setListImg] = React.useState([]);
  const [detailCandidate, setDetailCandidate] = React.useState({});
  const [userId, setUserId] = React.useState(1)

  React.useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJzaG9wZWVAZ21haWwuY29tIiwicHJvZmlsZVBpY3R1cmUiOm51bGwsImNvdmVySW1hZ2UiOm51bGwsInJvbGVJZCI6MSwiaWF0IjoxNjU4NjQ5OTYzLCJleHAiOjE2NTg3MzYzNjN9.TB9sEmIHEMgDeNz8n0VyuH2p23JU9aC2kkGLoMbnyDM`}
    }
    axios.get(`http://localhost:8000/profile/${userId}`, config)
    .then((res) =>{
        console.log(res)
        setDetailCandidate(res?.data)
    }).catch((err)=>{
      console.log(err)
    });
    axios
      .get("http://localhost:8000/testimonials")
      .then((res) =>{
        console.log(res)
        setListImg(res?.data)
    }).catch((err)=>{
      console.log(err)
    });
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
            {listImg.map((item) => (
              <SwiperSlide>
                <CardCaraousel
                  src={articleImgTwo}
                  title={item?.name}
                  subtitle={item?.username}
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
