import React from 'react'
import { Button } from './components/ui/button'
import { Outlet } from 'react-router-dom'
import Header from './components/custom/Header'
import { Toaster } from "@/components/ui/sonner"
export default function App() {
  return (
    <>
      <Header />

      <Outlet />
      <Toaster />
    </>
  )
}
