import React, { useContext } from 'react'
import Mycontext from '../Context/context'

const Nav = () => {
  const context = useContext(Mycontext);
  return( 
          <div className='nav'>
            <p className='user'>Hola {context.user}</p>



          </div>
  );
}


export default Nav;