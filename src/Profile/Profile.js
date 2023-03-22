import React from 'react'
import img from '../image/IMG_5416.jpg'
import PropTypes from 'prop-types'
function Profile({fullName , bio , profession}) {
  return (
    <div className='profileContent'>
        <img className='img' src={img} />

        <h2>{fullName('handleName')}</h2>
        <h4>{bio}</h4>
        <p>{profession}</p>
    
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