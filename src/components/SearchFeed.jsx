import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography, Box } from '@mui/material'
import { Videos } from '../components'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
      fetchFromAPI(`search?part=snippet,id&q=${searchTerm}`)
          .then((data) => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} color="white">
            Search Results For: <span style={{ color: '#F31503' }}>{searchTerm[0].toUpperCase() + searchTerm.slice(1,100)}</span> Videos
        </Typography>

        <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed