import React, { useContext } from 'react'
import Videocard from './Videocard'
import { Context } from '../assets/contextAPI'


const Feed = () => {
    const { feedData, selectedCategories } = useContext(Context)
    return (
        <>
            <h1 className='text-base-red z-10 absolute top-20 left-60 text-2xl font-bold capitalize'>{selectedCategories} <span className='text-dark-black dark:text-light-white'>Videos</span></h1>
            <div className='flex flex-wrap al justify-evenly absolute top-16 right-0 w-[85%] pt-12 dark:bg-dark-gray h-fit'>

                {feedData.map((e) => {
                    return (
                        <Videocard
                            key={ e.id.videoID }
                            thumbnail={e.snippet.thumbnails.medium.url}
                            // logo={e.}
                            title={e.snippet.title}
                            desc={e.snippet.description}
                        />
                    )
                })}

            </div>
        </>
    )
}

export default Feed