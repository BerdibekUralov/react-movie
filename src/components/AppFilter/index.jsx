import React from 'react'

export const AppFilter = () => {
  const btnsArr = [
    { name: 'all', label: 'Barcha kinolar' },
    { name: 'popular', label: 'Mashhur kinolar' },
    { name: 'mostViewers', label: "Eng ko'p ko'rilgan kinolar" },
  ]
  return (
    <div className='btn-group'>
			{btnsArr.map(btn => (
				<button
					key={btn.name}
					className={`btn btn-outline-dark`}
					type='button'
				>
					{btn.label}
				</button>
			))}
		</div>
  )
}
