import React, { Component } from "react";
import { ListGroup, Card } from "react-bootstrap";
import RecommendedItem from "../RecommendedItem/RecommendedItem";
export default class Recommendation extends Component {
  render() {
    return (
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <RecommendedItem videoLink="https://www.youtube.com/watch?v=uEmUJcHysds" />
          </ListGroup.Item>
          <ListGroup.Item>
            <RecommendedItem />
          </ListGroup.Item>
          <ListGroup.Item>
            <RecommendedItem />
          </ListGroup.Item>
          <ListGroup.Item>
            <RecommendedItem />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
}
