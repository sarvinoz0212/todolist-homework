import { useState } from "react";
import  uzFlag from "../assets/images/uzbekistanflag.png";
import ruFlag from "../assets/images/russianflag.png";
import searchIcon from "../assets/images/search.png";
import backArrow from "../assets/images/back.png";
import cancel from "../assets/images/cancel.png";
import { uz, ru} from "../lang.js";
import { useNotesStore } from "../store/index.js";
const Nav = () => {
    const lang = useNotesStore(state=>state.lang)
    const setLang = useNotesStore(state=>state.setLang)
    const value = useNotesStore(state=>state.value)
    const setValue = useNotesStore(state=>state.setValue)
    const [active, setActive] = useState(false)
    const [searcActive, setSearcActive] = useState(false)


    const changeLang = (str)=>{
        setActive(!active)
        setLang(str=="uz"? uz : ru )
    }
    const back = ()=> {
        setSearcActive(false)
        setValue("")

    }

  return (
    <>
    <nav className="nav">
        <div className="nav_lang">
            <button className={`nav_lang_btn ${active && 'active'}`} onClick={()=>changeLang('uz')}>UZ
                <img src={uzFlag} alt="" />
            </button>
            <button className={`nav_lang_btn ${!active && 'active'}`} onClick={()=>changeLang('ru')}>RU
                <img src={ruFlag} alt="" />
            </button>
        </div>
        <h2 className="nav_title">{lang.navTitle}</h2>
        <button className="nav_btn" onClick={()=>setSearcActive(true)}>
            <img src={searchIcon} alt="" />
        </button>
    </nav>
    <nav className={`nav search ${searcActive && 'active'}`}>
        <button className="nav_back" onClick={back}>
            <img src={backArrow} alt="" />
        </button>
        <div className="container">
            <input
            type="text"
            placeholder={lang.navSearch} 
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            />
        </div>
        <button className="nav_clear" onClick={back}>
            <img src={cancel} alt="" />
        </button>
    </nav>
    </>

  )
}

export default Nav