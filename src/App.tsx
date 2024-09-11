import { useState } from "react"
import { gerarCPF } from "./utils/gerarCPF"
import ModalCPF from "./components/modalCPF"
import toast, { Toaster } from "react-hot-toast"

function App() {
  const [estado, setEstado] = useState(10)
  const [cpf, setCpf] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  function handleSubmit(){
    if (estado === 10){
      toast.error('Selecione um estado')
    }else{
      const novoCPF = gerarCPF(estado)
      setCpf(novoCPF)
      setIsOpen(true)
    }
    
  } 

  
  return (
    <>
      <div><Toaster/></div>
      <main className="m-0 p-0 w-screen h-screen flex justify-center items-center bg-slate-700">
        <form className="w-[350px] h-auto p-8 bg-slate-500 flex flex-col items-center rounded-2xl">
          <h1 className="text-[32px] text-white font-semibold leading-normal mb-6 mt-6">Gerador de CPF</h1>
          <p className="text-white font-normal leading-normal text-[20px] mb-2">Selecione o estado</p>
          <select onChange={(e)=>{setEstado(Number(e.target.value))}}
          className="mb-6 p-2 w-[200px] rounded-md text-center text-slate-900 font-semibold" name="estado" id="estado" required>
            <option selected disabled>Selecione</option>
            <option value={2}>Acre</option>
            <option value={4}>Alagoas</option>
            <option value={2}>Amapá</option>
            <option value={2}>Amazonas</option>
            <option value={5}>Bahia</option>
            <option value={3}>Ceará</option>
            <option value={7}>Espírito Santo</option>
            <option value={1}>Goiás</option>
            <option value={3}>Maranhão</option>
            <option value={1}>Mato Grosso</option>
            <option value={1}>Mato Grosso do Sul</option>
            <option value={6}>Minas Gerais</option>
            <option value={2}>Pará</option>
            <option value={4}>Paraíba</option>
            <option value={9}>Paraná</option>
            <option value={4}>Pernambuco</option>
            <option value={3}>Piauí</option>
            <option value={7}>Rio de Janeiro</option>
            <option value={4}>Rio Grande do Norte</option>
            <option value={0}>Rio Grande do Sul</option>
            <option value={2}>Rondônia</option>
            <option value={2}>Roraima</option>
            <option value={9}>Santa Catarina</option>
            <option value={8}>São Paulo</option>
            <option value={5}>Sergipe</option>
            <option value={1}>Tocantins</option>
          </select>
          <button onClick={handleSubmit} type="button" className="mb-6 text-white font-semibold bg-slate-900 p-4 text-[24px] rounded-xl w-[200px]">GERAR</button>
        </form>
      </main>
      <ModalCPF isOpen={isOpen} setIsOpen={setIsOpen} cpf={cpf}/>
    </>
  )
}


export default App
