import PropTypes from 'prop-types'
import React from 'react'

export const GifItem = ({title, url}) => {
  return (
    <div className='card'>
        <img className='card img ' src={url} alt={url} />
        <br />
        <h4 className='card p'>{title}</h4>

    </div>
  )
}

GifItem.propTypes={
title :PropTypes.string.isRequired,
url:PropTypes.string.isRequired


}