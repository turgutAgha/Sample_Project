import React, { useState, useReducer, useRef, useEffect } from "react";
import './App.css';

// useState Hook
// function App() {
//   const [ inputs, setInputs ] = useState({'name': '', 'surname': '', 'color': '', 'gender': ''});

  // const onInputChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs({...inputs, [name]: value})
  // }

  // const handleClick = () => {
  //   console.log('click')
  //   console.log(inputs);
  // }

//   return (
    // <div className="App">
    //   <form>
    //     <label>
    //       Name:
    //       <input type="text" name="name" onChange={onInputChange}/>
    //     </label>
    //     <br/><br/>
    //     <label>
    //       Surname:
    //       <input type="text" name="surname" onChange={onInputChange}/>
    //     </label>
    //     <br/><br/>
    //     <label>
    //       Favourite color:
    //       <select onChange={onInputChange} name="color" defaultValue="blue">
    //         <option value="blue">Blue</option>
    //         <option value="red">Red</option>
    //         <option value="green">Green</option>
    //         <option value="yellow">Yellow</option>
    //       </select>
    //     </label>
    //     <br/><br/>
    //     <div>
    //       <input type="radio" value="Male" name="gender" onChange={onInputChange}/> Male
    //       <input type="radio" value="Female" name="gender"  onChange={onInputChange} /> Female
    //       <input type="radio" value="Other" name="gender"  onChange={onInputChange}/> Other
    //     </div>
    //     <br/>
    //   </form>
    //   <button onClick={handleClick}>Click</button>
    // </div>
//   );
// }


// function App() {
//   const firstName = useRef();
//   const surname = useRef();
//   const color = useRef();
//   const gender = useRef();


//   const handleClick = (e) => {
//     e.preventDefault()
//     console.log(`${firstName.current.name}: ${firstName.current.value},
//     ${surname.current.name}: ${surname.current.value},
//     ${color.current.name}: ${color.current.value},
//     ${gender.current.name}: ${gender.current.value}`)
//   }

//   return (
//     <div className="App">
//       <form>
//         <label>
//           Name:
//           <input ref={firstName} type="text" name="name"/>
//         </label>
//         <br/><br/>
//         <label>
//           Surname:
//           <input ref={surname} type="text" name="surname"/>
//         </label>
//         <br/><br/>
//         <label>
//           Favourite color:
//           <select ref={color} name="color" defaultValue="blue">
//             <option value="blue">Blue</option>
//             <option value="red">Red</option>
//             <option value="green">Green</option>
//             <option value="yellow">Yellow</option>
//           </select>
//         </label>
//         <br/><br/>
//         <div>
//           <input ref={gender} type="radio" value="Male" name="gender" /> Male
//           <input ref={gender} type="radio" value="Female" name="gender" /> Female
//           <input ref={gender} type="radio" value="Other" name="gender" /> Other
//         </div>
//         <br/>
//       </form>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// }

function App() {
  const initialValues = {
    firstName: '',
    surname: '',
    color: '',
    gender: '',
  }

  const [inputs, setInputs] = useReducer(
    (curVals, newVals) => ({...curVals, ...newVals}), initialValues
  );

  const onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({...inputs, [name]: value})
  }

  const handleClick = () => {
    console.log('click')
    console.log(inputs);
  }

  return (
    <div className="App">
    <form>
      <label>
        Name:
        <input type="text" name="firstName" onChange={onInputChange}/>
      </label>
      <br/><br/>
      <label>
        Surname:
        <input type="text" name="surname" onChange={onInputChange}/>
      </label>
      <br/><br/>
      <label>
        Favourite color:
        <select onChange={onInputChange} name="color" defaultValue="blue">
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </label>
      <br/><br/>
      <div>
        <input type="radio" value="Male" name="gender" onChange={onInputChange}/> Male
        <input type="radio" value="Female" name="gender"  onChange={onInputChange} /> Female
        <input type="radio" value="Other" name="gender"  onChange={onInputChange}/> Other
      </div>
      <br/>
    </form>
    <button onClick={handleClick}>Click</button>
  </div>
  )
}

export default App;
