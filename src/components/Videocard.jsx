import React from 'react'
import thumbnail from '../assets/demo-thumbnail.png'
import logo from '../assets/user.jpg'

const Videocard = () => {
    return (
        <div className='box-border h-64 w-80 my-4 dark:text-light-white'>
            <img className='rounded-2xl mb-2' src={thumbnail} alt="thumbnail" />
            <div id='about-video' className='flex items-center'>
                <img
                    id='channelProfile'
                    className='h-8 w-8 rounded-3xl mr-2 relative bottom-2'
                    src={logo} alt="profile" />
                <div>
                    <p id='title' className='m-1 capitalize text-xl font-semibold tracking-wide'>javascript mastery</p>
                    <p id='desc' className='capitalize text-sm'>Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI</p>
                </div>
            </div>
        </div>
    )
}

export default Videocard