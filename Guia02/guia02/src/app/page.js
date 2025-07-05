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
const equiposData = [
{"id": 1,"nombre": "Real Madrid", "plantilla":[
{"id": 1,"nombre":"Eden Hazard","Altura":"1.75","Peso":"74Kg", "imagen": "/Hazard.jpg"},
{"id": 2,"nombre":"Gonzalo García","Altura":"1.82","Peso":"74Kg", "imagen": "/gonzalo.jpg"},
{"id": 3,"nombre":"Karim Benzema","Altura":"1.85","Peso":"81Kg", "imagen": "/benzema.jpeg"}
]},
{"id": 2, "nombre": "Barcelona", "plantilla":[
{"id": 1,"nombre":"Marc-André ter Stegen ","Altura":"1.75","Peso":"74Kg", "imagen": "/Marc.jpg"},
{"id": 2,"nombre":"Iñigo Martinez","Altura":"1.82","Peso":"74Kg", "imagen": "/iñigo.jpg"},
{"id": 3,"nombre":"Gavi","Altura":"1.85","Peso":"81Kg", "imagen": "/gavi.jpg"}
]},
{"id": 1,"nombre": "Boca Juniors", "plantilla":[
{"id": 1,"nombre":"Carlos Palacios","Altura":"1.80","Peso":"79Kg", "imagen": "/carlos.jpg"},

]}
];

//Ejercicio 3
const [numero1, setNumero1] = useState('');
const [numero2, setNumero2] = useState('');
const [resultado, setResultado] = useState(null);

// Funciones
const validarEntradas = () => {
  if (numero1 === '' || numero2 === '') {
    setResultado("Ingresa ambos números.");
    return false;
  }
  return true;
};

const sumar = () => {
  if (!validarEntradas()) return;
  setResultado("Resultado de la suma: " + (parseFloat(numero1) + parseFloat(numero2)));
};

const restar = () => {
  if (!validarEntradas()) return;
  setResultado("Resultado de la resta: " + (parseFloat(numero1) - parseFloat(numero2)));
};

const multiplicar = () => {
  if (!validarEntradas()) return;
  setResultado("Resultado de la multiplicación: " + (parseFloat(numero1) * parseFloat(numero2)));
};

const dividir = () => {
  if (!validarEntradas()) return;
  if (parseFloat(numero2) === 0) {
    setResultado("Error: No se puede dividir entre cero.");
    return;
  }
  setResultado("Resultado de la división: " + (parseFloat(numero1) / parseFloat(numero2)));
};

const potenciar = () => {
  if (!validarEntradas()) return;
  setResultado("Resultado de la potenciación: " + Math.pow(parseFloat(numero1), parseFloat(numero2)));
};

const raizCuadrada = () => {
  if (numero1 === '') {
    setResultado("Por favor, ingresa el número 1 para calcular la raíz.");
    return;
  }
  const num = parseFloat(numero1);
  if (num < 0) {
    setResultado("Error: No se puede calcular la raíz cuadrada de un número negativo.");
    return;
  }
  setResultado("Raíz cuadrada de " + num + " es: " + Math.sqrt(num).toFixed(4));
};

const limpiar = () => {
  setNumero1('');
  setNumero2('');
  setResultado(null);
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

//Contador
const [contador, setContador] = useState(0);

const incrementar = () => {
  setContador(contador + 1);
};

const decrementar = () => {
  if (contador > 0) {
      setContador(contador - 1);
  }
};

// Conversor Celsius/Fahrenheit
const [temperatura, setTemperatura] = useState('');
const [tipoConversion, setTipoConversion] = useState('CtoF');
const [resultadoTemp, setResultadoTemp] = useState('');

const convertirTemperatura = () => {
  if (temperatura === '') {
    setResultadoTemp('Por favor ingresa una temperatura.');
    return;
  }

  const tempNum = parseFloat(temperatura);
  let resultado = '';

  if (tipoConversion === 'CtoF') {
    resultado = tempNum + '°C = ' + (tempNum * 9 / 5 + 32).toFixed(2) + '°F';
  } else {
    resultado = tempNum + '°F = ' + ((tempNum - 32) * 5 / 9).toFixed(2) + '°C';
  }

  setResultadoTemp(resultado);
};

const [usuario, setUsuario] = useState('');
const [contrasena, setContrasena] = useState('');
const [mensaje, setMensaje] = useState('');

//Dats simulados
const usuarioCorrecto = 'Admin';
const contrasenaCorrecta = '1234';

const manejarLogin = (e) => {
  e.preventDefault();

  if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
      setMensaje('¡Bienvenido, ' + usuario + '!');
  } 
  else {
      setMensaje('Usuario o contraseña incorrectos.');
  }
};


//Return
  return(
    <main className={styles.main}>

      <div className = "App">
        {element}
      </div>

      <h1>Mi Aplicación de Fútbol</h1>
      <Equipos equipos={equiposData} />

      <div className={styles.calculadora}>
      <div className={styles.numeros}>
      <label className={styles.text}>Número 1:</label>
      <input
        className={styles.inputnum}
        type="number"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />
    </div>
    <div className={styles.numeros}>
      <label className={styles.text}>Número 2:</label>
      <input
        className={styles.inputnum}
        type="number"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />
    </div>

    <div className={styles.botones}>
      <button className={styles.button} onClick={sumar}>Sumar</button>
      <button className={styles.button} onClick={restar}>Restar</button>
      <button className={styles.button} onClick={multiplicar}>Multiplicar</button>
      <button className={styles.button} onClick={dividir}>Dividir</button>
      <button className={styles.button} onClick={potenciar}>Potencia</button>
      <button className={styles.button} onClick={raizCuadrada}>Raíz de N°1</button>
      <button className={styles.button} onClick={limpiar}>Limpiar</button>
    </div>

    {resultado && <div className={styles.resultado}>{resultado}</div>}
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


<div className={styles.contador}>
    <h2>Contador</h2>
    <p>Valor actual: {contador}</p>
    <button className={styles.button} onClick={incrementar} style={{ marginRight: '10px' }}>Incrementar</button>
    <button className={styles.button} onClick={decrementar} disabled={contador === 0}>Decrementar</button>
</div>


<div className={styles.calculadora}>
  <h2 className={styles.title2}>Conversor de Temperaturas</h2>

  <label className={styles.text}>
    Ingrese el valor de temperatura:
    <input
      type="number"
      className={styles.input}
      value={temperatura}
      onChange={(e) => setTemperatura(e.target.value)}
    />
  </label>

  <label className={styles.text}>
    Tipo de conversión:
    <select
      className={styles.input}
      value={tipoConversion}
      onChange={(e) => setTipoConversion(e.target.value)}
    >
      <option value="CtoF">Celsius a Fahrenheit</option>
      <option value="FtoC">Fahrenheit a Celsius</option>
    </select>
  </label>

  <button className={styles.button} onClick={convertirTemperatura}>
    Convertir
  </button>

  {resultadoTemp && <div className={styles.resultado}>{resultadoTemp}</div>}
</div>

<div style={{ maxWidth: '300px', margin: 'auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Login</h2>
      <form onSubmit={manejarLogin}>
        <div>
          <label>Usuario:</label><br />
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Contraseña:</label><br />
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        <button type="submit" style={{ marginTop: '15px' }}>Iniciar sesión</button>
      </form>

      {mensaje && (
        <p style={{ marginTop: '15px', fontWeight: 'bold' }}>{mensaje}</p>
      )}
    </div>
  </main>

  );
}
