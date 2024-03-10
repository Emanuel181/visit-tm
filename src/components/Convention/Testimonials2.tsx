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
    "ProW Timisoara exceeded my expectations! The event brought together professionals from various industries for insightful discussions, networking opportunities, and hands-on workshops. It was a fantastic platform to exchange ideas and learn from experts in the field. Highly recommend attending!",
  },
    {
    avatar: <Avatar alt="Visitor 2" src="/path/to/visitor2.jpg" />,
    name: 'Visitor Two',
    occupation: 'Photographer',
    testimonial:
    "Attending ProW Timisoara was a game-changer for me! The event provided valuable insights into the latest trends and best practices in project management, as well as opportunities to connect with like-minded professionals. I left feeling inspired and motivated to apply what I've learned in my own projects.",
  },
  {
    avatar: <Avatar alt="Visitor 3" src="/path/to/visitor3.jpg" />,
    name: 'Visitor Three',
    occupation: 'Food Critic',
    testimonial:
    "ProW Timisoara was a well-organized and informative event. The lineup of speakers was impressive, and I appreciated the diverse range of topics covered, from agile methodologies to risk management. It was a great opportunity to gain new skills and expand my professional network.",
  },
  {
    avatar: <Avatar alt="Visitor 4" src="/path/to/visitor4.jpg" />,
    name: 'Visitor Four',
    occupation: 'Musician',
    testimonial:
    "I had a fantastic time at ProW Timisoara! The event provided a comprehensive overview of project management principles and tools, with practical tips and case studies shared by industry experts. The interactive sessions and workshops were engaging and insightful, making it a valuable learning experience.",
  },
  {
    avatar: <Avatar alt="Visitor 5" src="/path/to/visitor5.jpg" />,
    name: 'Visitor Five',
    occupation: 'Entrepreneur',
    testimonial:
    "ProW Timisoara was an insightful and engaging event. The sessions were informative, and I appreciated the opportunity to learn from experienced project managers and industry leaders. The networking opportunities were also invaluable, allowing me to connect with peers and exchange ideas.",
  },
  {
    avatar: <Avatar alt="Visitor 6" src="/path/to/visitor6.jpg" />,
    name: 'Visitor Six',
    occupation: 'History Buff',
    testimonial:
    "Attending ProW Timisoara was a great investment in my professional development. The event provided a wealth of knowledge and practical skills that I can apply to my work. I particularly enjoyed the interactive workshops, which gave me hands-on experience with project management tools and techniques.",
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
        Prow Timisoara was an unforgettable experience! The event brought together a diverse range of talents, from local artisans to international performers, creating a vibrant celebration of creativity and culture. The atmosphere was electric, with music, dance, and art filling the streets and captivating audiences. I was particularly impressed by the interactive workshops and demonstrations, which allowed attendees to immerse themselves in various art forms. From the colorful street murals to the captivating live performances, Prow Timisoara truly showcased the city's rich artistic heritage. It was a weekend filled with inspiration, community, and a true appreciation for the arts. Can't wait for next year's event
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