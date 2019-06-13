import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.css';
import Cards from './components/cards/Cards';
import Navbar from './components/navabar/Navbar';
import Wrapper from './components/wrapper/Wrapper';
import characters from './characters';

class App extends Component {

  state = {
    characters: characters.map(character => ({...character})),
    cardGuess: "",
    currentScore: 0,
    highScore: 0, 
  };

  handleClick = id => {
    const chosenCharacter = this.state.characters.find(name => name.id === id);

    if (chosenCharacter.clicked === false) {
      chosenCharacter.clicked = true;
      const shuffleCharacters = this.state.characters.sort((a, b) => 0.5- Math.random());
      this.setState({character:shuffleCharacters})
      this.handleIncrement();
    }
    else {

      if (this.state.currentScore === 12) {
        alert("YOU WON!!");
        this.setState({
          highScore: this.state.currentScore,
          currentScore: 0,
          characters: characters.map(character => ({...character}))
        });
      }

      else if (this.state.currentScore > this.state.highScore) {
        alert("YOU LOSE!")
        this.setState({
          highScore: this.state.currentScore,
          currentScore: 0,
          characters: characters.map(character => ({...character}))
        });
      }

      else {
        alert("YOU LOSE YOU WIN NOTHING")
        this.setState({
          currentScore: 0,
          characters: characters.map(character => ({...character}))
        });
      }
    }
  }

handleIncrement = () => {
  this.setState({currentScore: this.state.currentScore + 1 });
  
}

render(){
  const { handleClick } = this
  const { highScore,currentScore,cardGuess }= this.state
  let cardCharacters = this.state.characters.map((character,index) => {
    return (<Cards key={index} id={character.id} name={character.name} image={character.image} handleClick={this.handleClick}/>)
  });
  return(
   <div>
     <Navbar
     highScore={highScore}
     currentScore={currentScore}
     cardGuess={cardGuess}
     />
      <Wrapper>
        {cardCharacters}
        {handleClick}
      </Wrapper>       
   </div>
  )
}

}
export default App;
