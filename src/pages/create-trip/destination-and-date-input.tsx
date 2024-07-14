import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import Button from "../../components/Button";

interface DestinationAndDateInputProps {
    isGuestsInputVisible: boolean;
    handleGuestsInput: () => void;
}

export default function DestinationAndDateInput({
    isGuestsInputVisible,
    handleGuestsInput,
}: DestinationAndDateInputProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 ">

            <div className='flex items-center gap-2 flex-1'>
                <MapPin className='size-5 text-zinc-400' />
                <input disabled={isGuestsInputVisible} type="text" name="" id="" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <div className='flex items-center gap-2'>
                <Calendar className='size-5 text-zinc-400' />
                <input disabled={isGuestsInputVisible} type="text" name="" id="" placeholder="Quando" className="bg-transparent text-lg placeholder-zinc-400 w-32 outline-none" />
            </div>

            <div className='w-px h-6 bg-zinc-800' />

            {isGuestsInputVisible ? (
                <Button onClick={handleGuestsInput} variant="secondary">
                    Alterar local/data
                    <Settings2 className='size-5' />
                </Button>
            ) : (
                <Button onClick={handleGuestsInput} variant="primary">
                    Continuar
                    <ArrowRight className='size-5' />
                </Button>
            )}
        </div>
    )
}