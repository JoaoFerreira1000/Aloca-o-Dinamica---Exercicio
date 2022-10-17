import { useState } from "react";
import styles from './Salario.module.css'


function Salario() {

    let [nome, setNome] = useState("");
    let [soldo, setSoldo] = useState("");
    let [percent, setPercent] = useState("");
    let [resultado, setResultado] = useState("");

    function CalcularSalario() {
        setResultado(soldo * (1 + percent / 100).toFixed(2));
    }

    return (
        <main >
            <div className={styles.container}>
                <div>Cálculo da Comissão</div>

                <div>
                    <label>Nome:</label>
                    <input
                        type='text'
                        placeholder='Digite seu nome..'
                        value={nome}
                        onChange={(eNome) => setNome(eNome.target.value)}
                    />
                </div>

                <div>
                    <label>Salário</label>
                    <input
                        type='number'
                        placeholder='Digite seu salário..'
                        value={soldo}
                        onChange={(eSoldo) => setSoldo(eSoldo.target.value)}
                    />
                </div>

                <div>
                    <label>Aumento:</label>
                    <input
                        type='number'
                        placeholder='Digite sua comissão..'
                        value={percent}
                        onChange={(ePercent) => setPercent(ePercent.target.value)}
                    />
                </div>
                <button className={styles.button} onClick={() => CalcularSalario()}>Calcular</button>
                <div className={styles.resposta}>
                    <p>{!resultado ? "" : `Oi ${nome} sua comissão é de R$ ${(soldo * percent / 100)} e seu salário é de R$ ${resultado.toFixed(2)}.`}</p>

                </div>
            </div>
        </main>


    )
}

export default Salario;