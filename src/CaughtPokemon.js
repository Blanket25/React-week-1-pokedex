import { useState } from "react";

const CaughtPokemon = (props) => {

  const [ caught, setCaught ] = useState([])
  const pokemonArr = ['Pikachu', 'Charmander', 'Bulbassaur']

  const catchPokemon = () => {
    let randomPokemon = Math.floor(Math.random() * pokemonArr.length)
    setCaught(caught.concat(pokemonArr[randomPokemon]))
  }

  return (
    <>
    <p>Caught {caught.length} Pokemon on {props.date}</p>
    <button onClick={catchPokemon}>catch a pokemon!</button>
    <ul>
      {caught.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    </>
)}


export default CaughtPokemon;