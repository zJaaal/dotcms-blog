export type Filter = {
  year: string;
  page: number;
};

export type SetFilterProps = (lastFilter: Filter) => Filter;
