import React from 'react';
import { Card } from 'semantic-ui-react';
import '../styles/styles.css';

const WeatherCard = ({ weatherData }) => (
  <Card>
    <Card.Content>
      <Card.Header className="header">{weatherData.name}</Card.Header>
    </Card.Content>
  </Card>
);

export default WeatherCard;
