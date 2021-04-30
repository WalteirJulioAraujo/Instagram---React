export default function Usuario(props) {
  return (
    <div class="usuario">
      <img src={`assets/img/${props.name}.svg`} />
      <div class="texto">
        <strong>{props.name}</strong>
        {props.subname}
      </div>
    </div>
  );
}
