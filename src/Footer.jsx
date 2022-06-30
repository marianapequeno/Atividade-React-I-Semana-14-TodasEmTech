import Link from "./Link"

const Footer = () => {
  return (
    <footer style={{backgroundColor: "#7e459b", padding: 15, marginTop: 50}}>
      <p style={{margin: 0, color: "#ffffff", textAlign:"center"}}>
        Desenvolvido com <Link href="https://pt-br.reactjs.org/" cor="#b7b7b7">React JS </Link> 
        por <Link href="https://github.com/marianapequeno" cor="#b7b7b7">Mariana</Link>
      </p>
    </footer>
  )
}

export default Footer