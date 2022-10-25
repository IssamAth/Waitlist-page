import React from 'react'
import Nav from './components/navbarlogo/Navbarlogo'
import Content from './components/content/Content'
import Companies from './components/companies/Companies'




const App = () => {
  return (
    <div className='container'>
      <Nav />
      <Content />
      <Companies />
    </div>
  )
}

export default App