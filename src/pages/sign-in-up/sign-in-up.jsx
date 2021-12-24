import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up'
import './sign-in-up.styles.scss'
const Sign = () => {
  return (
    <div className='sign-in-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Sign
