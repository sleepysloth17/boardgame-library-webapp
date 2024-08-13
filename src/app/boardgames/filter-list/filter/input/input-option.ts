export interface InputOption<T> {
  label: string;
  value: T;
  default?: boolean;
}

export interface UniqueInputOption<T> {
  id: string;
  data: InputOption<T>;
}
