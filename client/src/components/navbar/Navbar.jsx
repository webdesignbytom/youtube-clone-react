import React from 'react'
import { Stack } from '@mui/system'

import { logo } from '../../utils/constants'
import { Link } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'

function Navbar() {
  return (
    <Stack direction="row" alignItems='center' p={2} sx={{position: 'stick', background: '#000', top: 0, justifyContent: 'space-between'}}>
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }} >
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar