let Button = (props) => {
  let { label, style } = props

  return (
    <button style={style}>
      {label}
    </button>
  )
}

export default Button
