import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Logo from "../assets/shopcarLogo1.jpg"
import LogoTransparent from "../assets/shopcarLogo1-transparent.png"
import ShopcarLogo from "../components/ShopcarLogo";

// const carPixArray = ["https://www.wsupercars.com/wallpapers/Honda/1992-Honda-NSX-R-V4-1600.jpg", "https://img1.goodfon.com/original/1920x1080/9/80/bmw-e39-m5-mashina-bmv-avtomobil-les-osen.jpg", "https://cdn.motor1.com/images/mgl/Bw9WA/s1/mercedes-benz-s-class-w126.jpg", "http://www.zengarage.com.au/wp-content/uploads/2016/03/selectnine2016-Tonys190Evolution-28.jpg", "https://hips.hearstapps.com/roa.h-cdn.co/assets/16/07/4000x2000/landscape-1455663709-jaguar-f-type-svr-27-convertible-track.jpg", "https://img.wallpapersafari.com/desktop/1920/1080/29/12/7ISByZ.jpg", "https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", "https://images.pexels.com/photos/1534604/pexels-photo-1534604.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", "https://images.pexels.com/photos/2127740/pexels-photo-2127740.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", "https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"];

//removed images that have vague/missing usage rights

const carPixArray = ["https://www.wsupercars.com/wallpapers/Honda/1992-Honda-NSX-R-V4-1600.jpg", "https://images.pexels.com/photos/2127740/pexels-photo-2127740.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", "https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" ]

// var randomizer = Math.floor(10*Math.random());
// better version below, still need to make into component instead of separate pages

// const randomizer2 = Math.floor((carPixArray.length)*Math.random())

// const nsxPic = carPixArray[randomizer2];

const nsxPic = carPixArray[1];

function About() {
    return (
        <div>
            <Hero backgroundImage={nsxPic}>
                <ShopcarLogo></ShopcarLogo>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        
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

