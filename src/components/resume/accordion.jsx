import { useState } from 'react'
import './resume.css'
import { Progress } from './progress'

export const Accordion = ({title, text}) => {

    const [isOpen, setIsOpen] = useState(false)

    function clickHandler(){
        setIsOpen(!isOpen)
    }

    //  progress bar skill data.
    const skillsData = [
        { name: 'HTML & CSS', progress: 80 },
        // { name: 'Bootsrap & Tailwind m', progress: 30 },
        // { name: 'JS & React.js', progress: 70 },
        // { name: 'Python & Django', progress: 70 },
    ];
      
    return(
        <>
        <div className="main">
                <div className="accordion">
                <div className="title_container">
                <h2>{title}</h2>
                <p onClick={(clickHandler)}>{isOpen ? "➖" : "➕"}</p>
            </div>
            {
                isOpen && 
            <p className='accor_text'>{text}</p>
            }
                </div>



        </div>
        </>
    )
}