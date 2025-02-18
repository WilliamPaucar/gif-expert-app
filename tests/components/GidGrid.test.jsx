import { render, screen } from "@testing-library/react"
import {GifGrid} from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


jest.mock("../../src/hooks/useFetchGifs");
describe('Probando el component <GriGrid/>', () => { 
    const category ='One punch'
    test('debe mostrar el loading el iniciar el component', () => {
        // Simula el CustomHook useFetchingGifs y agrega datos necesarios 
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        })
         render(<GifGrid category={category}/>);
        //  screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));


     })

     test('debe mostrar items cuando se cargan las imagenes useFetchingGifs', () => { 
        
        const gifs=[
            {
                id: 24,
                title: 'Naruto',
                url: 'htp/ww/com/william'
        },
        {
            
                id: 25,
                title: 'Pikolo',
                url: 'htp/ww/com/Pikolo'
            }
        ];

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false
        })
        render(<GifGrid category={category} />)
        screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
      })
 })