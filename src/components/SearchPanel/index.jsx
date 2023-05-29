import React from 'react'

export const SearchPanel = props => {
	const [term, setTerm] = React.useState('')

	const updateTermHandler = e => {
		const term = e.target.value.toLowerCase()
		setTerm(term)
		props.updateTermHandler(term)
	}

	return (
		<input
			type='text'
			className='form-control search-input'
			placeholder='Kinolarni qidirish'
			onChange={updateTermHandler}
			value={term}
		/>
	)
}
