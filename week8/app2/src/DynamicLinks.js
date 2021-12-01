import React from 'react'

function DynamicLinks(props) {

    // destructuring object
    const {id, link, href} = props
	// console.log(props)
	return <a id={id} link={link} href={href}>{link}</a>
}

export default DynamicLinks
