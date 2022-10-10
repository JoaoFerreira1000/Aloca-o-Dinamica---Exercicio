import styles from './Nome.module.css'
import { useState } from 'react'


function Nome() {
    const [nome, setNome] = useState("")

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
                <p>{!nome ? "" : `Oi ${nome}, tudo bem? `}</p>
            </div>
        </main>

    )

}

export default Nome
