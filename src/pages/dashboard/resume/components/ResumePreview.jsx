import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'

import PersonalDetailPreview from './Preview/PersonalDetailPreview'
import SummeryPreview from './Preview/SummeryPreview'
import ExperiencePreview from './Preview/ExperiencePreview'
import EducationalPreview from './Preview/EducationalPreview'
import SkillsPreview from './Preview/SkillsPreview'

function ResumePreview() {

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)


    return (


        <div className='shadow-lg h-full p-14 border-t-[20px]'
            style={{
                borderColor: resumeInfo?.themeColor
            }}>
            {/* Personal Detail  */}
            <PersonalDetailPreview resumeInfo={resumeInfo} />
            {/* Summery  */}
            <SummeryPreview resumeInfo={resumeInfo} />
            {/* Professional Experience  */}
            {resumeInfo?.experience?.length > 0 && <ExperiencePreview resumeInfo={resumeInfo} />}
            {/* Educational  */}
            {resumeInfo?.education?.length > 0 && <EducationalPreview resumeInfo={resumeInfo} />}
            {/* Skilss  */}
            {resumeInfo?.skills?.length > 0 && <SkillsPreview resumeInfo={resumeInfo} />}
        </div>

    )
}

export default ResumePreview