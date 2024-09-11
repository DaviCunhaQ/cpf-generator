import Modal from 'react-modal'

interface ModalPlusProps{
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  cpf: string
}
export default function ModalCPF({isOpen, setIsOpen, cpf}: ModalPlusProps){
  return(
      <Modal isOpen={isOpen} onRequestClose={()=>setIsOpen(false)} className="custom-position left-1/3 rounded-md w-[300px] p-2 h-auto border-2 text-center bg-slate-700 text-white">
        <h1>{cpf}</h1>
      </Modal>
  )
}