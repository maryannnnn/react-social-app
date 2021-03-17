import React from 'react'
import s from '../Profiileinfo/Profileinfo.module.css'

const Profileinfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.freelancejob.ru/upload/382/99225189117714.jpg'/>
            </div>
            <div className={s.descriptionBlock} >
                ava + description
            </div>

        </div>
    )
}

export default Profileinfo;