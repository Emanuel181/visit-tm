import React from 'react';
import { Container, Grid, Card, CardHeader, CardContent, Typography, Box, useTheme, Avatar } from '@mui/material';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
const timisoaraTestimonials = [
  // Replace these with actual testimonials and corresponding images
  {
    avatar: <Avatar alt="Visitor 1" src="/path/to/visitor1.jpg" />,
    name: 'John Doe',
    occupation: 'Travel Blogger',
    testimonial:
    "Union Square is the heart of Timisoara! Bustling with life, surrounded by beautiful architecture, and filled with cozy cafes and shops. A must-visit for anyone exploring the city.",
  },
    {
    avatar: <Avatar alt="Visitor 2" src="/path/to/visitor2.jpg" />,
    name: 'Visitor Two',
    occupation: 'Photographer',
    testimonial:
    "As a local, I can't recommend Union Square enough. Whether you're enjoying a leisurely stroll, sipping coffee at a charming cafe, or admiring the stunning buildings, there's something for everyone here.",
  },
  {
    avatar: <Avatar alt="Visitor 3" src="/path/to/visitor3.jpg" />,
    name: 'Visitor Three',
    occupation: 'Food Critic',
    testimonial:
    "Union Square is a vibrant hub of culture and history. From the impressive Orthodox Cathedral to the quaint statues scattered around, every corner tells a story. Perfect for photographers and history enthusiasts!",
  },
  {
    avatar: <Avatar alt="Visitor 4" src="/path/to/visitor4.jpg" />,
    name: 'Visitor Four',
    occupation: 'Musician',
    testimonial:
    "I stumbled upon Union Square during my travels and was immediately captivated by its charm. The lively atmosphere, the mix of old and new architecture, and the friendly locals made it a highlight of my trip to Timisoara.",
  },
  {
    avatar: <Avatar alt="Visitor 5" src="/path/to/visitor5.jpg" />,
    name: 'Visitor Five',
    occupation: 'Entrepreneur',
    testimonial:
    "Union Square is simply enchanting! Surrounded by picturesque buildings and colorful facades, it's a joy to explore on foot. Plus, there are plenty of benches to sit and people-watch while soaking in the ambiance.",
  },
  {
    avatar: <Avatar alt="Visitor 6" src="/path/to/visitor6.jpg" />,
    name: 'Visitor Six',
    occupation: 'History Buff',
    testimonial:
    "I spent a delightful afternoon wandering around Union Square. The central location makes it easily accessible, and the variety of cafes and restaurants offer a perfect spot to relax and recharge after sightseeing.",
  }
  // ... add the rest of the testimonials in a similar fashion
];

const whiteLogos = [
  // ... (your white logo URLs)
];

const darkLogos = [
  // ... (your dark logo URLs)
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();

  // Add any click handler functionality you need
  const handleCardClick = (index) => {
    console.log(`Testimonial ${index} clicked`);
    // Implement any action on click, e.g., opening a modal or changing a state
  };

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Testimonials
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Experience Union Square's charm through glowing testimonials! Visitors love our vibrant culture, 
          historic beauty, and innovative vibe. Known for exceptional hospitality, Timisoara offers memorable 
          experiences, combining tradition with modernity.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {timisoaraTestimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card 
              raised
              sx={{
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: theme.shadows[10],
                },
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              onClick={() => handleCardClick(index)}
            >
              <CardHeader
                avatar={testimonial.avatar}
                title={testimonial.name}
                subheader={testimonial.occupation}
                titleTypographyProps={{ variant: 'h6' }}
                subheaderTypographyProps={{ variant: 'body2', color: 'textSecondary' }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
                <Rating
                  name={`testimonial-rating-${index}`}
                  value={5}
                  readOnly
                  precision={0.5}
                  icon={<StarIcon fontSize="inherit" />}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}