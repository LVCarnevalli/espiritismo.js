export type Question = {
  answer: string;
  category: string;
  id: string;
  question: string;
};

export type OLivroDosEspiritos = {
  questions: Question[];
};

export type DynamicQuestion = {
  index: number;
  readed: any[];
};

export type CommonQuestion = {
  index: number;
};
