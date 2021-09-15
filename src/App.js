import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';


const App = () => {
  const logWhenClicked = () => {
  console.log('Hasta la vista baby');
   }
  return (
  <div>
    <Logo appName='Pokedex' handleClick={logWhenClicked} />
    <BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away']} />
    <CaughtPokemon date={new Date().toLocaleDateString()} />
  </div>
)}


export default App;
