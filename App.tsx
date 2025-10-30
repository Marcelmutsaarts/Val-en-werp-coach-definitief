import React, { useState } from 'react';
import { StudentProvider } from './contexts/StudentContext';
import ToetsinstructieView from './components/ToetsinstructieView';
import LeertakenView from './components/LeertakenView';
import ValbrekenView from './components/ValbrekenView';
import TechniekenView from './components/TechniekenView';
import ChoreosView from './components/ChoreosView';
import SportenView from './components/SportenView';
import { BookOpenIcon, FilmIcon, ListBulletIcon, SparklesIcon, ClipboardDocumentListIcon, TrophyIcon } from './components/icons';

type View = 'toets' | 'leertaken' | 'valbreken' | 'sporten' | 'technieken' | 'choreos';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('toets');

  const renderView = () => {
    switch (activeView) {
      case 'toets':
        return <ToetsinstructieView />;
      case 'leertaken':
        return <LeertakenView />;
      case 'valbreken':
        return <ValbrekenView />;
      case 'sporten':
        return <SportenView />;
      case 'technieken':
        return <TechniekenView />;
      case 'choreos':
        return <ChoreosView />;
      default:
        return <ToetsinstructieView />;
    }
  };

  const navItems = [
    { id: 'toets', label: 'Toetsinstructie', icon: <BookOpenIcon /> },
    { id: 'leertaken', label: 'Leertaken', icon: <ListBulletIcon /> },
    { id: 'valbreken', label: 'Valbreken', icon: <SparklesIcon /> },
    { id: 'sporten', label: 'Sporten', icon: <TrophyIcon /> },
    { id: 'technieken', label: 'Technieken', icon: <FilmIcon /> },
    { id: 'choreos', label: 'Mijn Choreo\'s', icon: <ClipboardDocumentListIcon /> },
  ];

  return (
    <StudentProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">Val & Werp Coach</h1>
            </div>
            <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto -mb-px">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id as View)}
                  className={`flex items-center space-x-2 whitespace-nowrap py-3 px-2 sm:px-4 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeView === item.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  {item.icon}
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4 sm:p-6 lg:p-8">
          {renderView()}
        </main>
      </div>
    </StudentProvider>
  );
};

export default App;
