export default function Story(props) {
  const lista = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
  ];
  return (
    <>
      {lista.map((e) => {
        return (
          <div class="story">
            <div class="imagem">
              <img src={`assets/img/${e}.svg`} />
            </div>
            <div class="usuario">{e}</div>
          </div>
        );
      })}
    </>
  );
}
