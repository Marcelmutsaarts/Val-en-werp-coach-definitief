import React, { useState, useMemo } from 'react';
import { techniques as allTechniques, sportProfiles } from '../data';
import { useStudent } from '../contexts/StudentContext';
import { PlusCircleIcon, StarIcon, SolidStarIcon } from './icons';
import { Technique } from '../types';

const AddTechniqueModal: React.FC<{ onClose: () => void; onSave: (tech: Omit<Technique, 'id' | 'notes'>) => void; }> = ({ onClose, onSave }) => {
    const [name, setName] = useState('');
    const [sportProfileId, setSportProfileId] = useState<number>(sportProfiles[0].id);
    const [fallDirection, setFallDirection] = useState<'voorwaarts' | 'achterwaarts' | 'zijwaarts'>('voorwaarts');
    const [difficulty, setDifficulty] = useState<'laag' | 'hoog' | 'uitdagend'>('laag');
    const [youtubeUrl, setYoutubeUrl] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!name.trim() || !youtubeUrl.trim()) {
            alert('Naam en YouTube URL zijn verplicht.');
            return;
        }
        onSave({ name, sportProfileId, fallDirection, difficulty, youtubeUrl });
    };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Eigen Techniek Toevoegen</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="tech-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Naam Techniek</label>
                        <input type="text" id="tech-name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 block w-full text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-700 p-2" />
                    </div>
                     <div>
                        <label htmlFor="tech-sport" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sportprofiel</label>
                        <select id="tech-sport" value={sportProfileId} onChange={e => setSportProfileId(Number(e.target.value))} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-700">
                             {sportProfiles.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                        </select>
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="tech-direction" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Valrichting</label>
                            <select id="tech-direction" value={fallDirection} onChange={e => setFallDirection(e.target.value as any)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-700">
                                <option value="voorwaarts">Voorwaarts</option>
                                <option value="achterwaarts">Achterwaarts</option>
                                <option value="zijwaarts">Zijwaarts</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="tech-difficulty" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Moeilijkheid</label>
                            <select id="tech-difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value as any)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-700">
                               <option value="laag">Laag</option>
                                <option value="hoog">Hoog</option>
                                <option value="uitdagend">Uitdagend</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="tech-youtube" className="block text-sm font-medium text-gray-700 dark:text-gray-300">YouTube URL</label>
                        <input type="url" id="tech-youtube" value={youtubeUrl} onChange={e => setYoutubeUrl(e.target.value)} required placeholder="https://youtube.com/watch?v=..." className="mt-1 block w-full text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-700 p-2" />
                    </div>
                    <div className="flex justify-end space-x-3 pt-2">
                        <button type="button" onClick={onClose} className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">Annuleren</button>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors">Opslaan</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


const TechniekenView: React.FC = () => {
    const { studentData, updateStudentData } = useStudent();
    const [sportFilter, setSportFilter] = useState<string>('all');
    const [directionFilter, setDirectionFilter] = useState<string>('all');
    const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const combinedTechniques = useMemo(() => [...allTechniques, ...studentData.customTechniques], [studentData.customTechniques]);

    const filteredTechniques = useMemo(() => {
        return combinedTechniques.filter(tech => {
            const sportMatch = sportFilter === 'all' || tech.sportProfileId === parseInt(sportFilter);
            const directionMatch = directionFilter === 'all' || tech.fallDirection === directionFilter;
            const difficultyMatch = difficultyFilter === 'all' || tech.difficulty === difficultyFilter;
            return sportMatch && directionMatch && difficultyMatch;
        }).sort((a,b) => a.name.localeCompare(b.name));
    }, [combinedTechniques, sportFilter, directionFilter, difficultyFilter]);

    const handleAddCustomTechnique = () => {
      setIsModalOpen(true);
    };
    
    const handleSaveTechnique = (newTechniqueData: Omit<Technique, 'id' | 'notes'>) => {
        const techniqueWithId: Technique = {
            ...newTechniqueData,
            id: `custom-${Date.now()}`
        };
        updateStudentData(prev => ({
            ...prev,
            customTechniques: [...prev.customTechniques, techniqueWithId]
        }));
        setIsModalOpen(false);
    };

    return (
        <div className="space-y-6">
            <header>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Technieken Bibliotheek</h2>
                <div className="mt-2 text-lg text-gray-600 dark:text-gray-400 space-y-4">
                    <p>
                        Samen met jullie docent ga je iedere week de technieken van een andere sport oefenen. Dit zullen judo, BJJ, grappling/wrestling, aikido, jiu-jitsu en WWE/catch-wrestling zijn. Iedere week staat 1 sport centraal en krijgen jullie verschillende technieken van deze sport.
                    </p>
                    <p>
                        Hieronder kunnen jullie al deze technieken terugvinden (en nog veel meer!). Je kan deze opzoeken, filteren en opslaan voor je choreo (zie tabblad). Het is ook mogelijk om zelf youtube-links van technieken hierin op te slaan en te verwerken.
                    </p>
                    <p className="font-semibold text-gray-700 dark:text-gray-300">
                        Belangrijk: bij het oefenen van nieuwe technieken is het verstandig om de docent om hulp te vragen m.b.t. veilig vallen of opbouw/tips voor de techniek, veel succes!
                    </p>
                </div>
            </header>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md sticky top-16 z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Filters */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Sportprofiel</label>
                        <select onChange={(e) => setSportFilter(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-700">
                            <option value="all">Alle</option>
                            {sportProfiles.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Valrichting</label>
                        <select onChange={(e) => setDirectionFilter(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-700">
                            <option value="all">Alle</option>
                            <option value="voorwaarts">Voorwaarts</option>
                            <option value="achterwaarts">Achterwaarts</option>
                            <option value="zijwaarts">Zijwaarts</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Moeilijkheid</label>
                        <select onChange={(e) => setDifficultyFilter(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-700">
                            <option value="all">Alle</option>
                            <option value="laag">Laag</option>
                            <option value="hoog">Hoog</option>
                            <option value="uitdagend">Uitdagend</option>
                        </select>
                    </div>
                     <div className="self-end">
                         <button onClick={handleAddCustomTechnique} className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                             <PlusCircleIcon />
                             <span>Eigen Techniek</span>
                         </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTechniques.length > 0 ? filteredTechniques.map(tech => (
                    <TechniqueCard key={tech.id} tech={tech} />
                )) : (
                    <p className="md:col-span-2 lg:col-span-3 text-center text-gray-500 dark:text-gray-400">Geen technieken gevonden die aan je filters voldoen.</p>
                )}
            </div>
            
            {isModalOpen && <AddTechniqueModal onClose={() => setIsModalOpen(false)} onSave={handleSaveTechnique} />}
        </div>
    );
};

const TechniqueCard: React.FC<{ tech: Technique }> = ({ tech }) => {
    const { studentData, updateStudentData } = useStudent();
    const note = studentData.notes[tech.id] || '';
    const isFavorite = studentData.favorites.includes(tech.id);

    const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateStudentData(prev => ({ ...prev, notes: { ...prev.notes, [tech.id]: e.target.value } }));
    };
    
    const handleDeleteCustomTechnique = () => {
        if (window.confirm(`Weet je zeker dat je de techniek "${tech.name}" wilt verwijderen?`)) {
            updateStudentData(prev => ({
                ...prev,
                customTechniques: prev.customTechniques.filter(t => t.id !== tech.id),
                favorites: prev.favorites.filter(favId => favId !== tech.id)
            }));
        }
    };

    const handleToggleFavorite = () => {
        updateStudentData(prev => {
            const newFavorites = isFavorite
                ? prev.favorites.filter(id => id !== tech.id)
                : [...prev.favorites, tech.id];
            return { ...prev, favorites: newFavorites };
        });
    };

    const sport = sportProfiles.find(p => p.id === tech.sportProfileId)?.name;

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'laag': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'hoog': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'uitdagend': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
        }
    };
    
    const isCustom = tech.id.startsWith('custom-');

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="p-4 relative">
                 {isCustom && (
                    <button onClick={handleDeleteCustomTechnique} className="absolute top-2 right-2 text-gray-400 hover:text-red-500" title="Verwijder techniek">
                        <TrashIcon />
                    </button>
                )}
                <h3 className="font-bold text-lg pr-8">{tech.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{sport}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(tech.difficulty)}`}>{tech.difficulty}</span>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">{tech.fallDirection}</span>
                    {isCustom && <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">Eigen</span>}
                </div>
            </div>
            <div className="p-4 flex-grow">
                 <textarea
                    value={note}
                    onChange={handleNoteChange}
                    placeholder="Voeg notities toe..."
                    className="w-full h-20 p-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 flex items-center space-x-2">
                <a href={tech.youtubeUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                    YouTube
                </a>
                <button 
                    onClick={handleToggleFavorite} 
                    className={`flex items-center justify-center space-x-2 font-bold py-2 px-4 rounded-md transition-colors ${
                        isFavorite 
                        ? 'bg-yellow-400 hover:bg-yellow-500 text-yellow-900' 
                        : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200'
                    }`}
                >
                    {isFavorite ? <SolidStarIcon /> : <StarIcon />}
                    <span>{isFavorite ? 'Opgeslagen' : 'Opslaan'}</span>
                </button>
            </div>
        </div>
    );
};

const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);


export default TechniekenView;