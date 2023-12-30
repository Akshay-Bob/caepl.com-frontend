import Carousel from "react-bootstrap/Carousel";
import "../Homeslide/HomeSlides_style.css";
import slide1 from "../../Images/office-space/desktop01.webp";
import slide2 from "../../Images/office-space/desktop02.webp";
import slide3 from "../../Images/office-space/desktop03.webp";
import slide4 from "../../Images/office-space/desktop04.webp";
import slide5 from "../../Images/office-space/desktop05.webp";
import slide6 from "../../Images/office-space/desktop06.webp";
import slide7 from "../../Images/office-space/desktop07.webp";

import mobSlide1 from "../../Images/office-space/01_Mobile.webp";
import mobSlide2 from "../../Images/office-space/02_Mobile.webp";
import mobSlide3 from "../../Images/office-space/03_Mobile.webp";
import mobSlide4 from "../../Images/office-space/04_Mobile.webp";
import mobSlide5 from "../../Images/office-space/05_Mobile.webp";
import mobSlide6 from "../../Images/office-space/06_Mobile.webp";
import mobSlide7 from "../../Images/office-space/03_Mobile.webp";

// import UpgadingStatus from "../UpgadingStatus";

const slides = [
  {
    id: 1,
    img: slide1,
    mobileImg: mobSlide1,
    alt: "Invitaion Cards",
  },

  {
    id: 2,
    img: slide2,
    mobileImg: mobSlide2,
    alt: "Invitaion Cards",
  },

  {
    id: 3,
    img: slide7,
    mobileImg: mobSlide7,
    alt: "Invitaion Cards",
  },

  {
    id: 4,
    img: slide4,
    mobileImg: mobSlide4,
    alt: "Invitaion Cards",
  },
  {
    id: 5,  
    img: slide5,
    mobileImg: mobSlide5,
    alt: "Invitaion Cards",
  },
  {
    id: 6,
    img: slide6,
    mobileImg: mobSlide6,
    alt: "Invitaion Cards",
  },
  {
    id: 7,
    img: slide3,
    mobileImg: mobSlide3,
    alt: "Invitaion Cards",
  },
];

function HomeSlider() {
  const slideList = slides.map((slide) => (
    <Carousel.Item interval={4000} key={slide.id}>
      <img
        src={slide.img}
        alt={slide.alt}
        className="img-fluid d-md-block d-none"
      />
      <img
        src={slide.mobileImg}
        alt={slide.alt}
        className="img-fluid d-md-none d-block"
      />
    </Carousel.Item>
  ));
  return (
    <div className="position-relative">
      <Carousel>{slideList}</Carousel>
      {/* <UpgadingStatus /> */}
    </div>
  );
}

export default HomeSlider;
