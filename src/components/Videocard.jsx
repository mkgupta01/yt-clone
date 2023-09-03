import React from 'react'
// import thumbnail from '../assets/demo-thumbnail.png'
// import logo from '../assets/user.jpg'

const Videocard = ( props ) => {
    return (
        <div className='box-border border-base-red  h-64 w-80 my-4 dark:text-light-white'>
            <img className='rounded-2xl mb-2' src={ props.thumbnail } alt="thumbnail" />
            <div id='about-video' className='flex items-center'>
                <img
                    id='channelProfile'
                    className='h-8 w-8 rounded-3xl mr-2 relative bottom-2'
                    src={ props.thumbnail } alt="profile" />
                <div>
                    <p id='title' className='m-1 capitalize text-sm font-semibold tracking-wide'>{ props.title }</p>
                    {/* <p id='desc' className='capitalize text-sm'>{ props.desc }</p> */}
                </div>
            </div>
        </div>
    )
}

export default Videocard