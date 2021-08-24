import * as csvUtils from './csv.utils';

describe('CSV utils', () => {
  const csvParsedData = [
    [
      'id',
      'username',
      'firstName',
      'lastName',
      'city',
      'address',
      'zip',
      'creditCardCode',
      'cvv',
      'name',
      'date',
    ],
    [
      '123e4567-e89b-12d3-a456-426614174000',
      'test',
      'test',
      'test',
      'Lviv',
      'some address',
      '1111',
      '43143144314315335',
      '812',
      'test',
      'Tue Aug 24 2021 12:59:20 GMT+0300 (Eastern European Summer Time)',
    ],
  ];

  it('should parse csv file', async () => {
    const expectedResults = csvParsedData;
    const actualResult = await csvUtils.parseCsvFile(
      './tests/mock-csv/fdf9ead026f831b6575f885fa91f4e3f',
    );

    expect(expectedResults).toEqual(actualResult);
  });

  it('should convert csv-parsed data to object', async () => {
    const givenCsvParsedData = csvParsedData;
    const expectedResult = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      username: 'test',
      firstName: 'test',
      lastName: 'test',
      city: 'Lviv',
      address: 'some address',
      zip: '1111',
      creditCardCode: '43143144314315335',
      cvv: '812',
      name: 'test',
      date: 'Tue Aug 24 2021 12:59:20 GMT+0300 (Eastern European Summer Time)',
    };
    const actualResult = await csvUtils.convertParsedDataToObj(
      givenCsvParsedData,
    );

    expect(actualResult).toEqual(expectedResult);
  });
});
