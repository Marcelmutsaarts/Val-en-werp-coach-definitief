import React from 'react';
import { breakfallData } from '../data';

const ValbrekenView: React.FC = () => {
    return (
        <div className="space-y-8">
            <header>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">{breakfallData.title}</h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{breakfallData.description}</p>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Weekplanning</h3>
                    <ul className="space-y-4">
                        {breakfallData.weeks.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-xs mr-4 mt-1">
                                    {item.week}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">{item.focus}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Veiligheidstips</h3>
                        <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                            {breakfallData.safetyTips.map((tip, index) => <li key={index}>{tip}</li>)}
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Inspiratievideo's</h3>
                        <ul className="space-y-2">
                            {breakfallData.inspiration.map((video, index) => (
                                <li key={index}>
                                    <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                                        {video.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">{breakfallData.importance.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{breakfallData.importance.intro}</p>
                <div className="space-y-6">
                    {breakfallData.importance.points.map((point, index) => (
                        <div key={index} className="flex items-start">
                             <div className="flex-shrink-0 bg-blue-500 text-white rounded-full h-8 w-8 text-md flex items-center justify-center font-bold mr-4">
                                {index + 1}
                             </div>
                             <div>
                                <h4 className="font-bold text-md text-gray-800 dark:text-gray-200">{point.title}</h4>
                                <p className="mt-1 text-gray-700 dark:text-gray-300">{point.content}</p>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ValbrekenView;