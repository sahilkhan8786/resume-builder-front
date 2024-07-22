import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
export default function AddResume() {


    const [openDialog, setOpenDialog] = useState(false)
    return (
        <div >
            <div className='p-14 py-24 border flex items-center justify-center bg-secondary rounded-lg h-[280px] 
            hover:scale-105 hover:shadow-md transition-all cursor-pointer border-dashed'
                onClick={() => setOpenDialog(true)}
            >
                <PlusSquare />
            </div>
            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogDescription>
                            <p>Add Title for your new Resume</p>
                            <Input className="my-2" placeholder="Ex. Full Stack Resume" />
                        </DialogDescription>
                        <div className='flex justify-end gap-5'>
                            <Button variant='ghost' onClick={() => setOpenDialog(false)}>Cancel</Button>
                            <Link to={`/dashboard/resume/new/edit`}>
                                <Button>Create</Button>
                            </Link>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}
