import { stub } from 'sinon'; 
import { v1Parser, v2Parser } from '../../src/services/parser.service';

describe('request api parser v1',  () => {
    const req = {
        "data": "JOHN0000MICHAEL0009994567"
       }

    const dummy = {
        "data": ''
       };

       const res: any = {};
       const next: any = {};
       const resultV1 = { firstName: 'JOHN0000', lastName: 'MICHAEL000', clientId: '9994567' };
       const resultV2 = { firstName: 'JOHN', lastName: 'MICHAEL', clientId: '999-4567' };

    it('should parsed data successfully for V1', async () => {
        try {
            const processedData = await v1Parser(req);
            expect(processedData).toEqual(resultV1);
        } catch (err) {
            throw err;
        }
    });

    it('should throw error for V2', async () => {
        try {
            const processedData = await v2Parser(req);
            expect(processedData).toEqual(resultV2);
        } catch (err) {
            throw err;
        }
    });
    it('should throw error for V2', async () => {
        try {
            const processedData = await v2Parser(1234);
            expect(processedData).toEqual(undefined);
        } catch (err) {
            throw err;
        }
    });
});