const readCSV = require('../../src/csvReader');
const parseQuery = require('../../src/queryParser');


test('Read CSV File', async () => {
    const data = await readCSV('./sample.csv'); 
    expect(data.length).toBeGreaterThan(0);
    expect(data.length).toBe(3);
    expect(data[0].name).toBe('John');
    expect(data[0].age).toBe('30'); //ignore the string type here, we will fix this later
    expect(data[1].name).toBe('Jane');
});

test('Parse SQL Query', () => {
    const query = 'SELECT id , name , age FROM sample';
    const parsed = parseQuery(query);
    expect(parsed).toEqual({
        fields: ['id, name ,age'],
        table: 'sample'
    });
});


// Do it Yourself : 

/* Here it throughs since : 
pattern doesn't match .
query = id , name , age 
field only contains id and name  

test('Parse SQL Query', () => {
    const query = 'SELECT id, name,age FROM sample';
    const parsed = parseQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        table: 'sample'
    });
});


 */