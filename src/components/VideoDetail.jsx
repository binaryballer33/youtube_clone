import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Videos } from '../components'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data?.items[0]))

    fetchFromAPI(`search?relatedToVideoId=${id}&part=snippet&type=video`)
      .then((data) => setVideos(data?.items))
  }, [id])

  // this fixes the error, that snippet is undefined because it hasn't loaded yet
  if (!videoDetail?.snippet) {
    return "Loading..."
  }

  const { snippet : { title, channelId, channelTitle }, statistics : { viewCount, likeCount } } = videoDetail

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: 'sticky', top: '86px'}}>
            <ReactPlayer className="react-player" url={`https://www.youtube.com/watch?v=${id}`} controls/>
            <Typography variant="h5" color="#fff" p={2} fontWeight="bold">{title}</Typography>
            <Stack direction="row" justifyContent="space-between" color="#fff" py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
                  {channelTitle}
                </Typography>
                <CheckCircle sx={{ fontSize: "12px", color: 'gray', ml: '5px' }}/>
              </Link>
              <Stack direction="row" alignItems="center" gap="20px">
                <Typography variant="body1" color="#fff" sx={{ opacity: .7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" color="#fff" sx={{ opacity: .7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column"/>
        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetail