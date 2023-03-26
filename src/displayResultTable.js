

const prepareTableHeader = (tabularResults, columns) => {
  tabularResults.push(columns
    .map((c) => c.sourceCol ?
      `${c.colRef}.${c.displayName} (${c.sourceCol})` :
      `${c.colRef}.${c.displayName}`
    )
  )
}

const prepareTableRows = (resultsTable, rows, columns) =>
  rows.map((r) => {
    const row = columns.map((c) => r[c.field]);
    resultsTable.push(row);
  });


export {
  prepareTableHeader,
  prepareTableRows
}