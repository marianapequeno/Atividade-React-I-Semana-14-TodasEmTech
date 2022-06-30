import React from 'react'

export const Link = (props) => {
  return (
    <a href={props.href} target={"_blank"} style={{textDecoration: "none", color: props.cor}}>{props.children}</a>
  )
}

export default Link