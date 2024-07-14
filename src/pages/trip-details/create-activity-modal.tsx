import { Calendar, Tag, X } from "lucide-react";
import Button from "../../components/Button";

interface CreateActivityModalProps {
    handleCreateActivity: () => void;
}

export default function CreateActivityModal({ handleCreateActivity }: CreateActivityModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
                        <button onClick={handleCreateActivity}>
                            <X className='size-5 text-zinc-400' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>Todos convidados podem visualizar as atividades.</p>
                </div>

                <form className='space-y-3'>
                    <div className='px-4 h-14 bg-zinc-950 border-l-zinc-800 rounded-lg flex items-center flex-1 gap-2'>
                        <Tag className='text-zinc-400 size-5' />
                        <input
                            name="title"
                            id="activity-title"
                            placeholder="Qual a atividade?"
                            className="bg-transparent text-lg placeholder-zinc-400 w-32 outline-none flex-1"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='px-4 h-14 bg-zinc-950 border-l-zinc-800 rounded-lg flex items-center flex-1 gap-2'>
                            <Calendar className='text-zinc-400 size-5' />
                            <input
                                type="datetime-local"
                                name="email"
                                id=""
                                placeholder="Seu e-mail pessoal"
                                className="bg-transparent text-lg placeholder-zinc-400 w-32 outline-none flex-1"
                            />
                        </div>
                    </div>
                    
                    <Button variant="primary" size="full">
                        Salvar atividade
                    </Button>
                </form>
            </div>
        </div>
    )
}