import React from 'react';
import { useTheme } from '@mui/material/styles';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { Box } from '@mui/joy';
import cards2 from "../data/data1.js"; // Adjust the import path to where your data file is located
import '../App.css'; // Adjust if your CSS file is located elsewhere

export default function ActionAreaCard2() {

  const handleExploreClick = (url) => {
    window.location.href = url; // Redirects the user to the specified URL
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '32px',
        minHeight: '100vh',
        paddingTop: '20px',
        width: '100vw',
        overflow: 'hidden',
        background: 'White'
      }}
    >
      {cards2.map((card, index) => (
        <Card
  variant="outlined"
  key={card.name}
  sx={{
    width: 400,
    minWidth: 400,
    m: 2,
    boxShadow: 3,
  }}
  style={{
    '--animation-delay': `${index * 0.2}s`, // Dynamic delay based on index
  } as any} // Cast to any to bypass TypeScript's type checking
  className="fadeInUp card-enter"
>
          <div style={{ position: 'relative' }}>
            <IconButton
              aria-label={`bookmark ${card.name}`}
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ position: 'absolute', top: '1rem', right: '1rem' }}
            >
              <BookmarkAdd />
            </IconButton>
            <Typography level="h2" sx={{ mb: 1, fontSize: '1.25rem' }}>
              {card.name}
            </Typography>
            <Typography level="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
              {card.description}
            </Typography>
          </div>
          <AspectRatio minHeight="200px" maxHeight="300px">
            <img
              src={card.image}
              alt={card.alt}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </AspectRatio>
          <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              aria-label="Explore"
              sx={{
                fontWeight: 600,
                fontSize: '1rem',
                borderColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  borderColor: 'primary.main',
                },
                px: 4, // Horizontal padding for a wider button
                py: 1, // Vertical padding for a taller button
              }}
              onClick={() => handleExploreClick(card.url)} // Add the onClick handler here
            >
              Explore
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
