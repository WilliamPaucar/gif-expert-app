import { render, screen } from "@testing-library/react"
import {  GifExpertApp} from "../../src/GifExpertApp";
describe('Probando el componente principal <GifExpertApp/>', () => { 
    
    test('debe returnar la estructura principal', () => {
        render(<GifExpertApp/>)
        screen.debug();
     })
 })

