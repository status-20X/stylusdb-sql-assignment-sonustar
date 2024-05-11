const readCSV = require('../../src/csvReader');

test('Read Csv file ' , async()=>{

    const data = await readCSV('./sample.csv');
    expect(data.length).toBe(3);
    expect(data[1].name).toBe("Jane");
    expect(data[2].name).toBe("Bob");
})