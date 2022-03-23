import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from './GifGridItem'

export const GifGrid = ({ category }) => {
    const {data:images, loading} = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {loading&& <p>Loadings</p>}
            <div className='card-grid animate__animated animate__bounce animate__delay-2s'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>

        </>
    )
}
