import meme from "./meme.png"
import Image from "./Image"
import Title from "./Title"
import Text from "./Text" 
import Link from "./Link"

function Apresentacao() {
  return (
    <section className="apresentacao">
      <Image srclink={meme} alt="Meme tentando lembrar quem sou"/>

      <div className="apresentacao-texto">
        <Title>Prazer, Mariana</Title>
        <Text>Aluna da <Link href="https://reprograma.com.br/">Reprograma</Link>, tentando a transição de carreira, aprendendo desenvolvimento front-end.</Text>
      </div>
    </section>
  )
}

export default Apresentacao