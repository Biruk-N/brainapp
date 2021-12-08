import './App.css';
import React, { Component } from 'react';
import Navigation from './Component/Navigation/Navigation';
import FaceRecognition from './Component/FaceRecognition/FaceRecognition';
import Logo from './Component/Logo/Logo';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import Rank from './Component/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '03cee12239894aeea846f306b3c9947c'
 });
 
const ParticlesOptions = {
            		particles: {
            		number:{
            			value: 100,
            			density: {
            				enable:true,
            				value_area:900
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

// loadUser = (data) => {
//   this.setState({user: {
//     id: data.id,
//     name: data.name,
//     email: data.email,
//     entries: data.entries,
//     joined: data.joined
//   }})
// }

// calculateFaceLocation = (data) => {
//   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
//   const image = document.getElementById('inputimage');
//   const width = Number(image.width);
//   const height = Number(image.height);
//   return {
//     leftCol: clarifaiFace.left_col * width,
//     topRow: clarifaiFace.top_row * height,
//     rightCol: width - (clarifaiFace.right_col * width),
//     bottomRow: height - (clarifaiFace.bottom_row * height)
//   }
// }

// displayFaceBox = (box) => {
//   this.setState({box: box});
// }


onInputChange =(event)=>{
  console.log(event.target.value);
}
// onButtonSubmit = () =>{
//   console.log('click');
 
// }


onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input});
  
   // so you would change from:
  // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
  // to:
  // .predict('53e1df302c079b3db8a0a36033ed2d15', this.state.input)
  app.models
    .predict(
    '53e1df302c079b3db8a0a36033ed2d15',
   " https://thumbs.dreamstime.com/z/beautiful-face-young-woman-health-fresh-skin-perfect-eyes-beautiful-face-young-woman-health-fresh-skin-157476477.jpg"
    )
    .then(response => {
      console.log('hi', response)
      if (response) {
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count}))
          })

      }
      this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err));
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
        <FaceRecognition />
      
         </div>
   );
 };
}

export default App;
