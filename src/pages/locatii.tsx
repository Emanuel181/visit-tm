import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default function ActionAreaCard({ cards }) {
  return (
    <div style={{
  
      display: 'flex',
      justifyContent: 'center', // Centers the cards horizontally
      alignItems: 'center', // Centers the cards vertically, effective if there is extra space on the cross axis
      flexWrap: 'wrap',
      gap: '20px',
      minHeight: '100vh', // Ensures the container takes at least the full viewport height
      paddingTop: '20px', // Optional, adds space at the top of the container
    }}>
      {cards.map((card) => (
        <Card key={card.name} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={card.image} // Assuming create-react-app's webpack config
              alt={card.alt}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
