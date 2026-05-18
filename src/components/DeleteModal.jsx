import React from 'react'
import { useNotesStore } from '../store'

const DeleteModal = () => {
    const lang = useNotesStore(state => state.lang)
    const deleteModal = useNotesStore(state => state.deleteModal)
    const deleteNote = useNotesStore(state => state.deleteNote)
    const notes = useNotesStore(state => state.notes)
    const setNotes = useNotesStore(state => state.setNotes)
    const setDeleteModal = useNotesStore(state => state.setDeleteModal)
    const setDeleteNote = useNotesStore(state => state.setDeleteNote)

    const close = () => {
        setDeleteModal(false)
        setDeleteNote({})
    }
    const remove = () => {
        const filtered = notes.filter(
            note => note.id !== deleteNote.id
        )
        setNotes(filtered)
        close()
    }
    return (
        <div className={`modal ${deleteModal ? 'active' : ''}`}>
            <div className="modal_card">
                <h2 className="modal_card_title">
                    {lang.delNote}
                </h2>
                <p className= "delNote_title">
                    {deleteNote.title}
                </p>
                <div className="modal_card_btns">
                    <button  className="btn edit" onClick={close} >{lang.cancel}</button>
                    <button className="btn del" onClick={remove}>{lang.delBtn}</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal