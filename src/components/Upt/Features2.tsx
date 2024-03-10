import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import Imagine from './images.jpg';

const items = [
  
  {
    icon: <DevicesRoundedIcon />,
    title: 'European Capital of Culture',
    description:
      'Timisoara has been designated as the European Capital of Culture for 2023, highlighting its vibrant arts scene, numerous theaters, museums, and cultural events.',
    imageLight: 'url("/static/images/templates/templates-images/devices-light.png")',
    imageDark: 'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              About Upt
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Politehnica University of Timișoara (Romanian: Universitatea Politehnica Timișoara; abbreviated UPT) is a public university in Timișoara. Founded in 1920, it is one of the largest technical universities in Central and Eastern Europe. The 10 faculties of the university provide study programs for about 13,000 students. In 2011, Politehnica University of Timișoara was classified as an advanced research and education university by the Ministry of Education. The university is a founding member of the Romanian Alliance of Technical Universities (ARUT).

            </Typography>
          
          </div>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
              key={index}
              variant="outlined"
              component={Button}
              onClick={() => handleItemClick(index)}
              sx={{
                p: 3,
                height: 'fit-content',
                width: '100%',
                background: 'none',
                backgroundColor: selectedItemIndex === index ? 'action.selected' : 'background.paper',
                borderColor: (theme) =>
                  selectedItemIndex === index
                    ? theme.palette.primary.main
                    : theme.palette.divider,
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.action.hover,
                  transform: 'scale(1.05)', // Slightly increases the scale of the card on hover
                  transition: 'transform .3s ease-in-out', // Smooth transition for transform
                },
              }}
            >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        '& > svg': { transition: '0.2s' },
                        '&:hover > svg': { transform: 'translateX(2px)' },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: '1px', ml: '2px' }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
          <Box
            sx={{
              m: 'auto',
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: '50% center',
              backgroundImage: `url(${Imagine})`,
            }}
          />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
