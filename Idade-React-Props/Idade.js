import styles from './Idade.module.css'


function Idade(props) {

    return (
        <div>
            <h1>Olá {props.name}!</h1>;
            <h1>Sua idade é {props.idade}</h1>
        </div>

    )
}
export default Idade