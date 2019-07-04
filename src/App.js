import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.css';
import Cards from './components/cards/Cards';
import Navbar from './components/navabar/Navbar';
import Wrapper from './components/wrapper/Wrapper';
import characters from './characters';
import Sound from 'react-sound';
import MyMp3 from './components/mp3/LargeFireball-SoundBible.com-301502490.mp3';
import YouTube from 'react-youtube';



const soundArray = [
  MyMp3, 
  MyMp3,
  MyMp3, 
  MyMp3,
  MyMp3, 
  MyMp3,
  MyMp3, 
  MyMp3,
  MyMp3, 
  MyMp3,
  MyMp3,
  MyMp3
 

]

class App extends Component {

  state = {
    characters: characters.map(character => ({...character})),
    name: true,
    cardGuess: "",
    currentScore: 0,
    highScore: 0, 
    sound: null,
    status: Sound.status.PLAYING,
    modal: false,
    modal2: false,
    modal3: false
  };

  handleClick = id => {
    const chosenCharacter = this.state.characters.find(name => name.id === id);

    if (chosenCharacter.clicked === false) {
      chosenCharacter.clicked = true;
      // console.log(characters[id].sound)
      this.setState({
        sound: <Sound
        url={soundArray[characters[id].sound]}
        playStatus={Sound.status.PLAYING}
        playFromPosition={100 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
      })
      setTimeout (()=> {
        const shuffleCharacters = this.state.characters.sort((a, b) => 0.5- Math.random());
        this.setState({character:shuffleCharacters})
        this.handleIncrement();
      }, .50000)
    }
    else {

      if (this.state.currentScore === 12) {
        alert("YOU WON!!");
        this.setState({
          highScore: this.state.currentScore,
          currentScore: 0,
          characters: characters.map(character => ({...character})),
          modal3:true
        });
      }

      else if (this.state.currentScore > this.state.highScore) {
        console.log("modal");
        alert("You almost got it! Here is some inspiration!")
        this.setState({
          highScore: this.state.currentScore,
          currentScore: 0,
          characters: characters.map(character => ({...character})),
          modal:true
        });
      }

      else {
      
      
        alert("Almost, lets check out the moon then Try it Again!")
        this.setState({
          currentScore: 0,
          characters: characters.map(character => ({...character})),
          modal2:true
        });
      }
    }
  }

handleIncrement = () => {
  this.setState({currentScore: this.state.currentScore + 1 });
  
}

closeModal = () => {
 this.setState({modal:false});
}

closeModal2 = () => {
  this.setState({modal2:false});
}

closeModal3 = () => {
  this.setState({modal3:false});
}

render(){
  const { handleClick } = this
  const { highScore,currentScore,cardGuess }= this.state
  let cardCharacters = this.state.characters.map((character,index) => {
    return (<Cards key={index} id={character.id}  name={character.name} image={character.image} handleClick={this.handleClick}/>)
    
  });

  const opts = {
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };

  let modal = 
    <div style={{margin: 'auto', width:'100%'}}>
        <YouTube
        videoId="mibxJwpennU"
        opts={opts}
        onReady={this._onReady}/>

          <p style={{color:'red'}}>Our Solar System</p>
          <button  type="button" class="btn btn-primary" onClick={this.closeModal}>Close Video</button>

     </div>


  
     
    
      let modal2 = 
        <div style={{margin: 'auto',width:'100%'}}>
            <YouTube
            videoId="w4U_cuF-_hI"
            opts={{
              height: '300',
              width: '100%',
              playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
              }
            }}
            onReady={this._onReady}/>
    
              <p style={{color:'red'}}>The Moon</p>
              <button  type="button" class="btn btn-primary" onClick={this.closeModal2}>Close Video</button>
    
         </div>

          let modal3 = 
          <div style={{margin: 'auto',width:'100%'}}>
              <YouTube
              videoId="V4_c4DUseLU"
              opts={{
                height: '300',
                width: '100%',
                playerVars: { // https://developers.google.com/youtube/player_parameters
                  autoplay: 1
                }
              }}
              onReady={this._onReady}/>
      
                <p style={{color:'red'}}>Mars the red planet</p>
                <button  type="button" class="btn btn-primary" onClick={this.closeModal3}>Close Video</button>
      
           </div>
    

  return(
   <div>
     {
       this.state.sound
       
     }
    
     <Navbar
     highScore={highScore}
     currentScore={currentScore}
     cardGuess={cardGuess}

     />
    
   {this.state.modal ? modal: null}
   {this.state.modal2 ? modal2: null}
   {this.state.modal3 ? modal3: null}
      <Wrapper>
     
        {cardCharacters}
        {handleClick}
     
      </Wrapper>       
   </div>

  )
}

}
export default App;
