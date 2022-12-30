import "./Card.css";

export default function Card(props: any) {
  // recebendo classes de estilo que forem passadas externamente
  const classes = `card ${props.className}`;
  // ao passar props.children como abaixo, é possível
  // renderizar o conteúdo que for colocado entre chaves no template
  return <div className={classes}> {props.children} </div>;
}
