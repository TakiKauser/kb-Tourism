import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/sQkqN8v/banner01.jpg"
                        alt="First slide"
                        height="500px"
                    />
                    <Carousel.Caption>
                        <h3>Enjoy yourself.</h3>
                        <p>We care for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/gWtk0yq/banner02.jpg"
                        alt="Second slide"
                        height="500px"
                    />

                    <Carousel.Caption>
                        <h3>Have some time with family.</h3>
                        <p>Care your Mental health.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/2c1tCL9/banner03.jpg"
                        alt="Third slide"
                        height="500px"
                    />

                    <Carousel.Caption>
                        <h3>Spending time with people can be your best experience.</h3>
                        <p>Live a life.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;