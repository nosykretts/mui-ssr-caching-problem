import React from 'react';
import TroubleButton from './TroubleButton'

function MainLayout (props) {
  return(
    <div>
      <TroubleButton />
      <hr/>
      {props.children}
    </div>
    
  )
}

export default MainLayout