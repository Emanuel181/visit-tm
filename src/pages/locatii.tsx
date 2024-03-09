import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/joy/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import cards from "../data/data.js";

const ActionAreaCard = () => {
  const theme = useTheme(); // Use the theme from the context

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        minHeight: '100vh',
        paddingTop: '20px',
        width: '100vw', 
        overflow: 'hidden',
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(to right, #0f0c29, #302b63, #24243e)' // Dark mode gradient
          : 'linear-gradient(to right, #ffffff, #e5e5e5)', // Light mode gradient
      }}
    >
      {cards.map((card) => (
        <Card key={card.name} sx={{ maxWidth: 345, m: 2, bgcolor: 'background.paper' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={card.image} 
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
    </Box>
  );
};

export default ActionAreaCard;
