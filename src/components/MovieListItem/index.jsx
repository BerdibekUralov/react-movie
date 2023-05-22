import React from 'react'

export const MovieListItem = ({name, viewers, favourite, like}) => {
  return (
    <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
    <span className='list-group-item-label' data-toggle='like'>
      {name}
    </span>
    <input type='number' className='list-group-item-input' defaultValue={viewers} />
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
