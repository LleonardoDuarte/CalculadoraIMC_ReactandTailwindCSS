import { useState } from "react";

export default function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState("");

  function handleCalcImc() {
    const imc = peso / (altura * altura);
    if (imc >= 40) return setResultado("Obesidade tipo 3");
    if (imc >= 34.9) return setResultado("Obesidade tipo 2");
    if (imc >= 29.9) return setResultado("Obesidade tipo 1");
    if (imc >= 18.6) return setResultado("Sobrepeso");
    if (imc < 18.5) return setResultado("Abaixo do peso ideal");
  }

  return (
    <div>
      <div className="flex flex-col w-80 mt-10 bg-green-200 p-6 mx-auto gap-4 rounded-md">
        <input
          type="number"
          placeholder="Insira sua altura"
          className="rounded-sm px-4 py-2"
          //No onChange a ideia e criar um evento para pegar uma função dentro do target
          onChange={(event) => setAltura(event.target.valueAsNumber)}
        />
        <input
          type="number"
          placeholder="Insira seu peso"
          className="rounded-sm px-4 py-2"
          onChange={(event) => setPeso(event.target.valueAsNumber)}
        />
        <button
          onClick={handleCalcImc}
          className="rounded-sm px-4 py-2 bg-teal-500"
        >
          Calcular
        </button>
        <div className="flex text-sm">{resultado}</div>
      </div>
    </div>
  );
}
