import "./Card.css";

export default function Card(props: any) {
  // ao passar props.children como abaixo, é possível
  // renderizar o conteúdo que for colocado entre chaves no template
  return <div className="card"> {props.children} </div>;
}
