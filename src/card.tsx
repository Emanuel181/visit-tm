import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import timi from './assets/timi.jpeg';


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={timi}
          alt="."
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Timisoara
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Piata Unirii
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}