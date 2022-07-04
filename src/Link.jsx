function Link(props) {
  return (
    <a className="link" href={props.href} target="_blank">{props.children}</a>
  )
}

export default Link