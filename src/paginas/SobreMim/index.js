import styles from "./SobreMim.module.css"
import PostModelo from "components/PostModelo";
import fotoCapa from "assets-src/sobre_mim_capa.png"
import fotoSobreMim from "assets-src/foto-sobre-mim.jpg"


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
         >
        <h3 className={styles.subtitulo}>Olá, eu sou a Fernanda!</h3>
        <img src={fotoSobreMim} alt='Foto da Fernanda Avila' className={styles.fotoSobreMim} />


<p className={styles.paragrafo} >Sou Fernanda, tenho 26 anos e moro no Rio Grande do Sul. Sou estudante de UX e Front-End, sempre em busca de novas descobertas no mundo da tecnologia. Faço cursos pelo Google, Cubos Academy e pelo programa ONE, onde estou fazendo um curso de React que está me ajudando a desenvolver este projeto. Já fiz diversos cursos excelentes por lá, cada um contribuindo para o meu crescimento profissional e técnico.</p>

<p className={styles.paragrafo}>Adoro gatos e eles são meus companheiros fiéis durante minhas horas de estudo. A presença deles torna meu ambiente de estudo mais agradável e menos estressante. Entre uma pausa e outra, sempre encontro um tempo para brincar com eles e relaxar um pouco.</p>

<p className={styles.paragrafo}>Outra paixão que tenho é tudo relacionado ao espaço. Fico fascinada com as estrelas, planetas e o vasto universo. O cosmos é vasto e misterioso, assim como o mundo da tecnologia, e talvez os dois me fascinem da mesma forma. Ambos me inspiram a explorar, a questionar e a descobrir coisas novas, sempre com uma sensação de maravilhamento e curiosidade.</p>

<p className={styles.paragrafo}>Espero poder ajudar as pessoas com suas dúvidas através dessa página. Sei que o mundo tecnológico pode parecer assustador às vezes, mas acredito que sempre vale a pena explorar novos caminhos e aprender mais. Compartilhar o que aprendo e ver outras pessoas se beneficiando dessas informações é algo que me deixa muito feliz.</p>
        </PostModelo>
    )
}