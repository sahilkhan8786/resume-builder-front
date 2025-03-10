import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';
import PersonalDetail from './forms/PersonalDetail';

import Experience from './forms/Experience';
import Education from './forms/Education';
import Skills from './forms/Skills';
import Summery from './forms/Summery';
// import ThemeColor from './ThemeColor';

function FormSection() {
    const [activeFormIndex, setActiveFormIndex] = useState(1);
    const [enableNext, setEnableNext] = useState(true);
    const { resumeId } = useParams();

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5'>
                    <Link to="/dashboard">
                        <Button><Home /></Button>
                    </Link>
                    {/* <ThemeColor /> */}
                </div>
                <div className='flex gap-2'>
                    {activeFormIndex > 1 && (
                        <Button size="sm" onClick={() => setActiveFormIndex(activeFormIndex - 1)}>
                            <ArrowLeft />
                        </Button>
                    )}
                    <Button
                        disabled={!enableNext}
                        className="flex gap-2"
                        size="sm"
                        onClick={() => setActiveFormIndex(activeFormIndex + 1)}
                    >
                        Next <ArrowRight />
                    </Button>
                </div>
            </div>

            {activeFormIndex === 1 && <PersonalDetail setEnableNext={setEnableNext} />}
            {activeFormIndex === 2 && <Summery setEnableNext={setEnableNext} />}
            {activeFormIndex === 3 && <Experience />}
            {activeFormIndex === 4 && <Education />}
            {activeFormIndex === 5 && <Skills />}
            {activeFormIndex === 6 && <Navigate to={`/my-resume/${resumeId}/view`} />}
        </div>
    );
}

export default FormSection;
