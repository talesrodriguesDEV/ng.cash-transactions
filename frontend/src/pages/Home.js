import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center gap-16'>
        
        <h1 className='text-3xl'>Seja bem-vinda(o) à NG.CASH!</h1>
        <Link className='btn' to={'/signin'}>Criar conta</Link>
        <h2 className='text-2xl'>Já tem uma conta?</h2>
        <Link className='btn' to={'/login'}>Fazer login</Link>
      </div>
    </>
  )
}
