import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState();
  const [linea2, setLinea2] = useState();
  const [imagen, setImagen] = useState('fire');

  const handleChange = (event) => {
      if (event.target.placeholder === 'Linea 1'){
        setLinea1(event.target.value);
      } else {
        setLinea2(event.target.value);
      }
  };

  const onClickExport = function (evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  const onChangeImage = (event) => {
    console.log(event.target.value)
    setImagen(event.target.value);
  }

  return (
    <div className="App">

      <select onChange={onChangeImage}>

        <option value="fire"> Casa en llamas </option>
        <option value="futurama"> Futurama </option>
        <option value="history"> History Channel </option>
        <option value="matrix"> Matrix </option>
        <option value="philosoraptor"> Philosoraptor </option>
        <option value="smart"> Smart Guy </option>

      </select><br />
    
      <input type="text" onChange={handleChange} placeholder='Linea 1' /> <br />
      <input type="text" onChange={handleChange} placeholder='Linea 2' /> <br />

      <button  onClick={onClickExport}>Exportar</button>

      <div className='meme' id="meme">
        <span>{linea1}</span><br />
        <span>{linea2}</span><br />
        <img width={500} height={500} src={require("./img/" + imagen +".jpg")} />
      </div>

    </div>
  );
}
export default App;
