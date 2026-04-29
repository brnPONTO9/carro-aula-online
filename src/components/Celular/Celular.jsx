function Celular(props) {
return (
<>
<h2>{props.modelo}</h2>
<img src={props.image} alt={props.alternative} />
<p>Valor:{props.valor}</p>
<p>Marca:{props.marca}</p>
<p>Memória:{props.memoria}</p>
<p>Memória Ram:{props.memoriaram}</p>
<p>CPU:{props.cpu}</p>
<p>Bateria:{props.bateria}</p>
<p>Sistema Operacional:{props.sistemaoperacional}</p>
</>
);
}

export default Celular;