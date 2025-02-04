import React from 'react'

export const GifItem = ({title, url}) => {
  return (
    <div className='card'>
        <h4 className='card p'>{title}</h4>
        <img className='card img ' src={url} alt={url} />
        <br />

    </div>
  )
}
