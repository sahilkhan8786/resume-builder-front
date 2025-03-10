// src/my-resume/resumeId/view/index.jsx
import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import dummy from "@/pages/dashboard/data/dummy";
import ResumePreview from "@/pages/dashboard/resume/components/ResumePreview";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RWebShare } from "react-web-share";

function ViewResume() {

    const [resumeInfo, setResumeInfo] = useState(dummy);
    const { resumeId } = useParams();

    useEffect(() => {
        GetResumeInfo();
    }, [resumeId]);

    const GetResumeInfo = async () => {
        try {
            // Fetch data from API or other source
            setResumeInfo(dummy);
        } catch (error) {
            console.error("Error fetching resume info:", error);
        }
    };

    const HandleDownload = () => {
        window.print();
    };

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div id="no-print">
                <Header />
                <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
                    <h2 className='text-center text-2xl font-medium'>
                        Congrats! Your Ultimate AI generates Resume is ready!
                    </h2>
                    <p className='text-center text-gray-400'>
                        Now you are ready to download your resume and you can share unique
                        resume url with your friends and family
                    </p>
                    <div className='flex flex-col gap-5 sm:flex-row my-10 sm:justify-end'>
                        <Button onClick={HandleDownload}>Download</Button>
                        <RWebShare
                            data={{
                                text: "Hello Everyone, This is my resume please open url to see it",
                                url: `/my-resume/${resumeId}/view`,
                                title: `${resumeInfo?.firstName} ${resumeInfo?.lastName} resume`,
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <Button>Share</Button>
                        </RWebShare>
                    </div>
                </div>
            </div>
            <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
                <div id="print-area">
                    <ResumePreview />
                </div>
            </div>
        </ResumeInfoContext.Provider>
    );
}

export default ViewResume;
