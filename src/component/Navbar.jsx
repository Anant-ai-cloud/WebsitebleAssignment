import React from 'react'

function navbar() {
    return (
        <div className='w-[1500px] p-3 text-sm'>
            <nav className='flex justify-between'>
                <h1 className='font-semibold text-xl'>Elementum</h1>
                <ul className='flex gap-9'>
                    <li>Home</li>
                    <li>Studio</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>FAQs</li>
                </ul>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className='w-4 h-4'>
                        <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                    </svg>
                   

                </div>

            </nav>

        </div>
    )
}

export default navbar
