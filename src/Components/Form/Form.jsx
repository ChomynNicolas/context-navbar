import React, { useContext } from 'react'
import Mycontext from '../Context/context'




const Form = () => {
  const context = useContext(Mycontext);
  


  return (
    <form>
      <label htmlFor="user">Your name: </label>
      <input type="text" id="user" name="user"  placeholder={context.user}
      onChange={(event)=>context.setUser(event.target.value)}/>
    </form>
  )
};


export default Form;
