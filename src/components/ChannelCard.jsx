import React from 'react'
import { Link } from 'react-router-dom'
import { CardContent, CardMedia, Typography, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box sx={{ marginTop: marginTop, boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '356px', md: '320px' }, height: '326px', ml: 'auto', mr: 'auto'}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'inline-block', flexDirection: 'coloum', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
            alt={channelDetail?.snippet?.title}
            sx={{ width: '180px', height: '180px', borderRadius: '50%', mb: 2, border: '1px solid #e3e3e3' }} 
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography variant="subtitle2" color="gray">{parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers</Typography>
            )
          }
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
