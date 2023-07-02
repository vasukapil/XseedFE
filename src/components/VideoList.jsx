import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { makeStyles } from '@mui/styles';
import { BASE_URL } from '../api';

const useStyles = makeStyles((theme) => ({
    listItem: {
        display: 'flex',
        alignItems: 'center',
       
      },
      videoTitle: {
        fontSize: '1.2rem',
        paddingLeft : '16px',
      
      },
}));

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const classes = useStyles();
  
    useEffect(() => {
      fetch(`${BASE_URL}/videos`)
        .then((response) => response.json())
        .then((data) => {
          setVideos(data);
        })
        .catch((error) => {
          console.error('Failed to fetch videos:', error);
        });
    }, []);

    const handleVideoClick = (url) => {
        // Handle video click event, e.g., play the video
        console.log('Video clicked:', url);
      };
  
    return (
      <div>
        <Typography variant="h4" component="h2">
          Videos
        </Typography>
        <List>
          {videos.map((video) => (
            <ListItem key={video._id} onClick={() => handleVideoClick(video.url)}  className={classes.listItem}>
                 <ReactPlayer url={video.url} width="400px" height="auto" controls={false} />
              <ListItemText primary={video.title} classes={{ primary: classes.videoTitle }}  />
            </ListItem>
          ))}
        </List>
      </div>
    );
  };
export default VideoList  