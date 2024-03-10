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
    "Studying at UPT has been an incredible journey. The university's strong emphasis on practical, hands-on learning has prepared me well for my future career. The professors are experts in their fields, and the campus facilities are top-notch.",
  },
    {
    avatar: <Avatar alt="Visitor 2" src="/path/to/visitor2.jpg" />,
    name: 'Visitor Two',
    occupation: 'Photographer',
    testimonial:
    "UPT offers a dynamic learning environment where innovation is encouraged and celebrated. The university's focus on research and development is evident in its state-of-the-art laboratories and collaborative projects with industry partners. It's an exciting time to be part of UPT!",
  },
  {
    avatar: <Avatar alt="Visitor 3" src="/path/to/visitor3.jpg" />,
    name: 'Visitor Three',
    occupation: 'Food Critic',
    testimonial:
    "As a student at UPT, I've had the opportunity to participate in various extracurricular activities and student organizations. From robotics clubs to entrepreneurship competitions, there's always something happening on campus. UPT fosters a vibrant community where students can explore their interests and develop new skills.",
  },
  {
    avatar: <Avatar alt="Visitor 4" src="/path/to/visitor4.jpg" />,
    name: 'Visitor Four',
    occupation: 'Musician',
    testimonial:
    "UPT's commitment to excellence extends beyond the classroom. The university provides comprehensive support services for students, including career counseling, internships, and networking opportunities. I feel confident in my abilities and future prospects thanks to the resources available at UPT.",
  },
  {
    avatar: <Avatar alt="Visitor 5" src="/path/to/visitor5.jpg" />,
    name: 'Visitor Five',
    occupation: 'Entrepreneur',
    testimonial:
    "The faculty members at UPT are not only experts in their respective fields but also dedicated mentors who genuinely care about their students' success. They go above and beyond to provide guidance and support, both academically and professionally. I'm grateful for the mentorship I've received during my time at UPT.",
  },
  {
    avatar: <Avatar alt="Visitor 6" src="/path/to/visitor6.jpg" />,
    name: 'Visitor Six',
    occupation: 'History Buff',
    testimonial:
    "UPT's campus is a hub of innovation and creativity. From the modern architecture to the cutting-edge research facilities, everything is designed to inspire and facilitate learning. The campus atmosphere is vibrant and inclusive, making it a great place to study and collaborate with peers.",
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
          Experience Upt's charm through glowing testimonials! Visitors love our vibrant culture, 
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