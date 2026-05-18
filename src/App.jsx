import React from 'react'
import Nav from './components/Nav'
import Notes from './components/Notes'
import Btn from './components/Btn'
import Modal from './components/Modal'
import DeleteModal from './components/DeleteModal'

const App = () => {
  return (
    <>
    <Nav/>
    <Notes/>
    <Btn/>
    <Modal/>
    <DeleteModal/>
    </>
  )
}

export default App