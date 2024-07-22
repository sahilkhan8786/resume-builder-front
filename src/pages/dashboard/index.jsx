import React, { useState } from 'react'
import AddResume from './components/AddResume'
import ResumeCardItem from './components/ResumeCardItem'


const DUMMY_RESUME = [{ title: 'first', id: 'r1' }]

export default function Dashboard() {
    const [resumeList, setResumeList] = useState(DUMMY_RESUME)

    return (
        <div className='p-10 md:px-20 lg:px-32'>
            <h2 className='font-bold text-3xl'>My Resume            </h2>
            <p>Start Creating AI to your next job role </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
                <AddResume />
                {
                    resumeList.length > 0 && resumeList.map(resume => (
                        <ResumeCardItem resume={resume} key={resume.id} />
                    ))
                }
            </div>
        </div>
    )
}
