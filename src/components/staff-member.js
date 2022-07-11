import React from 'react'

const StaffMember = ({ member }) => (
  <div className='staff-member'>
    <img className='staff-image' alt={member.image.description} src={member.image.file.url} />
    <div className='staff-display-div'>
      <div className='staff-info'>
        <p className='role'>{member.title}</p>
        <h4 className='staff-name'>{member.name}</h4>
        {member.credentials && 
          <p className='qualifications'>{member.credentials}</p>
        }
        <p className='email'>{member.email}</p>
      </div>
    </div>
  </div>
)

export default StaffMember;