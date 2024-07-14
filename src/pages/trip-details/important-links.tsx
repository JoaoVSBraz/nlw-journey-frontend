import { Link2, Plus } from "lucide-react";
import Button from "../../components/Button";

export default function ImportantLinks() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reservad do airbnb</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/104700011000000000</a>
                    </div>
                    <Link2 className="size-5 text-zinc-400 flex-shrink-0" />
                </div>
            </div>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reservad do airbnb</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/104700011000000000</a>
                    </div>
                    <Link2 className="size-5 text-zinc-400 flex-shrink-0" />
                </div>
            </div>            
            <Button variant="secondary" size="full">
                <Plus className="size-5" />
                Cadastrar novo link
            </Button>
        </div>
    )
}