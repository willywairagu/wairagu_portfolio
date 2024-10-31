import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container, useTheme } from '@mui/material';

const BlogPost = () => {
  const theme = useTheme();
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog/${id}/`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <Typography>Loading...</Typography>;

  return (
    <div id="blog-post">
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin="0 auto"
        paddingX={2}
        paddingY={{ xs: 4, sm: 6, md: 8 }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            fontWeight={700}
            marginTop={theme.spacing(1)}
            data-aos="fade-up"
            gutterBottom
          >
            {post.title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color={theme.palette.text.secondary}
            data-aos="fade-up"
            marginBottom={4}
          >
            Published on: {new Date(post.created_at).toLocaleDateString()}
          </Typography>
          <Box marginBottom={4} data-aos="fade-up">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </Box>
        </Container>
      </Box>
    </div>
  );
};

export default BlogPost;