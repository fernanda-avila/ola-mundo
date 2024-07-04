import styles from './banner.module.css'
import minhaFoto from 'assets-src/Collaborate (1).png'

export default function Banner() {
    return ( 
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Mundo!</h1>
                <p className={styles.paragrafo}>Bem-vindo ao seu portal de Tecnologia da Informação! Sou Fernanda, estudante de Front-End e UX, e criei este espaço para compartilhar artigos sobre as tendências mais recentes, dicas e tutoriais práticos do mundo da TI.</p>

            </div>
            <div className={styles.imagens}>

                <img className={styles.minhaFoto}
                src= {minhaFoto} alt="foto decorativa"
                />
            </div>
            </div>
            

    )
}