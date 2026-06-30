import { Area, Course } from '../types';

export const TOTAL_HOURS = 3136;

export const AREAS: Record<string, Area> = {
    mat: { id: 'mat', label: "Formação básica em matemática", color: "#378ADD" },
    ccb: { id: 'ccb', label: "Formação básica em ciência da computação", color: "#D4537E" },
    cct: { id: 'cct', label: "Formação tecnológica em ciência da computação", color: "#7F77DD" },
    redes: { id: 'redes', label: "Formação tecnológica em SO e redes", color: "#EF9F27" },
    si: { id: 'si', label: "Formação tecnológica em sistemas de informação", color: "#D85A30" },
    eng: { id: 'eng', label: "Formação tecnológica em engenharia de software", color: "#639922" },
    hum: { id: 'hum', label: "Formação complementar e humanística", color: "#888780" },
    sup: { id: 'sup', label: "Formação suplementar", color: "#1D9E75" },
    tcc: { id: 'tcc', label: "TCC / Estágio", color: "#444441" },
};

const rawCourses = [
    // 1º Semestre
    [1,"QXD0001","Fundamentos de Programação",96,"OBR","ccb"],
    [1,"QXD0227","Introdução à Administração",64,"OBR","hum"],
    [1,"QXD0247","Introdução a Sistemas de Informação",64,"OBR","si"],
    [1,"QXD0109","Pré-Cálculo",32,"OBR","mat"],
    [1,"QXD0056","Matemática Básica",64,"OBR","mat"],

    // 2º Semestre
    [2,"QXD0005","Arquitetura de Computadores",64,"OBR","redes"],
    [2,"QXD0007","Programação Orientada a Objetos",64,"OBR","ccb"],
    [2,"QXD0228","Sistemas de Informação",64,"OBR","si"],
    [2,"QXD0006","Cálculo Diferencial e Integral I",64,"OBR","mat"],
    [2,"QXD0008","Matemática Discreta",64,"OBR","mat"],

    // 3º Semestre
    [3,"QXD0010","Estrutura de Dados",64,"OBR","ccb"],
    [3,"QXD0013","Sistemas Operacionais",64,"OBR","redes"],
    [3,"QXD0248","Análise e Projeto de Sistemas",64,"OBR","si"],
    [3,"QXD0011","Fundamentos de Banco de Dados",64,"OBR","cct"],
    [3,"QXD0249","Gestão de Processos de Negócios",64,"OBR","si"],

    // 4º Semestre
    [4,"QXD0250","Ética, Direito e Legislação",32,"OBR","hum"],
    [4,"QXD0021","Redes de Computadores",64,"OBR","redes"],
    [4,"QXD0251","Requisitos de Software",64,"OBR","eng"],
    [4,"QXD0099","Desenvolvimento de Software para Persistência",64,"OBR","cct"],
    [4,"QXD0229","Gestão da Informação e do Conhecimento",64,"OBR","si"],
    [4,"QXD0012","Probabilidade e Estatística",64,"OBR","mat"],

    // 5º Semestre
    [5,"QXD0022","Auditoria e Segurança de SI",64,"OBR","si"],
    [5,"QXD0232","Educação Ambiental",64,"OBR","hum"],
    [5,"QXD0253","Desenvolvimento de Software para Web",64,"OBR","eng"],
    [5,"QXD0252","Engenharia de Software",64,"OBR","eng"],
    [5,"QXD0230","Gestão da TI",64,"OBR","si"],
    [5,"QXD0017","Lógica para a Computação",64,"OBR","mat"],
    [5,"QXD0078","Introdução ao Desenvolvimento de Jogos",64,"OPT","cct"],
    [5,"QXD0178","Mineração de Dados",64,"OPT","cct"],
    [5,"QXD0134","Cálculo Diferencial e Integral II",64,"OPT","mat"],
    [5,"QXD0026","Contabilidade e Custos",64,"OPT","hum"],
    [5,"QXD0035","Inglês Instrumental I",64,"OPT","hum"],

    // 6º Semestre
    [6,"QXD0256","Interação Humano-Computador",64,"OBR","eng"],
    [6,"QXD0033","Gerência de Redes",64,"OBR","redes"],
    [6,"QXD0075","Redes Sociais",64,"OBR","si"],
    [6,"QXD0254","Gerência de Projetos",64,"OBR","eng"],
    [6,"QXD0255","Empreendedorismo",64,"OBR","si"],
    [6,"QXD0257","Projeto Social",64,"OPT","hum"],
    [6,"QXD0040","Linguagens Formais e Autômatos",64,"OPT","mat"],
    [6,"QXD0116","Álgebra Linear",64,"OPT","mat"],
    [6,"QXD0235","Gestão de Pessoas",64,"OPT","hum"],
    [6,"QXD0210","Sociologia e Antropologia",64,"OPT","hum"],
    [6,"QXD0113","Língua Brasileira de Sinais - LIBRAS",64,"OPT","hum"],
    [6,"QXD0245","Educação em Direitos Humanos",64,"OPT","hum"],

    // 7º Semestre
    [7,"QXD0041","Projeto e Análise de Algoritmos",64,"OBR","ccb"],
    [7,"QXD0110","Projeto de Pesquisa Científica e Tecnológica",32,"OBR","tcc"],
    [7,"QXD0104","Estágio Supervisionado I",160,"OBR","tcc"],
    [7,"QXD0111","TCC I",32,"OBR","tcc"],
    [7,"QXD0505","Avaliação da Interação Humano-Computador",64,"OPT","eng"],
    [7,"QXD0074","Desenvolvimento de Software Concorrente",64,"OPT","cct"],
    [7,"QXD0048","Tópicos Avançados em Redes de Computadores",64,"OPT","redes"],
    [7,"QXD0025","Compiladores",64,"OPT","cct"],
    [7,"QXD0211","User Experience (UX)",64,"OPT","eng"],
    [7,"QXD0259","Qualidade de Software",64,"OPT","eng"],
    [7,"QXD0079","Computação em Nuvem",64,"OPT","redes"],
    [7,"QXD0018","Construção de Sistemas de Gerência de BD",64,"OPT","cct"],
    [7,"QXD0050","Tópicos Especiais I",64,"OPT","si"],
    [7,"QXD0051","Tópicos Especiais II",64,"OPT","si"],
    [7,"QXD0234","Gestão da Produção",64,"OPT","hum"],
    [7,"QXD0233","Finanças",64,"OPT","hum"],
    [7,"QXD0246","Relações Étnico-Raciais e Africanidades",64,"OPT","hum"],
    [7,"QXD0176","Aprendizado de Máquina",64,"OPT","cct"],

    // 8º Semestre
    [8,"QXD0105","Estágio Supervisionado II",160,"OBR","tcc"],
    [8,"QXD0112","TCC II",96,"OBR","tcc"],
    [8,"QXD0170","Criptografia",64,"OPT","cct"],
    [8,"QXD0043","Sistemas Distribuídos",64,"OPT","redes"],
    [8,"QXD0076","Sistemas Multiagentes",64,"OPT","cct"],
    [8,"QXD0047","Tópicos Avançados em Banco de Dados",64,"OPT","cct"],
    [8,"QXD0046","Teoria da Computação",64,"OPT","mat"],
    [8,"QXD0206","Marketing",64,"OPT","hum"],
    [8,"QXD0036","Inglês Instrumental II",64,"OPT","hum"],
    [8,"QXD0347","Tópicos Avançados em Sistemas de Informação",64,"OPT","si"],
    [8,"QXD0044","Sistemas Multimídia",64,"OPT","cct"],
    [8,"QXD0052","Tópicos Especiais III",64,"OPT","si"],
    [8,"QXD0053","Tópicos Especiais IV",64,"OPT","si"],
    [8,"QXD0037","Inteligência Artificial",64,"OPT","cct"],
    [8,"QXD0231","Sistemas Colaborativos",64,"OPT","si"],
    [8,"QXD0027","E-Business",64,"OPT","si"],
];

export const COURSES: Course[] = rawCourses.map((c, i) => ({
    sem: c[0] as number,
    code: c[1] as string,
    name: c[2] as string,
    hours: c[3] as number,
    type: c[4] as 'OBR' | 'OPT',
    area: c[5] as any,
    id: `${c[1]}_${i}`
}));

// Estrutura preparada para o futuro multi-curso
export interface CurriculumConfig {
    id: string;
    name: string;
    institution: string;
    totalHours: number;
    areas: Record<string, Area>;
    courses: Course[];
}

export const currentCurriculum: CurriculumConfig = {
    id: 'si-ufc-quixada-2026',
    name: 'Sistemas de Informação',
    institution: 'UFC Quixadá',
    totalHours: TOTAL_HOURS,
    areas: AREAS,
    courses: COURSES
};