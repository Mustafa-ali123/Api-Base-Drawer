import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import MContent from './Component/MContent'
import Post from './Component/Post'
import Comment from './Component/Comment'

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MContent />} >
            <Route path='comt' element={<Comment />} />
            <Route path='post' element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default AppRouter

