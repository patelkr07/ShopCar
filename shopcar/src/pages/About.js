import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

var carPixArray = ["hhttps://images.pexels.com/photos/14055736/pexels-photo-14055736.jpeg", "https://img1.goodfon.com/original/1920x1080/9/80/bmw-e39-m5-mashina-bmv-avtomobil-les-osen.jpg", "https://cdn.motor1.com/images/mgl/Bw9WA/s1/mercedes-benz-s-class-w126.jpg", "http://www.zengarage.com.au/wp-content/uploads/2016/03/selectnine2016-Tonys190Evolution-28.jpg", "https://hips.hearstapps.com/roa.h-cdn.co/assets/16/07/4000x2000/landscape-1455663709-jaguar-f-type-svr-27-convertible-track.jpg", "https://img.wallpapersafari.com/desktop/1920/1080/29/12/7ISByZ.jpg"];

var randomizer = Math.floor(6*Math.random());

var nsxPic = carPixArray[randomizer];

function About() {
    return (
        <div>
            <Hero backgroundImage={nsxPic}>
                <h1>ShopCar</h1>
                <h2>Research || Fix || Shop || Play</h2>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>Welcome to ShopCar!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <p>
                           
                        </p>
                    </Col>
                </Row>
            </Container>
              

        </div>
    )
}

export default About;

// Acura NSX "https://www.wsupercars.com/wallpapers/Honda/1992-Honda-NSX-R-V4-1600.jpg"
// BMW M5 "https://img1.goodfon.com/original/1920x1080/9/80/bmw-e39-m5-mashina-bmv-avtomobil-les-osen.jpg"
// Mercedes w126 "https://assets.hemmings.com/blog/wp-content/uploads//2018/08/HMN0918-HSMIC-01.jpg"
// Mercedes w126 "https://cdn.motor1.com/images/mgl/Bw9WA/s1/mercedes-benz-s-class-w126.jpg"
// Mercedes 190E side profile "http://www.zengarage.com.au/wp-content/uploads/2016/03/selectnine2016-Tonys190Evolution-28.jpg"

