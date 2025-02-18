import { any } from 'prop-types';
import {getGifs} from '../../src/helpers/getGifs'
describe('Probando el Helper GetGifs()', () => { 


test('debe retornar un array de Gifs', async () => { 

    const gifs = await getGifs('One Punch');
    // console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0);
        // comparar que el array retornado tenga los atributos requeridos
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url:expect.any(String),
        })
 })

 })