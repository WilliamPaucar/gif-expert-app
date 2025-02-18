import { GifItem } from "../../src/components/GifItem";
import {render, screen} from "@testing-library/react"
 
describe('Probando el componente <GifItem/> ', () => { 
      const title= 'William'
      const url= 'http://localhost/www.josecita.com'
    test("debe hacer match con el snapshot", () => {

     const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
   });

   test('debe mostrar la imagen conr URL y el ALT indicado', () => { 

      render (<GifItem title={title} url={url}/>);
      const {src,alt}=screen.getByRole('img')
      expect(src).toBe(url);
      expect(alt).toBe(alt);
   })
   test('debe mostrar el titulo en el componente', () => { 

      render (<GifItem title={title} url={url}/>);

      expect(screen.getByText(title)).toBeTruthy;

    })
}) 