import * as fs from 'fs';
import * as parser from 'csv-parse';
import { UserParsedCsv } from '../models/user/user.types';

export const convertParsedDataToObj = (
  parsedData: string[][],
): UserParsedCsv => {
  const csvObj = {};
  const columnNames = parsedData[0];
  const values = parsedData[1];

  for (let i = 0; i < columnNames.length; i++) {
    csvObj[columnNames[i]] = values[i];
  }

  return csvObj as UserParsedCsv;
};

export const parseCsvFile = (path): Promise<string[][]> => {
  const source = fs.createReadStream(path);
  const csvData = [];

  const parserClient = parser({
    quote: '"',
    ltrim: true,
    rtrim: true,
    delimiter: ',',
    bom: true,
  });

  parserClient.on('readable', function () {
    let record;
    while ((record = parserClient.read())) {
      csvData.push(record);
    }
  });

  const stream = source.pipe(parserClient);
  return new Promise((resolve) => {
    stream.on('end', () => resolve(csvData));
  });
};
