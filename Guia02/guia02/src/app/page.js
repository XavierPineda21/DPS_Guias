"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Image from "next/image";


const element = (
  <>
  <h1>Hola, Mundo!</h1>
  <h2>Son las {new Date().toTimeString()}</h2>
  </>
);

const Equipos = ({ equipos }) => { return (
<div className={styles.container__list}>
<h2 className={styles.title}>Equipos de Fútbol</h2>
{equipos.map((equipo) => (
<div key={equipo.id}>
<h3 className={styles.nameclub}>{equipo.nombre}</h3>
<ul>
{equipo.plantilla.map((jugador) => (
<li className={styles.container__list} key={jugador.id}>
<Image
      src={jugador.imagen}
      alt={jugador.nombre}
      width={100}
      height={100}
    />
    <strong>{jugador.nombre}</strong>
    <p>Altura: {jugador.Altura}m <br/> Peso: {jugador.Peso}</p>
</li>
))}
</ul>
</div>
))}
</div>
);
};

export default function Home() {
  //Ejercicio 2
  // Simula la obtención de datos desde tu JSON 
const equiposData = [
{"id": 1,"nombre": "Real Madrid", "plantilla":[
{"id": 1,"nombre":"Eden Hazard","Altura":"1.75","Peso":"74Kg", "Image": "/Hazard.jpg"},
{"id": 2,"nombre":"Gonzalo García","Altura":"1.82","Peso":"74Kg"},
{"id": 3,"nombre":"Karim Benzema","Altura":"1.85","Peso":"81Kg"}
]},
{"id": 2, "nombre": "Barcelona", "plantilla":[
{"id": 1,"nombre":"Marc-André ter Stegen ","Altura":"1.75","Peso":"74Kg"},
{"id": 2,"nombre":"Iñigo Martinez","Altura":"1.82","Peso":"74Kg"},
{"id": 3,"nombre":"Gavi","Altura":"1.85","Peso":"81Kg"}
]}
// ... agregar otros equipos
];

//Ejercicio 3
const[numero1,setNumero1]=useState(''); 
const[numero2,setNumero2]=useState(''); 
const [resultado, setResultado] = useState(null);



const sumar = () => {
const resultadoSuma = parseFloat(numero1) + parseFloat(numero2); setResultado(`Resultado de la suma:
${resultadoSuma}`);
};

const restar = () => {
const resultadoResta = parseFloat(numero1) - parseFloat(numero2); setResultado(`Resultado de la resta:
${resultadoResta}`);
};

//Ejercicio 4
const [numero, setNumero] = useState(1); 
const [limite, setLimite] = useState(10); 
const [resultado4, setResultado4] = useState([]);
const generarTabla = () => { const nuevaTabla = []; for (let i = 1; i <= limite; i++) {
nuevaTabla.push(`${numero} x ${i} = ${numero * i}`);
}
setResultado4(nuevaTabla);

};

  return(
    <main className={styles.main}>

      <div className = "App">
        {element}
      </div>



      <h1>Mi Aplicación de Fútbol</h1>
      <Equipos equipos={equiposData} />



      <div className={styles.calculadora}>
      <div className={styles.numeros}>
      <label className={styles.text}>Número 1:</label> <input className={styles.inputnum} type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
      </div>
      <div className={styles.numeros}>
      <label className={styles.text} >Número 2:</label> <input
      className={styles.inputnum} type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
      </div>
      <div>
      <button className={styles.button} onClick={sumar}>Sumar</button>
      <button className={styles.button} onClick={restar}>Restar</button>
      </div>
      {resultado && <div
      className={styles.resultado}>{resultado}</div>}
      </div>


      <div>
<h2 className={styles.title2}>Tabla de Multiplicar</h2> <label className={styles.text}> Ingrese un número:
<input className={styles.input} type="number" value={numero} onChange={(e) => setNumero(parseInt(e.target.value))}/>
</label>
<br />
<label className={styles.text}>
Límite de números a mostrar: <input
className={styles.input} type="number" value={limite}
onChange={(e) => setLimite(parseInt(e.target.value))} />
</label>
<br />
<button className={styles.button} onClick={generarTabla}>Generar
Tabla</button>
<hr />
<h3>Resultado</h3>
<ul className={styles.ul}>
{resultado4.map((item, index) => (
<li className={styles.li} key={index}>{item}</li>
))}
</ul>
</div>


    </main>
  );
}
