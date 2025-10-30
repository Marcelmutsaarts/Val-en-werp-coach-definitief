
export interface Technique {
  id: string;
  name: string;
  sportProfileId: number;
  fallDirection: 'voorwaarts' | 'achterwaarts' | 'zijwaarts';
  difficulty: 'laag' | 'hoog' | 'uitdagend';
  youtubeUrl: string;
  notes?: string;
}

export interface SportProfile {
  id: number;
  name:string;
}

export interface ChoreoTechnique {
  id: string; // unique instance id
  techniqueId: string; // refers to Technique.id
}

export interface Note {
  id: string;
  text: string;
  position: number; // percentage from 0 to 100
}

export interface Duo {
  id: string;
  name: string;
  techniques: ChoreoTechnique[];
  notes: Note[];
}

export interface Choreo {
  id: string;
  name: string;
  duos: Duo[];
}

export interface StudentData {
  favorites: string[]; // array of technique ids
  choreos: Choreo[];
  customTechniques: Technique[];
  notes: { [techniqueId: string]: string };
}

export interface DraggedItem {
  technique: ChoreoTechnique;
  sourceDuoId: string;
  sourceIndex: number;
}