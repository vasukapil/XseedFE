import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import { fetchMoreContent } from './helper';

const Chapter1 = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const loadMoreContent = async () => {
        const newContent = await fetchMoreContent(page);
        setPage((prevPage) => prevPage + 1);
        setContent((prevContent) => [...prevContent, ...newContent]);
      };

      useEffect(() =>{
        loadMoreContent();
      },[])
      
      useEffect(() => {
        const handleScroll = () => {
          const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      
          if (scrollTop + clientHeight >= scrollHeight) {
            loadMoreContent();
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div>
         {content && content?.map((text, index) => (
      <Typography key={index} paragraph>
        {text}
      </Typography>
    ))}
    </div>
  )
}

export default Chapter1
