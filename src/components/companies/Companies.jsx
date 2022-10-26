import React from 'react'
import './companies.css'
import IMG1 from '../../assets/Img1.svg'
import IMG2 from '../../assets/img2.svg'
import IMG3 from '../../assets/img3.svg'
import IMG4 from '../../assets/img4.svg'
import IMG5 from '../../assets/img5.svg'
import IMG6 from '../../assets/img6.svg'
import IMG7 from '../../assets/img7.svg'

let data = [
  {
    id: 1,
    image: IMG1,
    title: "Atlassian Icon"
  },
  {
    id: 2,
    image: IMG2,
    title: "Behance Icon"
  },
  {
    id: 3,
    image: IMG3,
    title: "Bing Icon"
  },
  {
    id: 4,
    image: IMG4,
    title: "Bitbucket Icon"
  },
  {
    id: 5,
    image: IMG5,
    title: "Dropbox Icon"
  },
  {
    id: 6,
    image: IMG6,
    title: "Twitch Icon"
  },
  {
    id: 7,
    image: IMG7,
    title: "Twitter Icon"
  }
]
const Companies = () => {
  return (
    <footer>

      <h5>Used by these companies:</h5>
      <div className="image-container">
        {
          data.map(({id, image, title}) => {
            return (
              <img key={id} src={image} alt={title} />
            )
          } )
        }
      </div>
      
    </footer>
  )
}

export default Companies