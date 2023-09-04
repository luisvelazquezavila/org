import './Equipo.css'
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    const {titulo, colorFondo, colorBorde, id} = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props; 

    return <>{colaboradores.length > 0 && 
        <section className="equipo" style={{backgroundColor: hexToRgba(colorBorde, 0.4)}}>
            <input 
                type='color'
                className='input-color'
                value={colorBorde}
                onChange={(e) => {
                    actualizarColor(e.target.value, id)
                }}
            />
            <h3 style={{borderColor: colorBorde}}>{titulo}</h3>
            <div className="colaboradores">           
                {
                    colaboradores.map((colaborador, index) => <Colaborador 
                        datos={colaborador}
                        key={index}
                        colorBorde={colorBorde}
                        eliminarColaborador={eliminarColaborador}  
                        like={like}                     
                    />)
                }
            </div>
        </section>
    }</>

}
export default Equipo