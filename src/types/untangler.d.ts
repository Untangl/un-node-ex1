declare interface Analysis {
  message: string;
  sheetname: string;
  oref: string;
  tref: string;
  level: string;
  scope: string;
  detail: string;
}

declare interface Column {
  displayName: string;
  field: string;
  type: string;
  colRef: string;
  isBlank: string;
  sourceCol: string;
}

declare interface Row {
  [field: string]: string | number;
}

declare interface ConvertedData {
  columns?: [Column];
  data?: [Row];
  analyses: [Analysis]
}