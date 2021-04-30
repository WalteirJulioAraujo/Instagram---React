import Seguir from "./Seguir"

export default function Sugestao() {
  const lista = [
    { name: "bad.vibes.memes", razao: "Segue você" },
    { name: "chibirdart", razao: "Segue você" },
    { name: "razoesparaacreditar", razao: "Novo no Instagram" },
    { name: "adorable_animals", razao: "Segue você" },
    { name: "smallcutecats", razao: "Segue você" },
  ];

  return (
    <>
      {lista.map((e) => {
        return (
          <div class="sugestao">
            <div class="usuario">
              <img src={`assets/img/${e.name}.svg`}/>
              <div class="texto">
                <div class="nome">{e.name}</div>
                <div class="razao">{e.razao}</div>
              </div>
            </div>

            <Seguir />
          </div>
        );
      })}
    </>
  );
}
