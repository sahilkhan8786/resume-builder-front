import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='p-3 px-5 flex justify-between items-center h-full shadow-md'>
            <Link to='/'>
                <img src='/logo.svg' width={100} height={100} />
            </Link>
            <Link to={`/dashboard`}>
                <Button>Get Started</Button>
            </Link>
        </div>
    )
}
