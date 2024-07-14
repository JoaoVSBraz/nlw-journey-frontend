import { Plus } from "lucide-react";
import { useState } from "react";
import CreateActivityModal from "./create-activity-modal";
import ImportantLinks from "./important-links";
import Guests from "./guests";
import Activities from "./activities";
import DestinationAndDateHeader from "./destination-and-date-header";

export default function TripDetailsPage() {
    const [isCreateActivityModalVisible, setIsCreateActivityModalVisible] = useState(false);

    const handleCreateActivity = () => setIsCreateActivityModalVisible(!isCreateActivityModalVisible);

    return (
        <>
            <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
                {/* CABEÇALHO */}
                <DestinationAndDateHeader />

                {/* CONTEÚDO */}
                <main className="flex gap-16 px-4">
                    {/* LEFT */}
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-semibold">Atividades</h2>
                            <button onClick={handleCreateActivity} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                                <Plus className='size-5' />
                                Cadastrar atividade
                            </button>
                        </div>

                        <Activities />
                    </div>

                    {/* RIGHT */}
                    <div className="w-80 space-y-6">
                        <ImportantLinks />
                        <div className="w-full h-px bg-zinc-800" />
                        <Guests />
                    </div>
                </main>

                {isCreateActivityModalVisible && (
                    <CreateActivityModal 
                        handleCreateActivity={handleCreateActivity}
                    />
                )}
            </div>
        </>
    )
}