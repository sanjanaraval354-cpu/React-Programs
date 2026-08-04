import React, { useContext } from 'react'
import { FacultyContext } from '../App'
import "../assets/card.css"

export default function Faculty() {
  const faculty = useContext(FacultyContext)
  return (
    <div className="faculty-card">
  <div className="faculty-image">
    <img
      src={faculty.image}
      alt={faculty.name}
      width={100}
      height={100}
    />
  </div>
  <div className="faculty-details">
    <h3>{faculty.name}</h3>
    <p>
      <strong>Email:</strong> {faculty.email}
    </p>
    <p>
      <strong>Contact:</strong> {faculty.contactno}
    </p>
  </div>
</div>
  )
}

