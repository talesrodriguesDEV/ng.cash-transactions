import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Seja bem-vinda(o) à NG.CASH!</h1>
      <Link to={'/signin'}>Criar conta</Link>
      <h1>Já tem uma conta?</h1>
      <Link to={'/login'}>Fazer login</Link>
    </div>
  )
}
