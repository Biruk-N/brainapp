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
 

  stub.PostModelOutputs(
    {
        // This is the model ID of a publicly available General model. You may use any other public or custom model ID.
        model_id: "f76196b43bbd45c99b4f3cd8e8b40a8a",
        inputs: [{data: {image: {url: "https://samples.clarifai.com/dog2.jpeg"}}}]
    },
    metadata,
    (err, response) => {
        if (err) {
            console.log("Error: " + err);
            return;
        }

        if (response.status.code !== 10000) {
            console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
            return;
        }

        console.log("Predicted concepts, with confidence values:")
        for (const c of response.outputs[0].data.concepts) {
            console.log(c.name + ": " + c.value);
        }
    }
);
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