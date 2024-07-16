import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import Button from "../../components/Button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from 'date-fns';
import "react-day-picker/dist/style.css";

interface DestinationAndDateInputProps {
    isGuestsInputVisible: boolean;
    handleGuestsInput: () => void;
}

export default function DestinationAndDateInput({
    isGuestsInputVisible,
    handleGuestsInput,
}: DestinationAndDateInputProps) {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [eventStartAndEndDate, setEventStartAndEndDate] = useState<DateRange | undefined>();
    const displayedDate = eventStartAndEndDate && eventStartAndEndDate.from && eventStartAndEndDate.to && eventStartAndEndDate.to ? format(eventStartAndEndDate.from, "d 'de' LLL").concat(' até ').concat(format(eventStartAndEndDate.to, "d 'de' LLL")) : null;

    const handleIsDatePickerOpen = () => { setIsDatePickerOpen(!isDatePickerOpen); };

    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 ">

            <div className='flex items-center gap-2 flex-1'>
                <MapPin className='size-5 text-zinc-400' />
                <input disabled={isGuestsInputVisible} type="text" name="" id="" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>

            <button
                onClick={handleIsDatePickerOpen}
                disabled={isGuestsInputVisible}
                className='flex items-center gap-2 text-left'>
                <Calendar className='size-5 text-zinc-400' />
                <span className="text-lg text-zinc-400 flex-1">
                    {displayedDate || 'Quando'}
                </span>
            </button>

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

            {/* Date Picket Modal */}
            {isDatePickerOpen && (
                <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
                    <div className='rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between'>
                                <h2 className='text-lg font-semibold'>Selecionar data</h2>
                                <button onClick={handleIsDatePickerOpen}>
                                    <X className='size-5 text-zinc-400' />
                                </button>
                            </div>
                            <DayPicker mode="range" selected={eventStartAndEndDate} onSelect={setEventStartAndEndDate}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}