import { create } from "zustand";
import { uz } from "../lang";


function getNotes() {
    const local = localStorage.getItem('notes')
    if (local) {
        return JSON.parse(local)
    }else{
        return []
    }

}
export const useNotesStore =  create((set)=>({
    lang: uz,
    modal:false,
    text:"",
    title:"",
    value: "",
    notes: getNotes(),
    update:{id:'', edit:false},
    deleteModal: false,
    deleteNote: {},
    setDeleteModal: (data) => set({ deleteModal: data }),
    setDeleteNote: (data) => set({ deleteNote: data }),
    setUpdate:(data)=>set({update:data}),
    setValue:(data)=>set({value:data}),
    setText:(data)=>set({text:data}),
    setTitle:(data)=>set({title:data}),
    setNotes:(data)=>set(()=>{
        localStorage.setItem('notes', JSON.stringify(data))
        return {notes:data}
    }),
    setLang:(data)=>set({lang:data}),
    setModal:(data)=>set({modal:data})


}))