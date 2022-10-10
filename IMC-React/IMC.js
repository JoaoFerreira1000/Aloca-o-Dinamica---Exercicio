import { useState } from 'react'
import styles from './IMC.module.css'
function IMC() {

    const [nome, setNome] = useState("")
    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    let [resultado, setResultado] = useState("")
    let [valorIMC, setValorIMC] = useState("")

    function CalcularIMC() {

        setResultado((peso / (altura * altura)).toFixed(2));

        if (resultado < 18.5) {
            setValorIMC('Magreza');

        } else if (resultado >= 18.5 && resultado < 25) {
            setValorIMC('Normal');

        } else if (resultado >= 25 && resultado < 30) {
            setValorIMC('Sobrepeso');

        } else if (resultado >= 30 && resultado < 40) {
            setValorIMC('Obesidade Grau I');

        } else if (resultado >= 40) {
            setValorIMC('Obesidade Grau II');

        } else
            setValorIMC('Nulo');

    }




    return (
        <main>
            <div className={styles.container}>
                <div className={styles.title}>Calculadora - IMC</div>

                <div className={styles.input}>
                    <label>Nome:</label>
                    <input
                        type='text'
                        placeholder='Digite seu nome..'
                        value={nome}
                        onChange={(eNome) => setNome(eNome.target.value)}
                    />
                </div>

                <div className={styles.input}>
                    <label>Peso:</label>
                    <input
                        type='number'
                        placeholder='Digite seu peso..'
                        value={peso}
                        onChange={(ePeso) => setPeso(ePeso.target.value)}
                    />
                </div>

                <div className={styles.input}>
                    <label>Altura:</label>
                    <input
                        type='number'
                        placeholder='Digite sua altura..'
                        value={altura}
                        onChange={(eAltura) => setAltura(eAltura.target.value)}
                    />
                </div>
                <buctton className={styles.button} onClick={() => CalcularIMC()}>Calcular</buctton>
                <div className={styles.result}><p>{!resultado ? "" : `Oi ${nome} seu IMC é de ${resultado} e você está com ${valorIMC}`}</p></div>
            </div>
        </main>
    )
}
export default IMC