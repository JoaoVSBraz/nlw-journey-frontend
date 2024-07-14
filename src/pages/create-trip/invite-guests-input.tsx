import { ArrowRight, UserRoundPlus } from "lucide-react";
import Button from "../../components/Button";

interface InviteGuestsInputProps {
    handleGuestsModal: () => void;
    emailList: string[];
    handleConfirmTripModal: () => void;
}

export default function InviteGuestsInput({
    handleGuestsModal,
    emailList,
    handleConfirmTripModal,
}: InviteGuestsInputProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 ">

            <button type='button' onClick={handleGuestsModal} className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className='size-5 text-zinc-400' />
                {emailList.length > 0 ? (
                    <span className='text-zinc-100 text-lg flex-1 text-left'>{emailList.length} pessoa(s) convidada(s)</span>
                ) : (
                    <span className='text-zinc-400 text-lg flex-1 text-left'>Quem estará na viagem?</span>
                )}
            </button>

            <div className='w-px h-6 bg-zinc-800' />

            <Button onClick={handleConfirmTripModal} variant="primary">
                Confirmar viagem
                <ArrowRight className='size-5' />
            </Button>
        </div>
    )
}