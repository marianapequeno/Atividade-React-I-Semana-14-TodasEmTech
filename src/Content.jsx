import './global.css'
import Title from "./Title"
import Text from "./Text"
import Imagem from "./Imagem"
import fotogit from "./fotogit.png"
import maonamassa from "./maonamassa.png"
import fotoapi from "./fotoapi.png"
import reactjs from "./reactjs.png"
import meme from "./meme.png"
import Link from "./Link"

function Content() {
  return (
    <main>
      <section className="apresentacao" style={{marginTop: 60, marginBottom: 60, marginRight: "auto", marginLeft: "auto", maxWidth: 900, display: "flex", alignItems: "center",gap: 30}}>
        <img src={meme} alt="Meme tentando lembrar quem sou" style={{maxWidth: 200}}/>
        <div>
          <Title>Prazer, Mariana</Title>
          <Text>Aluna da <Link href="https://reprograma.com.br/" cor="#7e459b">Reprograma</Link>, tentando a transição de carreira, aprendendo desenvolvimento front-end.</Text>
        </div>
      </section>

      <section>
        <Title textTransform="Uppercase" textAlign="center" marginBottom="50px" >Meus Aprendizados na <Link href="https://reprograma.com.br/" cor="#7e459b">Reprograma</Link></Title>
      </section>

      <section className="container-cards" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", gap: 20, maxWidth: 1000, margin: "auto" }}>

        <section className="card" style={{maxWidth: 400}}>
          <Title textTransform="Uppercase" >Git</Title>
          <Text>No começo aprender Git foi um desafio porque é um outro jeito de usar as funcionalidades do sistema já que estamos acostumados a interface UI, são muitos comandos possíveis para executar uma tarefa o que causa confusão, e também sentimos receio de apagar algum arquivo importante mas a reprograma ensina de uma forma bem didática o que facilitou muito o processo de aprendizado.</Text>
          <Imagem link={fotogit} alt="Logo Git" />
        </section>

        <section className="card" style={{maxWidth: 400}}>
          <Title textTransform="Uppercase">Mão na massa</Title>
          <Text>Um grande aprendizado na reprograma com certeza foi "coloque a mão na massa", quando decidimos começar a aprender desenvolvimento colocamos muito mais foco na teoria do que na prática, talvez por acreditar que não estamos prontos para criar projetos mesmo os menores. A teoria é importante mas a verdade é que a maioria das pessoas aprendem melhor quando praticam.</Text>
          <Imagem link={maonamassa} alt="Mulher programando" />
        </section>

        <section className="card" style={{maxWidth: 400}}>
          <Title textTransform="Uppercase">Consumir APIs</Title>
          <Text>Imaginei que chegar nessa fase seria algo muito mais distante e ao perceber que estava conseguindo retornar, manipular dados e consumindos APIs foi quando realmente senti que estava aprendendo JavaScript e pronta para dar um passo maior criando um projeto.</Text>
          <Imagem link={fotoapi} alt="Processo API" />
        </section>

        <section className="card" style={{maxWidth: 400}}>
          <Title textTransform="Uppercase">React JS</Title>
          <Text>Este é um aprendizado recente porém o mais desafiador (ou porque talvez o conteúdo que estamos aprendendo no momento sempre seja o mais difícil rs), é como aprender HTML, CSS e JavaScript novamente devido a sintaxe do React, mas depois de alguns dias (e muito desespero rs) as coisas estão fluindo.</Text>
          <Imagem link={reactjs} alt="reactjs" />
        </section>
      </section>

      <section className="outros-aprendizados" style={{marginTop: 60, marginRight: "auto", marginLeft: "auto", maxWidth: 1000}}>
        <Text>E outras dezenas de aprendizados! A reprograma não ensina somente habilidades técnicas, é uma experiência de aprendizado constante em cada aula, cada interação com as outras alunas, mentoras, professoras e facilitadoras.</Text>
      </section>
    </main>
  )
}

export default Content
