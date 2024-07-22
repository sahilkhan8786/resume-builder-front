import React from 'react'
import { Link } from 'react-router-dom'

export default function ResumeCardItem({ resume }) {
    return (
        <Link to={`/dashboard/resume/${resume.id}/edit`} >
            <div className='p-14 bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200   flex items-center justify-center h-[280px] border border-primary rounded-lg hover:scale-105 hover:shadow-md shadow-primary transition-all'>
                <img src='/cv.png' alt="Edit " width={80} height={80} />

            </div>
            <h2 className='text-center my-1 '>{resume?.title}</h2>
        </Link>
    )
}
