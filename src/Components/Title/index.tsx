
interface ITitleProps {
  title: string
}

const Title = ({title}:ITitleProps) => {
  return (
    <h1>{title}</h1>
  )
}

export default Title;