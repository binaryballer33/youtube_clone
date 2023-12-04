import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const SideBar = ({ seletectedCategory, setSelectedCategory }) => {
  return (
    <Stack sx={{ overflowY: "auto", height: { sx: 'auto', md: '95%'}, flexDirection: { md: 'column' } }}>
      {categories.map((category) => (
        <button 
          key={category.name} 
          className='category-btn' 
          style={{ background: category.name === seletectedCategory && '#FC1503', color: 'white'}}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span style={{ color: category.name === seletectedCategory ? 'white' : 'red', marginRight: '15px' }}>{category.icon}</span>
          <span style={{ opacity: category.name === seletectedCategory ? '1' : '0.8' }}>{category.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar
