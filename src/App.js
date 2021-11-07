import './App.css';
import React, { Component } from 'react';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import Rank from './Component/Rank/Rank';
import Particles from 'react-particles-js';

const ParticlesOptions = {
            		particles: {
            		number:{
            			value: 100,
            			density: {
            				enable:true,
            				value_area:800
            			}
            		}
            		}
            	}

class App extends Component {
constructor(){
  super();
  this.state={
    input:'',
  }
}
onInputChange =(event)=>{
  console.log(event.target.value);
}
onButtonSubmit = () =>{
  console.log('click');
 

}


 render(){ 
 	return (
     <div className="App">
                 <Particles className='particles'
               params={ParticlesOptions}
             />
       <Navigation />
       <Logo />
       <Rank />
       <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>
         {/*       <FaceRecognition />
       */}
         </div>
   );
 };
}

export default App;
