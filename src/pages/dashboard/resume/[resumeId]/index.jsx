import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from '../components/FormSection';
import ResumePreview from '../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '../../data/dummy';

export default function EditResume() {
    const [resumeInfo, setResumeInfo] = useState();

    useState(() => {
        setResumeInfo(dummy)
    }, [])
    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>

            <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'>
                {/* FORM SECTION */}
                <FormSection />
                {/* PREVIEW SECTION */}
                <ResumePreview />
            </div>
        </ResumeInfoContext.Provider>
    )
}
