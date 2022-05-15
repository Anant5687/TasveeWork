import React from 'react'
import character from '../assets/character.jpeg'
import style from './Login.module.css'

const LoginSecondHalf = () => {
  return (
    <div>
      <img src={character} alt="img" 
      className={style.image}/>
    </div>
  )
}

export default LoginSecondHalf
