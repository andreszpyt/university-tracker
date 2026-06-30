export type AreaId = 'mat' | 'ccb' | 'cct' | 'redes' | 'si' | 'eng' | 'hum' | 'sup' | 'tcc';

export interface Area {
    id: AreaId;
    label: string;
    color: string;
}

export type CourseType = 'OBR' | 'OPT';
export type CourseStatus = 'pending' | 'progress' | 'done' | 'failed';

export interface Course {
    id: string;
    sem: number;
    code: string;
    name: string;
    hours: number;
    type: CourseType;
    area: AreaId;
}

export interface CourseState {
    status: CourseStatus;
    grade: number | null;
}

export type UserProgress = Record<string, CourseState>;

// Adicione ao final do src/types/index.ts

export interface Curriculum {
    id: string;
    name: string;
    institution: string;
    totalHours: number;
    areas: Record<string, Area>;
    courses: Course[];
}