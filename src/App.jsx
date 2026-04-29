import "./App.css";

import Carro from "./components/Carro/Carro.jsx";

import imagekwid from '../src/assets/imagekwid.png'

import imagecelta from '../src/assets/imagecelta.png'

import imageiphone from '../src/assets/imageiphone.png'


import Celular from "./components/Celular/Celular.jsx";

 

function App() {

  return (

    <>

      <Carro dia="Segunda" modelo="Celta" ano="2005" valor="15.000,00" image={imagecelta}/>

      <Carro dia="Terça" modelo="Ka" ano="2007" valor="19.000,00"/>

      <Carro dia="Quarta" modelo="Uno" ano="2008" valor="20.000,00"/>

      <Carro dia="Quinta" modelo="Kwid" ano="2009" valor="65.000,00" image={imagekwid} alternate="Foto Kwid"/>

      <Carro dia="Sexta" modelo="Fit" ano="2010" valor="35.000,00"/>

      <br />

      <br />

      <Celular modelo="IOS" valor=" 5.000,00" marca=" Apple" memoria=" 126gb" memoriaram=" 32gb" cpu=" Apple Silicon" bateria=" 100%" sistemaoperacional=" IOS"  image={imageiphone} alternative="Foto de um Iphone"/>
    </>

  );

}

export default App;