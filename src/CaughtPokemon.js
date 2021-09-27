import { useState } from "react";

const pokemonArr = ['Pikachu', 'Charmander', 'Bulbassaur']

const CaughtPokemon = (props) => {

  const [ caught, setCaught ] = useState([])
  const [ pokemonNameInput, setPokemonNameInput ] = useState("")

  const catchPokemon = () => {
    if (pokemonNameInput) {
    //let randomPokemon = Math.floor(Math.random() * pokemonArr.length)
    setCaught(caught.concat(pokemonNameInput))
    setPokemonNameInput("")
    }
  }

  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value)
  }

  return (
    <>
    <p>Caught {caught.length} Pokemon on {props.date}</p>
    <input
      type="text" 
      value={pokemonNameInput}
      onChange={handleInputChange} />
    <button onClick={catchPokemon}>catch a pokemon!</button>
    <ul>
      {caught.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </>
)}


export default CaughtPokemon;