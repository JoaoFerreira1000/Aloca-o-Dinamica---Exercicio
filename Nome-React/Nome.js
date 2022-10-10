import styles from './Nome.module.css'
import { useState } from 'react'


function Nome() {
    const [nome, setNome] = useState("")
    function falar() {
        alert(`Oi ${nome}, tudo bem?`)
    }
    return (
        <main className={styles.container}>
            <div >
                <label>Nome: </label>
                <input type="text"
                    placeholder='Digite seu nome..'
                    value={nome}
                    onChange={(eNome) => setNome(eNome.target.value)} />
            </div>
            <div>
                <button className={styles.button} onClick={() => falar()}>Clique</button>
            </div>

        </main>

    )

}

export default Nome