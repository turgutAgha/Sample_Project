import React, {Component} from 'react'

class UsersGpa extends Component{

    render(){
        // destructuring object
        const {name, surname, major, gpa} = this.props
        // console.log(props)
        return (
            <div>
                <p><strong>{name} {surname}</strong></p>
                <p>{major} {gpa}</p>
            </div>
        )
    }
}

export default UsersGpa
