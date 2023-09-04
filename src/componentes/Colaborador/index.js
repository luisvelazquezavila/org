import './Colborador.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos;
    const { colorBorde, eliminarColaborador, like } = props;
    return <div className="colaborador">
        <AiFillCloseCircle className='eliminar' onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorBorde}}> 
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color='red' className='heart' onClick={() => like(id)} /> : <AiOutlineHeart className='heart' onClick={() => like(id)} />}            
        </div>
    </div>
}

export default Colaborador