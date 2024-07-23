import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className=' shadow-md w-full'>

            <div className='max-w-screen-2xl mx-auto p-3 px-5 flex justify-between items-center  '>
                <Link to='/'>
                    <img src='/logo.png' width={50} />
                </Link>
                <Link to={`/dashboard`}>
                    <Button>Get Started</Button>
                </Link>
            </div>
        </header>
    )
}
