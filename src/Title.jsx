function Title(props){
  return(
    <h2 style={{textTransform: props.textTransform, textAlign: props.textAlign, marginTop: 0, marginBottom: props.marginBottom}}>{props.children}</h2>
  )
}

export default Title