import React, { useState } from 'react'
import gridIcon from "../assets/images/spisok.png";
import listIcon from "../assets/images/setka.png";
import pencil from "../assets/images/pencil.png";
import trash from "../assets/images/trash.png";
import { useNotesStore } from '../store';

// import { uz, ru } from "../lang";


const Notes = () => {
  const [grid, setGrid] = useState(true)
  const lang = useNotesStore(state => state.lang)
  const notes = useNotesStore(state => state.notes)
  // const setNotes = useNotesStore(state => state.setNotes)
  const setModal = useNotesStore(state => state.setModal)
  const setTitle = useNotesStore(state => state.setTitle)
  const setText = useNotesStore(state => state.setText)
  const setUpdate = useNotesStore(state => state.setUpdate)
  const value = useNotesStore(state => state.value)
  const setDeleteModal = useNotesStore(state => state.setDeleteModal)
  const setDeleteNote = useNotesStore(state => state.setDeleteNote) 

  // const delNote=(id)=>{
  //   setNotes(notes.filter(note=>note.id !== id))
  // }
  const changeNote= (note)=>{
    setModal(true)
    setTitle(note.title)
    setText(note.text)
    setUpdate({id:note.id, edit:true})
  }
  const filterNotes =
    value.trim() == "" 
    ? 
    notes
    :
   notes.filter(note=>note.title.toLowerCase().includes(value.toLowerCase())

  )

  if (notes.length) {
    return (
      <div className="notes">
        <div className="container">
        <div className="notes_top">
              <h2 className="notes_top_title">{lang.allNote}</h2>
              <button className="notes_top_btn" onClick={()=> setGrid(!grid)}>
                {grid
                ? <>
                <img src={gridIcon} alt="" />
                <span>{lang.list}</span>
                </>
                : <>
                <img src={listIcon} alt="" />
                <span>{lang.grid}</span>
                </>
                }
              </button>
  
          </div>
          <div className={`notes_box ${grid && "active"}`}>
            {filterNotes.map(note=>(
                        <div className="notes_card" key={note.id}>
                        <div className="notes_card_info">
                          <h2 className="notes_card_title">{note.title}</h2>
                          <p className="notes_card_date">{note.date}</p>
                        </div>
                        <p className="notes_card_text">{note.text}</p>
                        <div className="notes_card_btns">
                          <button className="btn edit" onClick={()=>changeNote(note)}>
                            <img src={pencil} alt="" />
                            <span>{lang.editBtn}</span>
                          </button>
                          <button className="btn del" onClick={()=>{ setDeleteModal(true); setDeleteNote(note) }}>
                            <img src={trash} alt="" />
                            <span>{lang.delBtn}</span>
                          </button>
                        </div>
                    </div>
            ))}
            
          </div>
        </div>
      </div>
    )
  }else{
    return <h2 style={{textAlign:"center", marginTop:"50px"}}className="notes_top_title">{lang.nonote}</h2>
  }

}

export default Notes