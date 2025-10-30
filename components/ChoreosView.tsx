import React, { useState, useRef, useMemo } from 'react';
import { useStudent } from '../contexts/StudentContext';
import { Choreo, Duo, Technique, ChoreoTechnique, DraggedItem, Note } from '../types';
import { techniques as allTechniques, sportProfiles } from '../data';
import { PlusCircleIcon, TrashIcon, ArrowDownTrayIcon, ArrowUpTrayIcon, DocumentPlusIcon } from './icons';

const ChoreosView: React.FC = () => {
    const { studentData, updateStudentData } = useStudent();
    const [activeChoreoId, setActiveChoreoId] = useState<string>(studentData.choreos[0]?.id || 'choreo-1');

    const activeChoreo = studentData.choreos.find(c => c.id === activeChoreoId) || studentData.choreos[0];

    const combinedTechniques = useMemo(() => 
        [...allTechniques, ...studentData.customTechniques], 
        [studentData.customTechniques]
    );

    const setActiveChoreo = (choreo: Choreo) => {
        updateStudentData(prev => ({
            ...prev,
            choreos: prev.choreos.map(c => c.id === choreo.id ? choreo : c)
        }));
    };

    return (
        <div className="space-y-6">
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Mijn Choreografieën</h2>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Hier kan je technieken opslaan en in de juiste volgorde per duo verwerken. Het is ook mogelijk om notities te maken en onder de tijdslijn te plaatsen. Zo heb je alles in een overzicht en kan je de voorbeelden terugzoeken. Het is ook mogelijk om dit met elkaar te delen (mocht iemand ziek zijn).</p>
                </div>
                <ImportExport choreo={activeChoreo} combinedTechniques={combinedTechniques} />
            </header>

            <div className="flex space-x-1 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
                {studentData.choreos.map(choreo => (
                    <button 
                        key={choreo.id}
                        onClick={() => setActiveChoreoId(choreo.id)}
                        className={`py-2 px-4 text-sm font-medium whitespace-nowrap ${activeChoreoId === choreo.id ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
                    >
                        {choreo.name}
                    </button>
                ))}
            </div>

            {activeChoreo && <TimelineBuilder choreo={activeChoreo} setChoreo={setActiveChoreo} combinedTechniques={combinedTechniques} />}
        </div>
    );
};

const TimelineBuilder: React.FC<{ choreo: Choreo; setChoreo: (choreo: Choreo) => void; combinedTechniques: Technique[] }> = ({ choreo, setChoreo, combinedTechniques }) => {
    const { studentData } = useStudent();
    const [draggedItem, setDraggedItem] = useState<DraggedItem | null>(null);
    const [draggedNoteId, setDraggedNoteId] = useState<string | null>(null);

    const favoriteTechniques = useMemo(() => 
        combinedTechniques.filter(t => studentData.favorites.includes(t.id)),
        [combinedTechniques, studentData.favorites]
    );

    const addDuo = () => {
        const newDuo: Duo = { id: `duo-${Date.now()}`, name: `Duo ${choreo.duos.length + 1}`, techniques: [], notes: [] };
        setChoreo({ ...choreo, duos: [...choreo.duos, newDuo] });
    };

    const updateDuoName = (duoId: string, newName: string) => {
        setChoreo({ ...choreo, duos: choreo.duos.map(d => d.id === duoId ? { ...d, name: newName } : d) });
    };
    
    const removeDuo = (duoId: string) => {
        setChoreo({...choreo, duos: choreo.duos.filter(d => d.id !== duoId)});
    };

    const addTechniqueToDuo = (duoId: string, techniqueId: string) => {
        if (!techniqueId) return;
        const newTechnique: ChoreoTechnique = { id: `ct-${Date.now()}`, techniqueId };
        setChoreo({
            ...choreo,
            duos: choreo.duos.map(d => d.id === duoId ? { ...d, techniques: [...d.techniques, newTechnique] } : d)
        });
    };
    
    const removeTechnique = (duoId: string, techniqueInstanceId: string) => {
        setChoreo({
            ...choreo,
            duos: choreo.duos.map(d => d.id === duoId ? { ...d, techniques: d.techniques.filter(t => t.id !== techniqueInstanceId) } : d)
        });
    };

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, technique: ChoreoTechnique, sourceDuoId: string, sourceIndex: number) => {
        const item: DraggedItem = { technique, sourceDuoId, sourceIndex };
        setDraggedItem(item);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', JSON.stringify(item));
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetDuoId: string, targetIndex: number) => {
        e.preventDefault();
        if (!draggedItem) return;

        const { technique, sourceDuoId, sourceIndex } = draggedItem;

        let newDuos = [...choreo.duos];
        
        const sourceDuo = newDuos.find(d => d.id === sourceDuoId);
        if(!sourceDuo) return;

        sourceDuo.techniques.splice(sourceIndex, 1);
        
        const targetDuo = newDuos.find(d => d.id === targetDuoId);
        if(!targetDuo) return;

        targetDuo.techniques.splice(targetIndex, 0, technique);

        setChoreo({ ...choreo, duos: newDuos });
        setDraggedItem(null);
    };

    // Note handlers
    const addNote = (duoId: string) => {
        const newNote: Note = { id: `note-${Date.now()}`, text: 'Nieuwe notitie...', position: 10 };
        setChoreo({
            ...choreo,
            duos: choreo.duos.map(d => d.id === duoId ? { ...d, notes: [...d.notes, newNote] } : d)
        });
    };

    const removeNote = (duoId: string, noteId: string) => {
        setChoreo({
            ...choreo,
            duos: choreo.duos.map(d => d.id === duoId ? { ...d, notes: d.notes.filter(n => n.id !== noteId) } : d)
        });
    };
    
    const updateNoteText = (duoId: string, noteId: string, newText: string) => {
        setChoreo({
            ...choreo,
            duos: choreo.duos.map(d => d.id === duoId 
                ? { ...d, notes: d.notes.map(n => n.id === noteId ? { ...n, text: newText } : n) } 
                : d)
        });
    };

    const handleNoteDragStart = (e: React.DragEvent<HTMLDivElement>, noteId: string) => {
        setDraggedNoteId(noteId);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleNoteDrop = (e: React.DragEvent<HTMLDivElement>, duoId: string) => {
        e.preventDefault();
        if (!draggedNoteId) return;

        const timeline = e.currentTarget;
        const rect = timeline.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        let newPosition = (x / width) * 100;
        newPosition = Math.max(0, Math.min(100, newPosition));

        setChoreo({
            ...choreo,
            duos: choreo.duos.map(d => d.id === duoId 
                ? { ...d, notes: d.notes.map(n => n.id === draggedNoteId ? { ...n, position: newPosition } : n) } 
                : d)
        });
        setDraggedNoteId(null);
    };


    return (
        <div className="space-y-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            {choreo.duos.map(duo => (
                <div key={duo.id} className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center mb-2">
                        <input
                            type="text"
                            value={duo.name}
                            onChange={(e) => updateDuoName(duo.id, e.target.value)}
                            className="font-bold bg-transparent focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 rounded p-1"
                        />
                         <button onClick={() => removeDuo(duo.id)} className="ml-auto text-gray-400 hover:text-red-500"><TrashIcon /></button>
                    </div>

                    {/* Timeline and Notes Section */}
                    <div className="mt-4 space-y-2">
                        {/* Ruler */}
                        <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-600" 
                             style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 4.9%, #a0aec0 4.9%, #a0aec0 5%)'}}
                        />

                        {/* Techniques Track */}
                        <div 
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, duo.id, duo.techniques.length)}
                            className="flex items-center flex-wrap gap-2 p-2 min-h-[50px] bg-gray-50 dark:bg-gray-700/50 rounded-md"
                        >
                            {duo.techniques.map((tech, index) => {
                                const techInfo = combinedTechniques.find(t => t.id === tech.techniqueId);
                                const sportInfo = sportProfiles.find(s => s.id === techInfo?.sportProfileId);
                                return (
                                    <div
                                        key={tech.id}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, tech, duo.id, index)}
                                        onDrop={(e) => handleDrop(e, duo.id, index)}
                                        className="relative p-2 text-sm text-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md shadow-sm cursor-move"
                                    >
                                        <span>{techInfo?.name || 'Unknown'} ({sportInfo?.id})</span>
                                        <button onClick={() => removeTechnique(duo.id, tech.id)} className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">&times;</button>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Notes Track */}
                        <div 
                            className="relative h-24"
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleNoteDrop(e, duo.id)}
                        >
                           {duo.notes.map(note => (
                                <div
                                    key={note.id}
                                    draggable
                                    onDragStart={(e) => handleNoteDragStart(e, note.id)}
                                    style={{ left: `${note.position}%`, transform: 'translateX(-50%)' }}
                                    className="absolute top-2 p-2 w-32 bg-yellow-100 dark:bg-yellow-800 border border-yellow-300 dark:border-yellow-600 rounded-md shadow-lg cursor-move z-10"
                                >
                                    <textarea 
                                        value={note.text}
                                        onChange={(e) => updateNoteText(duo.id, note.id, e.target.value)}
                                        className="w-full h-12 p-1 text-xs bg-transparent border-none focus:ring-0 resize-none dark:text-yellow-100"
                                    />
                                    <button onClick={() => removeNote(duo.id, note.id)} className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">&times;</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-2 flex flex-wrap gap-2">
                        <select onChange={(e) => addTechniqueToDuo(duo.id, e.target.value)} value="" className="w-full sm:w-auto p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600">
                            <option value="">+ Voeg techniek toe (alle)</option>
                            {combinedTechniques.map(tech => <option key={tech.id} value={tech.id}>{tech.name}</option>)}
                        </select>
                        <select 
                            onChange={(e) => addTechniqueToDuo(duo.id, e.target.value)} 
                            value="" 
                            disabled={favoriteTechniques.length === 0}
                            className="w-full sm:w-auto p-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600 disabled:opacity-50"
                        >
                            <option value="">+ Voeg uit opgeslagen</option>
                            {favoriteTechniques.map(tech => <option key={tech.id} value={tech.id}>{tech.name}</option>)}
                        </select>
                         <button onClick={() => addNote(duo.id)} className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-2 px-4 rounded-md transition-colors">
                            <DocumentPlusIcon />
                            <span>Notitie</span>
                        </button>
                    </div>

                     <div className="mt-4">
                        <h4 className="font-semibold text-sm mb-1">Technieken in deze rij:</h4>
                        <ul className="list-disc list-inside text-sm space-y-1">
                        {duo.techniques.map(tech => {
                             const techInfo = combinedTechniques.find(t => t.id === tech.techniqueId);
                             return techInfo ? (
                                <li key={tech.id}>
                                    {techInfo.name} - <a href={techInfo.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">YouTube</a>
                                </li>
                             ) : null;
                        })}
                        </ul>
                    </div>
                </div>
            ))}
            <button onClick={addDuo} className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded-md">
                <PlusCircleIcon />
                <span>Duo Toevoegen</span>
            </button>
        </div>
    );
};

const ImportExport: React.FC<{ choreo: Choreo; combinedTechniques: Technique[] }> = ({ choreo, combinedTechniques }) => {
    const { updateStudentData } = useStudent();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleExport = () => {
        const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(choreo, null, 2))}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = `${choreo.name}.json`;
        link.click();
    };

    const handleImportClick = () => {
        fileInputRef.current?.click();
    };
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target?.result;
                if (typeof text !== 'string') throw new Error("File is not text");
                const importedChoreo = JSON.parse(text) as Choreo;
                // Basic validation
                if (importedChoreo.id && importedChoreo.name && Array.isArray(importedChoreo.duos)) {
                    updateStudentData(prev => ({
                        ...prev,
                        choreos: prev.choreos.map(c => c.id === importedChoreo.id ? importedChoreo : c)
                    }));
                    alert(`Choreo '${importedChoreo.name}' succesvol geïmporteerd!`);
                } else {
                    throw new Error("Invalid choreo format");
                }
            } catch (error) {
                alert("Importeren mislukt. Zorg dat het een geldig choreo JSON-bestand is.");
                console.error("Import error:", error);
            }
        };
        reader.readAsText(file);
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; // Reset file input
        }
    };

    const handleExportPdf = () => {
        const jspdf = (window as any).jspdf;
        if (!jspdf) {
            alert('PDF generator is niet geladen. Probeer de pagina te vernieuwen.');
            return;
        }
        const { jsPDF } = jspdf;
        const doc = new jsPDF();
        
        const pageHeight = doc.internal.pageSize.height;
        const pageWidth = doc.internal.pageSize.width;
        const margin = 14;
        let y = 20;

        const checkPageBreak = (spaceNeeded: number) => {
            if (y + spaceNeeded > pageHeight - margin) {
                doc.addPage();
                y = margin + 6;
            }
        };

        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text(`Choreografie: ${choreo.name}`, margin, y);
        doc.setFont('helvetica', 'normal');
        y += 15;

        choreo.duos.forEach((duo, duoIndex) => {
            checkPageBreak(20);
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text(`Duo ${duoIndex + 1}: ${duo.name}`, margin, y);
            doc.setFont('helvetica', 'normal');
            y += 10;
            
            if (duo.techniques.length > 0) {
                checkPageBreak(10);
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.text('Technieken:', margin + 4, y);
                doc.setFont('helvetica', 'normal');
                y += 7;

                duo.techniques.forEach((tech, techIndex) => {
                    const techInfo = combinedTechniques.find(t => t.id === tech.techniqueId);
                    if (techInfo) {
                        checkPageBreak(28);
                        const sport = sportProfiles.find(p => p.id === techInfo.sportProfileId)?.name || 'Onbekend';
                        
                        doc.setFontSize(11);
                        doc.setFont('helvetica', 'bold');
                        doc.text(`${techIndex + 1}. ${techInfo.name}`, margin + 8, y);
                        y += 6;

                        doc.setFontSize(10);
                        doc.setFont('helvetica', 'normal');
                        doc.text(`Sportprofiel: ${sport}`, margin + 12, y);
                        y += 5;
                        doc.text(`Valrichting: ${techInfo.fallDirection}`, margin + 12, y);
                        y += 5;
                        doc.text(`Moeilijkheid: ${techInfo.difficulty}`, margin + 12, y);
                        y += 5;
                        
                        const youtubeLabel = 'YouTube: ';
                        doc.text(youtubeLabel, margin + 12, y);
                        const labelWidth = doc.getTextWidth(youtubeLabel);
                        doc.setTextColor(0, 0, 238);
                        doc.text(techInfo.youtubeUrl, margin + 12 + labelWidth, y);
                        doc.setTextColor(0, 0, 0);
                        y += 8;
                    }
                });
            }

            if (duo.notes.length > 0) {
                checkPageBreak(15);
                doc.setFontSize(12);
                doc.setFont('helvetica', 'bold');
                doc.text('Notities:', margin + 4, y);
                doc.setFont('helvetica', 'normal');
                y += 7;
                
                duo.notes.forEach((note) => {
                    doc.setFontSize(10);
                    const splitText = doc.splitTextToSize(`- ${note.text}`, pageWidth - (margin * 2) - 12);
                    checkPageBreak(splitText.length * 5 + 2);
                    doc.text(splitText, margin + 8, y);
                    y += (splitText.length * 5) + 2;
                });
            }
            
            if (duoIndex < choreo.duos.length - 1) {
                checkPageBreak(10);
                doc.setDrawColor(200);
                doc.line(margin, y, pageWidth - margin, y);
                y += 10;
            }
        });

        doc.save(`${choreo.name.replace(/\s/g, '_')}.pdf`);
    };

    return (
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <button onClick={handleExportPdf} className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                <ArrowDownTrayIcon/> <span>Export PDF</span>
            </button>
            <button onClick={handleExport} className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                <ArrowDownTrayIcon/> <span>Export JSON</span>
            </button>
            <button onClick={handleImportClick} className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
                <ArrowUpTrayIcon/> <span>Import JSON</span>
            </button>
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept=".json"
                onChange={handleFileChange}
            />
        </div>
    );
};


export default ChoreosView;