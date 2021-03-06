import React from "react";
import "./style.css";
import Thumbnail from "../Thumbnail"

import { Container, Row, Col } from "../Grid";

export function CarList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function CarListItem({
    thumbnail = "https://placehold.it/300x300",
    heading,
    price,
    miles,
    href,
    }) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                    <Thumbnail src={thumbnail} />                       
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h2>{heading}</h2>
                        <h3>${price}</h3>
                        <h3>Mileage: {miles}</h3>
                        <a rel="noreferrer noopener" target="_blank" href={href}>
                            View Car
                        </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}