import React from 'react';
import { sportenData } from '../data';

const SportenView: React.FC = () => {
    return (
        <div className="space-y-8">
            <header>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">{sportenData.title}</h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{sportenData.description}</p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sportenData.profiles.map((profile) => (
                    <div key={profile.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col">
                        <div className="p-6 flex-grow">
                            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3">{profile.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{profile.description}</p>
                        </div>
                         <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-b-lg mt-auto">
                            <a 
                                href={profile.youtubeUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                            >
                                Bekijk Intro op YouTube
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Samenvatting</h3>
                <p className="text-gray-700 dark:text-gray-300 italic">{sportenData.summary}</p>
            </div>
        </div>
    );
};

export default SportenView;
