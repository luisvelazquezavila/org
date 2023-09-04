import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/formulario/Formulario.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://media.licdn.com/dms/image/D4D03AQEQ5DGPEu63pQ/profile-displayphoto-shrink_800_800/0/1666749321927?e=1698883200&v=beta&t=oyzAamo7Q_ylvf3KTn3VKd4EARlcFbij3Qw2JDAPop8",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: true
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: true
    }
  ]);

  const [ equipos, actualizarEquipos ] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorBorde: "#57C278",
      colorFondo: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorBorde: "#82CFFA",
      colorFondo: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorBorde: "#A6D157",
      colorFondo: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorBorde: "#E06B69",
      colorFondo: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorBorde: "#DB6EBF",
      colorFondo: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorBorde: "#FFBA05",
      colorFondo: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorBorde: "#FF8A29",
      colorFondo: "#FFEEDF"
    }
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador', colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorBorde = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = nuevoEquipo => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
  }

  const like = id => {
    const colaboradoresActualizados = colaboradores.map(colaborador => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario equipos={equipos.map(equipo => equipo.titulo)}
        registrarColaborador = {registrarColaborador}
        crearEquipo = {crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map(equipo => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />)
      }

      <Footer />

    </div>
  );
}

export default App;
