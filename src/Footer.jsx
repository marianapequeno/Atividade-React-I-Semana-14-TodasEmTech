import Text from "./Text"
import Link from "./Link"

function Footer() {
  return (
    <footer className="footer">
      <Text>Desenvolvido com <Link href="https://pt-br.reactjs.org/">React JS </Link> 
        por <Link href="https://github.com/marianapequeno">Mariana</Link></Text>
    </footer>
  )
}

export default Footer