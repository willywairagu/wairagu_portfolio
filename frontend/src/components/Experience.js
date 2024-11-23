import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from 'react-material-ui-carousel';

const Experience = () => {
  const [experience, setExperience] = useState([]);
  
  const fetchExperience = () => {
    console.log('Fetching experience from:', `${process.env.REACT_APP_API_URL}/experience/experience`);
    
    axios.get(`${process.env.REACT_APP_API_URL}/experience/experience`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true
    })
    .then(response => {
      console.log('Experience API response:', response.data);
      setExperience(response.data);
    })
    .catch(error => {
      console.error('Experience API error:', error);
      console.error('Error details:', error.response || error.message);
    });
  };
  
  useEffect(() => {
    fetchExperience();
  }, []);

  // Add debug render
  console.log('Current experience state:', experience);

  return (
    <Box
      maxWidth={{ sm: 720, md: 1236 }}
      width={1}
      margin="0 auto"
      paddingX={2}
      paddingY={4}
    >
      <Typography
        variant="h3"
        color={theme.palette.primary.main}
        fontWeight={700}
        align="center"
        marginBottom={4}
      >
        Work Experience
      </Typography>
      <Carousel interval={10000}>
        {experience.map((item, i) => (
          <Box key={i} padding={2}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
                  <Box flex={1} marginRight={{ md: 4 }}>
                    {item.images.length > 0 && (
                      <Carousel interval={5000}>
                        {item.images.map((img, index) => (
                          <Box
                            key={index}
                            component={LazyLoadImage}
                            src={img.image}
                            alt={`${item.role} at ${item.company}`}
                            effect="blur"
                            width={1}
                            height={750} // Set a fixed height for the images
                            style={{ objectFit: 'cover' }} // Ensure the image covers the box
                            borderRadius={2}
                          />
                        ))}
                      </Carousel>
                    )}
                  </Box>
                  <Box flex={1}>
                    <Typography
                      variant="h4"
                      color={theme.palette.text.primary}
                      fontWeight={700}
                    >
                      {item.role} at {item.company}
                    </Typography>
                    <Typography
                      variant="h6"
                      color={theme.palette.text.secondary}
                    >
                      {item.start_date} - {item.end_date || "Present"}
                    </Typography>
                    <Typography
                      variant="body1"
                      color={theme.palette.text.secondary}
                      component="div"
                    >
                      <ul>
                        {item.description.split('\n').map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
  
};

export default Experience;