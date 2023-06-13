import React from 'react'
import { Container } from '../../components/container'
import { Keypad } from '../../components/keypad'

export const Calculator = () => {
  return (
    <Container>
        <h1 className='text-center text-4xl font-bold'>Calculator</h1>
        <Keypad />
    </Container>
  )
}
