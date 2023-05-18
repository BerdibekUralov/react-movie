import React from 'react'

export const MovieListItem = () => {
  return (
    <li className={`list-group-item d-flex justify-content-between`}>
    <span o className='list-group-item-label' data-toggle='like'>
      Game of Throne
    </span>
    <input type='number' className='list-group-item-input' defaultValue='000' />
    <div className='d-flex justify-content-center align-items-center'>
      <button type='button' className='btn-cookie btn-sm' data-toggle='favourite'>
        <i className='fas fa-cookie'></i>
      </button>
      <button type='button' className='btn-trash btn-sm'>
        <i className='fas fa-trash'></i>
      </button>
      <i className='fas fa-star'></i>
    </div>
  </li>
  )
}
