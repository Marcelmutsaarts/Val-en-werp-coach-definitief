
import React from 'react';
import { learningTasksData } from '../data';

const LeertakenView: React.FC = () => {
    const phaseColors = [
        "bg-red-100 dark:bg-red-900 border-red-500",
        "bg-yellow-100 dark:bg-yellow-900 border-yellow-500",
        "bg-green-100 dark:bg-green-900 border-green-500",
        "bg-blue-100 dark:bg-blue-900 border-blue-500",
        "bg-indigo-100 dark:bg-indigo-900 border-indigo-500"
    ];

    return (
        <div className="space-y-8">
             <header>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">Leertaken & Ontwikkelingsfases</h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Volg je ontwikkeling door de verschillende fases van vaardigheidsverwerving.</p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {learningTasksData.map((task, index) => (
                    <div key={index} className={`rounded-lg p-6 border-l-4 ${phaseColors[index]}`}>
                        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{task.title}</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{task.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeertakenView;
