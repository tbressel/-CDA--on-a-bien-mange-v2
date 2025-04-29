export type RootStackParamList = {
  Home: undefined;
  History: undefined;
  Articles: undefined;
  Result: { data: any };
};


export type HistoryRow = {
  id: number;
  type: string;
  query: string;
  timestamp: string;
};
