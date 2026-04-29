//1º - Parte - Import
//2º - Parte - Função ou Componente
//1º - Parte - Export
import './Carro.css'


function Carro(props) {
return (
<>
<h2>Promoção de Carros dessa semana - Dia: {props.dia}</h2>
<p>O veículo que está na promoção essa semana é : {props.modelo}</p>
<p>O ano de fabricação do carro é {props.ano}</p>
<p>O preço do carro é R$ {props.valor}</p>
<img src={props.image} alt={props.alternate} />
</>
);
}
export default Carro