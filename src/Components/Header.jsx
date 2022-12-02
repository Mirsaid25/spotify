import React from 'react'

function Header() {
  return (
    <div className='header'>
        <div className="header_left">
            <img src="/icons/toLeft-icon.svg" alt="" />
            <img src="/icons/toRight-icon.svg" alt="" />
        </div>
        <div className="header_right">
            <div className="user_foto">
                <img src="" alt="" />
            </div>
            <p>davedirect3</p>
            <img src="/icons/to_bottom.svg" alt="" />
        </div>
    </div>
  )
}

export default Header