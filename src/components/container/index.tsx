import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className='p-8 space-y-4'>
        {children}
    </div>
  )
}
