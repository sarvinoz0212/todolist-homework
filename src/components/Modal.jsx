import React from 'react'
import { useNotesStore } from '../store'
import { v4 } from 'uuid'

const Modal = () => {
    const{lang, modal,setModal, text, title, setText, setTitle, setNotes, notes, update, setUpdate} = useNotesStore()
    const cancel = ()=>{
        setModal(false),
        setText(''),
        setTitle(''),
        setUpdate({id:"", edit:false})
    }
    const addNote = ()=>{
    const id = v4()
        const newNote = {
            id:update.edit ? update.id : id ,
            title:title,
            text:text,
            date:new Date().toLocaleDateString(),
        }
        if(update.edit){
            notes.map(note => note.id==update.id ? newNote : note)
            setUpdate({id:"", edit:false})
        }else{
            setNotes([...notes, newNote])
        }
        
        cancel()
    }
  return (

   <div className={`modal ${modal ? 'active' : ''}`}>
    <div className="modal_card">
        <h2 className="modal_card_title">{update.edit ? lang.editNote  : lang.titleWindow}</h2>
        <label className="modal_card_label">
            <span>Title</span>
            <input 
            type="text" 
            placeholder='Title' 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)}
             />
        </label>
        <label className="modal_card_label">
            <span>Content</span>
            <input 
            type="text" 
            placeholder='Content'
            value={text} 
            onChange={(e)=>setText(e.target.value)} 
            />
        </label>
        <div className="modal_card_btns">
            <button className="btn del" onClick={cancel}>{lang.cancel}</button>
            <button className="btn edit" onClick={addNote}>{lang.addNote}</button>
        </div>
    </div>
   </div>
  )
}

export default Modal