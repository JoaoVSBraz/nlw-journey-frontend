import { AtSign, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps{
    handleConfirmTripModal: () => void;
    handleCreateTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export default function ConfirmTripModal({
    handleConfirmTripModal,
    handleCreateTrip,
} : ConfirmTripModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Confirmar criação da viagem</h2>
                        <button onClick={handleConfirmTripModal}>
                            <X className='size-5 text-zinc-400' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>Para concluir a criação da viagem para Florianópolis, Brasil nas datas de 16 a 27 de Agosto de 2024 preencha seus dados abaixo:</p>
                </div>

                <form onSubmit={handleCreateTrip} className='space-y-3'>
                    <div className='px-4 h-14 bg-zinc-950 border-l-zinc-800 rounded-lg flex items-center flex-1 gap-2'>
                        <User className='text-zinc-400 size-5' />
                        <input
                            name="name"
                            id=""
                            placeholder="Seu nome completo"
                            className="bg-transparent text-lg placeholder-zinc-400 w-32 outline-none flex-1"
                        />
                    </div>

                    <div className='px-4 h-14 bg-zinc-950 border-l-zinc-800 rounded-lg flex items-center flex-1 gap-2'>
                        <AtSign className='text-zinc-400 size-5' />
                        <input
                            type="email"
                            name="email"
                            id=""
                            placeholder="Seu e-mail pessoal"
                            className="bg-transparent text-lg placeholder-zinc-400 w-32 outline-none flex-1"
                        />
                    </div>
                    <button type='submit' className='w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 h-12 font-medium flex items-center gap-2 hover:bg-lime-400'>
                        Confirmar criação da viagem
                    </button>
                </form>
            </div>
        </div>
    )
}