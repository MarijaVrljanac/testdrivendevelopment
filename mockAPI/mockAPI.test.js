const { mockFunction, addInArray, removeFromArray } = require("./mockAPI");

const axios = require('axios');
jest.mock('axios')

describe('Mocking', () => {
    test('basic functionality', async() => {
        const response = {
            "data": {
                "country": [
                    {
                        "country_id": "GH",
                        "probability": 0.224
                    },
                    {
                        "country_id": "PH",
                        "probability": 0.084
                    },
                    {
                        "country_id": "NG",
                        "probability": 0.073
                    },
                    {
                        "country_id": "US",
                        "probability": 0.061
                    },
                    {
                        "country_id": "NE",
                        "probability": 0.034
                    }
                ],
                "name": "nathaniel"
            }
        }

        axios.get.mockResolvedValueOnce(response); 
        const result = await mockFunction();
        expect(axios.get).toHaveBeenCalledWith('https://api.nationalize.io/?name=nathaniel');  
        expect(result).toEqual(response.data.country);
        expect(addInArray([{
            "country_id": "DE",
            "probability": 0.055
        },
        {
            "country_id": "CH",
            "probability": 0.0785 
        },
        {
            "country_id": "AT",
            "probability": 0.0688
        },
        {
            "country_id": "UK",
            "probability": 0.0958 
        },
        {
            "country_id": "SRB",
            "probability": 0.0389 
        },
        {
            "country_id": "GR",
            "probability": 0.045 
        }
    ],        result, 1)).toEqual(expect.arrayContaining(result));

        expect(removeFromArray([
            { country_id: 'GH', probability: 0.224 },
            { country_id: 'PH', probability: 0.084 },
            { country_id: 'NG', probability: 0.073 },
            { country_id: 'NE', probability: 0.034 },           
          ], 
          result)).toEqual(expect.not.arrayContaining(result));
    });   
})
