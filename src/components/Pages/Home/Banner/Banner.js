import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1305&q=80"
            alt="First slide"
          />
          <Carousel.Caption className="shadow-lg bg-primary text-white rounded">
            <h1 className="text-white font-weight-bold">
              All Cricket Collections
            </h1>
            <p>We stock cricket collections</p>
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
            src="https://i.pinimg.com/736x/71/85/f2/7185f2edeb1994bd07846abd0b60c9a3--creative-industries-work-on.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="shadow-lg bg-primary text-white rounded">
            <h1 className=" text-white font-weight-bold">
              All Jersey Collections
            </h1>
            <p>We stock jersey collections</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
