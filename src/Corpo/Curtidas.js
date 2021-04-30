export default function Curtidas(props) {
  return (
    <div class="curtidas">
      <img src={`assets/img/${props.srcLike}.svg`} />
      <div class="texto">
        Curtido por <strong>{props.srcLike}</strong>
        <strong> outras 101.523 pessoas</strong>
      </div>
    </div>
  );
}
