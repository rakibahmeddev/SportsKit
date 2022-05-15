import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/icc-men-s-t-world-cup-cricket-championship-background-icc-men-s-t-world-cup-cricket-championship-abstract-background-228147493.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="shadow-lg bg-primary text-white rounded">
            <h1 className=" text-white font-weight-bold">
              All Jersey Collections
            </h1>
            <p>We stock jersey collections</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://editorial.uefa.com/resources/0275-15125e215637-30258eac814d-1000/16x9_uclf_poster_3.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="shadow-lg bg-primary text-white rounded">
            <h1 className=" text-white font-weight-bold">
              All Game Equipments Collections
            </h1>
            <p>We stock game equipments collections</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/fDGYkR2/All-jersey-Collections-1.png"
            alt="Third slide"
          />
          <Carousel.Caption className="shadow-lg bg-primary text-white rounded">
            <h1 className="text-white font-weight-bold">
              All Cricket Collections
            </h1>
            <p>We stock cricket collections</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
