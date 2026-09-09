import React, { Component } from "react";
import Hero from "../components/Hero";
import Input from "../components/Input";
import Container from "../components/Container";
import Button from "../components/Button";
import { CarList, CarListItem } from "../components/CarList";
import Row from "../components/Row";
import API from "../utils/API";
import ShopcarLogo from "../components/ShopcarLogo";

const carPixArray = [
    "https://images.pexels.com/photos/14055736/pexels-photo-14055736.jpeg",
    "https://images.pexels.com/photos/2127740/pexels-photo-2127740.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    "https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
];

const nsxPic = carPixArray[0];

class Buy extends Component {
    state = {
        cars: [],
        carSearch: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        API.getCar(this.state.carSearch)
            .then(res => {
                this.setState({
                    cars: res.data.listings || []
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    cars: []
                });
            });
    };

    render() {
        return (
            <div>
                <Hero backgroundImage={nsxPic}>
                    <ShopcarLogo />
                </Hero>

                <Container>
                    <br />
                    <br />

                    <Input
                        name="carSearch"
                        value={this.state.carSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search for a Car (Make: Ford, Honda, etc.)"
                    />

                    <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                    >
                        Search
                    </Button>

                    <Row>
                        {!this.state.cars.length ? (
                            <h1 className="text-center">
                                No Cars to Display
                            </h1>
                        ) : (
                            <CarList>
                                {this.state.cars.map(car => {
                                    return (
                                        <CarListItem
                                            key={car.id}
                                            heading={car.heading}
                                            price={car.price}
                                            miles={car.miles}
                                            href={car.vdp_url}
                                            thumbnail={
                                                car.media &&
                                                car.media.photo_links &&
                                                car.media.photo_links.length
                                                    ? car.media.photo_links[0]
                                                    : undefined
                                            }
                                        />
                                    );
                                })}
                            </CarList>
                        )}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Buy;