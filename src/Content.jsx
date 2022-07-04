import './global.css'
import Apresentacao from './Apresentacao'
import Title from "./Title"
import Text from "./Text"
import Image from "./Image"
import fotogit from "./fotogit.png"
import maonamassa from "./maonamassa.png"
import fotoapi from "./fotoapi.png"
import reactjs from "./reactjs.png"
import Link from "./Link"

function Content() {
  return (
    <main className="main-content">
      <Apresentacao />

      <section className="main-title">
        <Title>Meus Aprendizados na <Link href="https://reprograma.com.br/">Reprograma</Link></Title>
      </section>

      <section className="container-cards">
        <section className="card">
          <Title>Git</Title>
          <Text>No começo aprender Git foi um desafio porque é um outro jeito de usar as funcionalidades do sistema já que estamos acostumados a interface UI, são muitos comandos possíveis para executar uma tarefa o que causa confusão, e também sentimos receio de apagar algum arquivo importante mas a reprograma ensina de uma forma bem didática o que facilitou muito o processo de aprendizado.</Text>
          <Image srclink={fotogit} alt="Logo Git" />
        </section>

        <section className="card">
          <Title>Mão na massa</Title>
          <Text>Um grande aprendizado na reprograma com certeza foi "coloque a mão na massa", quando decidimos começar a aprender desenvolvimento colocamos muito mais foco na teoria do que na prática, talvez por acreditar que não estamos prontos para criar projetos mesmo os menores. A teoria é importante mas a verdade é que a maioria das pessoas aprendem melhor quando praticam.</Text>
          <Image srclink={maonamassa} alt="Mulher programando" />
        </section>

        <section className="card">
          <Title>Consumir APIs</Title>
          <Text>Imaginei que chegar nessa fase seria algo muito mais distante e ao perceber que estava conseguindo retornar, manipular dados e consumindos APIs foi quando realmente senti que estava aprendendo JavaScript e pronta para dar um passo maior criando um projeto.</Text>
          <Image srclink={fotoapi} alt="Processo API" />
        </section>

        <section className="card">
          <Title>React JS</Title>
          <Text>Este é um aprendizado recente porém o mais desafiador (ou porque talvez o conteúdo que estamos aprendendo no momento sempre seja o mais difícil rs), é como aprender HTML, CSS e JavaScript novamente devido a sintaxe do React, mas depois de alguns dias (e muito desespero rs) as coisas estão fluindo.</Text>
          <Image srclink={reactjs} alt="Logo React JS" />
        </section>
      </section>

      <section className="outros-aprendizados">
          <Text>E outras dezenas de aprendizados! A reprograma não ensina somente habilidades técnicas, é uma experiência de aprendizado constante em cada aula, cada interação com as outras alunas, mentoras e professoras.</Text>
      </section>
    </main>
  )
}

export default Content