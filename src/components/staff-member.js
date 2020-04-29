import React from 'react'
import { Link } from 'gatsby'
// import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ member }) => (
  <div className={styles.preview}>
    <img alt={member.image.description} src={member.image.file.url} />
    <h4>{member.name}</h4>
    <h5>{member.title}</h5>
    <small>{member.credentials}</small>
    <p>{member.email}</p>
  </div>
)
