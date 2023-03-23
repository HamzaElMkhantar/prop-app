import React, { useState } from 'react'
import img from '../image/IMG_5416.jpg'
import PropTypes from 'prop-types'
function Profile({fullName , bio , profession}) {
  const [toggle , setToggle] = useState(false)
  return (
    <div className='profileContent'>
        <img className='img' src={img} />
        {
          toggle &&
          <h2>{fullName('hamza el mkhantar')}</h2>
        }
        <h4>{bio}</h4>
        <p>{profession}</p>
     {
      !toggle ?
      <button onClick={ () => setToggle(!toggle)} > show  </button>
      :
      <button onClick={ () => setToggle(!toggle)} > hide  </button>
     }
    </div>
  )
}

// using prototype to check props !!
Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
  };
  

export default Profile