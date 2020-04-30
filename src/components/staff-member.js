import React from 'react'

export default ({ member }) => (
  <div className='staff-member'>
    <img className='staff-image' alt={member.image.description} src={member.image.file.url} />
    <div className='staff-display-div'>
      <div className='staff-info'>
        <h4>{member.name}</h4>
        <p className='role'>{member.title}</p>
        {member.credentials && 
          <p className='qualifications'>{member.credentials}</p>
        }
        <p>{member.email}</p>
      </div>
    </div>
  </div>
)
