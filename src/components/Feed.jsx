import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { SideBar, Videos } from '../components'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromAPI(`search?q=${selectedCategory}&part=snippet,id`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory])

    return (
    <Stack sx={{ flexDirection: { sx: 'coloumn', md: 'row' } }}>
        <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
            <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Typography variant="body2" color="#fff" sx={{ mt: 1.5 }} className='copyright'>
                Copyright 2023 MandyTEC LLC
            </Typography>
        </Box>

        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant="h4" fontWeight="bold" mb={2} color="white">
                {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
            </Typography>

            <Videos videos={videos}/>
        </Box>
    </Stack>
    )
}

export default Feed