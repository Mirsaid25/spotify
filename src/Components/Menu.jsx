import React from 'react'

function Menu() {
  return (
    <div className='Menu'>
      <div className="menu_top">
        <div className="links_block">
          <a href="/">
            <img src="/icons/home-icon.svg" alt="" />
            <span>Home</span>
          </a>
          <a href="/">
            <img src="/icons/search-icon.svg" alt="" />
            <span>Search</span>
          </a>
          <a href="/">
            <img src="/icons/library.svg" alt="" />
            <span>Your Library</span>
          </a>
        </div>
        <div className="links2_block">
        <a href="/">
            <img src="/icons/create-play_list-icon.svg" alt="" />
            <span>Create Playlist</span>
          </a>
          <a href="/">
            <img src="/icons/Liked Songs_S.svg" alt="" />
            <span>Liked Songs</span>
          </a>
        </div>
        <hr />
      </div>
      <div className="like_songs_block">
        <span>Lorem, ipsum dolor.</span>
        <span>Lorem, ipsum dolor.</span>
        <span>Lorem, ipsum dolor.</span>
        <span>Lorem, ipsum dolor.</span>
        <span>Lorem, ipsum dolor.</span>
        <span>Lorem, ipsum dolor.</span>
      </div>
    </div>
  )
}

export default Menu