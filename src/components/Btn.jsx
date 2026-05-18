import React from 'react'
import pencil from "../assets/images/pencil.png";
import { useNotesStore } from '../store';

const Btn = () => {
    const setModal = useNotesStore(state=>state.setModal)
  return (
    <button className="addBtn" onClick={()=>setModal(true)}>
        <img src={pencil} alt="" />
    </button>
  )
}

export default Btn