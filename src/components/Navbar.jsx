import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between m-1.5 items-center'>
        <div className='flex flex-row'>
            <div>logo</div>
            <div>Home</div>
            <div>Catalouge</div>
            <div>Contact</div>
        </div>
        <div className='flex flex-row'>
            <div>search</div>
            <div>contact png</div>
            <div>add to cart</div>
        </div>
    </div>
  )
}
