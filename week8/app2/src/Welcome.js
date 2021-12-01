import React, {Component} from 'react'


function Welcome(props) {

    // destructuring object
    const {name, age, position} = props
	// console.log(props)
	return <div>{name} {age} {position}</div>
}

export default Welcome