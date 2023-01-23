import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'
import Navbar from './components/navbar/Navbar'
import Feed from './pages/feed/Feed'
import VideoDetail from './pages/video/VideoDetail'
import ChannelDetail from './pages/channel/ChannelDetail'
import SearchFeed from './pages/search/SearchFeed'

function App() {
  return (
    <>
      <Box sx={{ backgroundColor: '#000'}}>
        
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
