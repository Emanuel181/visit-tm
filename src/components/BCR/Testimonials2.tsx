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
    "SIC was an incredible event that showcased the best of Timisoara's innovation and creativity. From thought-provoking talks to hands-on workshops, there was something for everyone. I left feeling inspired and motivated to pursue my own entrepreneurial ventures.",
  },
    {
    avatar: <Avatar alt="Visitor 2" src="/path/to/visitor2.jpg" />,
    name: 'Visitor Two',
    occupation: 'Photographer',
    testimonial:
    "Attending SIC was a game-changer for me. The speakers were engaging, the atmosphere was electric, and the networking opportunities were invaluable. It's rare to find an event that combines education, inspiration, and fun in such a seamless way.",
  },
  {
    avatar: <Avatar alt="Visitor 3" src="/path/to/visitor3.jpg" />,
    name: 'Visitor Three',
    occupation: 'Food Critic',
    testimonial:
    "SIC exceeded all my expectations. The organizers did an amazing job curating a diverse lineup of speakers and activities. Whether you're a seasoned entrepreneur or just starting out, SIC offers valuable insights and connections to help you succeed.",
  },
  {
    avatar: <Avatar alt="Visitor 4" src="/path/to/visitor4.jpg" />,
    name: 'Visitor Four',
    occupation: 'Musician',
    testimonial:
    "I had the pleasure of attending SIC and was blown away by the caliber of speakers and content. The event was well-organized, and the topics covered were relevant and thought-provoking. I left feeling empowered and ready to take on new challenges.",
  },
  {
    avatar: <Avatar alt="Visitor 5" src="/path/to/visitor5.jpg" />,
    name: 'Visitor Five',
    occupation: 'Entrepreneur',
    testimonial:
    "SIC was an unforgettable experience. The energy and enthusiasm of the attendees were contagious, and I was impressed by the level of engagement from start to finish. It's clear that SIC has established itself as a must-attend event for anyone passionate about innovation and entrepreneurship.",
  },
  {
    avatar: <Avatar alt="Visitor 6" src="/path/to/visitor6.jpg" />,
    name: 'Visitor Six',
    occupation: 'History Buff',
    testimonial:
    "SIC was an eye-opening event that left a lasting impression on me. The speakers shared valuable insights and practical advice that I can apply to my own projects. I also appreciated the opportunity to connect with like-minded individuals and build meaningful relationships.",
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
          Experience SIC's charm through glowing testimonials! Visitors love our vibrant culture, 
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