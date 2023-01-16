import React from 'react'
import {Link} from 'react-router-dom'
import {FaQuestion} from 'react-icons/fa'

export default function AboutIcon() {
  return (
    <div>
      <Link to={"/about"}>
        <FaQuestion size={30} className='about-link' style={{color:"white", marginLeft:"70vw"}}/>
      </Link>
    </div>
  )
}
