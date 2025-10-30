import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { StudentData } from '../types';

interface StudentContextType {
  studentData: StudentData;
  updateStudentData: (updater: Partial<StudentData> | ((d: StudentData) => StudentData)) => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

const getDefaultStudentData = (): StudentData => ({
  favorites: [],
  choreos: Array.from({ length: 6 }, (_, i) => ({
    id: `choreo-${i + 1}`,
    name: `Choreo ${i + 1}`,
    duos: [{ id: `duo-1`, name: `Duo 1`, techniques: [], notes: [] }],
  })),
  customTechniques: [],
  notes: {},
});

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [studentData, setStudentData] = useLocalStorage<StudentData>(
    'studentData',
    getDefaultStudentData()
  );
  
  const updateStudentData = (updater: Partial<StudentData> | ((d: StudentData) => StudentData)) => {
    if (typeof updater === 'function') {
      setStudentData(updater);
    } else {
      setStudentData(prev => ({ ...prev, ...updater }));
    }
  };

  const value = {
    studentData: studentData ?? getDefaultStudentData(),
    updateStudentData
  };

  return (
    <StudentContext.Provider value={value}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = (): StudentContextType => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
};
