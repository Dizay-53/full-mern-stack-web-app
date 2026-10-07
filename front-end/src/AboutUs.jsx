import { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutUs.css'

const AboutUs = props => {
  const [about, setAbout] = useState(null)
  const [error, setError] = useState('')

  // fetch the About Us content from the back end when the page loads
  useEffect(() => {
    axios
      .get('http://localhost:5002/about')
      .then(response => setAbout(response.data))
      .catch(err => setError('Could not load the About Us page.'))
  }, [])

  if (error) return <p>{error}</p>
  if (!about) return <p>Loading...</p>

  return (
    <div className="AboutUs">
      <h1>About Us</h1>
      <img src={about.imageUrl} alt={about.name} />
      <h2>{about.name}</h2>
      {about.paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  )
}

export default AboutUs