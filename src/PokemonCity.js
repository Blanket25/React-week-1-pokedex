import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  const updateCity = (event) => {
    setCity(event.target.value)
  }

  return (
    <div>
      <p>Welcome to the city of {city}</p>
      <input type="text" 
      value={city}
      onChange={updateCity} 
      />
    </div>
  );
}

export default PokemonCity;