export type DateQuery = {
  luceneQuery: string;
  from: string;
  to: string;
};

export type QueryTypes = string | DateQuery;
