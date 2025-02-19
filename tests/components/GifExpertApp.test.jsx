import { fireEvent, render, screen } from "@testing-library/react"
import {  GifExpertApp} from "../../src/GifExpertApp";
describe('Probando el componente principal <GifExpertApp/>', () => { 
    
    test('debe cambiar el valor del input al teclear', () => { 

        render(<GifExpertApp />);
        // extraemos el valor del input 
        const input = screen.getByRole('textbox');
        // disparamos el evento onChange y enviamos el vamor de One punch al input
        fireEvent.input(input,{target: {value:'One Punch'}});
        // verificamos si el input a cambiado al valor enviado One Punch
        expect(input.value).toBe('One Punch');
        
    })
 })

