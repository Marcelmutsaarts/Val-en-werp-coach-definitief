import React from 'react';
import { assessmentData } from '../data';

const Card: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
        <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">{title}</h3>
        {children}
    </div>
);

const ToetsinstructieView: React.FC = () => {
    return (
        <div className="space-y-8">
            <header>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">{assessmentData.title}</h2>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{assessmentData.description}</p>
            </header>

            <Card title={assessmentData.uitvoering.title} className="col-span-1 md:col-span-2">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{assessmentData.uitvoering.intro}</p>
                
                <h4 className="font-semibold text-md text-gray-800 dark:text-gray-200 mt-4 mb-2">{assessmentData.uitvoering.bevat.title}</h4>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    {assessmentData.uitvoering.bevat.points.map((point, index) => <li key={index}>{point}</li>)}
                </ul>

                <h4 className="font-semibold text-md text-gray-800 dark:text-gray-200 mt-4 mb-2">{assessmentData.uitvoering.presentatie.title}</h4>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    {assessmentData.uitvoering.presentatie.points.map((point, index) => <li key={index}>{point}</li>)}
                </ul>
                
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic">{assessmentData.uitvoering.contingency}</p>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
                <Card title={assessmentData.summative.title}>
                    <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300">
                        {assessmentData.summative.points.map((point, index) => <li key={index}>{point}</li>)}
                    </ul>
                </Card>

                <Card title={assessmentData.formative.title}>
                    <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300">
                        {assessmentData.formative.points.map((point, index) => <li key={index}>{point}</li>)}
                    </ul>
                </Card>
            </div>
            
            <Card title={assessmentData.attitude.title} className="col-span-1 md:col-span-2">
                 <p className="text-gray-700 dark:text-gray-300">{assessmentData.attitude.description}</p>
            </Card>
        </div>
    );
};

export default ToetsinstructieView;