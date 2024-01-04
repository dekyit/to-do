import { useState } from "react";
import "./styles.css";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

  //input box with an add button
  //manage input with useState
  //when clicked, display below in ordered list format
  //remove button to delete list items <button onClick{() => remove(id)}>
  //

export default function App() {
 
  const [inputValue, setInputValue] = useState('')
  const [cities, setCities] = useState([])


  function handleChange(event){
    setInputValue(event.target.value);
  }

  function Added (){
      setCities([...cities, inputValue]) //wtf this was so confusing. originally, i did setCities(inputValue), so when you mapped over it down below, you set cities to a string value instead of an array. 
      //the line above shows setCities being used to create a new state of the cities array with a copy of the original list and the new input value 
      console.log ('added')
  }

  function Removed(index){
    const newList = [...cities] //create a new list
      newList.splice(index, 1) //get rid of the cities by index (first arg is the index of the item you want to remove, and the second arg is the number of elements u want to remove)
      setCities(newList) //NOW you can renew your list of cities using setCities and set it to your new list
  }

  
  return (
    <div className="App">
      <h1>Cities to visit!</h1>
        <input
        type= "text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Where next?"
        />

        <button 
        type='submit'
        onClick= {() => Added()}>
          Lets Go!
        </button>

        {/* display list here */}
        <ol>
          {cities.map((city, index) => (
          <li key= {index}>
            {city}
            <button
              onClick= {() => Removed(index)}>
              Remove
            </button>
          </li>
          ))}
        </ol>
        


    </div>
  );
}