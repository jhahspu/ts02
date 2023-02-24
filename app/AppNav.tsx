import Link from 'next/link'
import React from 'react'

export default function AppNav() {
  return (
    <nav className='container'>
      <ul>
        <li><Link href="/"><strong>TD</strong></Link></li>
      </ul>
      <ul>
        <li><Link href="/todos">Todos</Link></li>
        {/* <li><a href="#">Link</a></li>
        <li><a href="#" role="button">Button</a></li> */}
      </ul>
    </nav>
  )
}
