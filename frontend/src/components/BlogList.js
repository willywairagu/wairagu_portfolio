import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const theme = useTheme();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog/`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div id="blog">
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin="0 auto"
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Box marginBottom={4}>
          <Typography
            variant="h2"
            align="center"
            fontWeight={700}
            marginTop={theme.spacing(1)}
            data-aos="fade-up"
            gutterBottom
          >
            Blog Posts
          </Typography>
          <Typography
            variant="h5"
            color={theme.palette.text.secondary}
            align="center"
            data-aos="fade-up"
            marginTop={4}
            marginBottom={6}
          >
            Read about my latest thoughts, ideas, and projects
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Box
                component={Card}
                height={1}
                display="flex"
                flexDirection="column"
                data-aos="fade-up"
              >
                <CardMedia
                  image={post.image || 'https://source.unsplash.com/random'}
                  title={post.title}
                  sx={{ height: 240 }}
                />
                <Box component={CardContent} flexGrow={1}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {post.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {post.content.substring(0, 100)}...
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box padding={2} display="flex" flexDirection="column">
                  <Button
                    component={Link}
                    to={`/blog/${post.id}`}
                    variant="outlined"
                    size="large"
                    fullWidth
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default BlogList;