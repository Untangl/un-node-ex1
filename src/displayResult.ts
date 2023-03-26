import {table} from 'table';
import {
  prepareTableHeader,
  prepareTableRows
} from './displayResultTable';

const displayAnalyses = (analyses: [Analysis]) =>
  ['error', 'warn', 'info', 'debug'].map(level =>
    analyses
      .filter((a: Analysis) => a.level === level)
      .map((a: Analysis) => console.log(`${a.level} ${a.oref} ${a.message} ${a.detail}`))
  )

/**
 * Take the converted data and format it in a textual table for the command line.
 * Also display possible issues in analyses, ordered by severity.
 * @param resultData
 */
const displayConvertedFile = (resultData: ConvertedData) => {
  const {columns, data: rows, analyses} = resultData;
  const tabularResults: Array<Array<String>> = [];
  prepareTableHeader(tabularResults, columns);
  prepareTableRows(tabularResults, rows, columns);
  const resultTable = table(tabularResults);
  console.log(`Converted data:`);
  console.log(resultTable);
  console.log(`Analyses:`);
  displayAnalyses(analyses);
}

export default displayConvertedFile;