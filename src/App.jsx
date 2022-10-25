import React from 'react'
import Nav from './components/navbarlogo/Navbarlogo'
import Content from './components/content/Content'
import Companies from './components/companies/Companies'
import Form from './components/form/Form'




const App = () => {
  return (
    <div className='container'>
      <Nav />
      <Content />
      <Form />
      <Companies />
    </div>
  )
}

export default App