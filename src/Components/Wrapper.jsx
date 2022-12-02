import React from 'react'
import WrapperCenter from './Wrapper/WrapperCenter'
import WrapperRightModal from './Wrapper/WrapperRightModal'

function Wrapper() {
  return (
    <div className='Wrapper'>
        <WrapperCenter/>
        <WrapperRightModal/>
    </div>
  )
}

export default Wrapper