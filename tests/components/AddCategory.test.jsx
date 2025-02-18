
import {fireEvent, render, screen} from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('probando el componente <AddCategory/>', () => { 

    test('debe cambiar el valor del input al teclear', () => { 

        render(<AddCategory onNewCategory={()=>{}}/>);
        // extraemos el valor del input 
        const input = screen.getByRole('textbox');
        // disparamos el evento onChange y enviamos el vamor de One punch al input
        fireEvent.input(input,{target: {value:'One Punch'}});
        // verificamos si el input a cambiado al valor enviado One Punch
        expect(input.value).toBe('One Punch');
    })
    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputValue ='Saitama';
        const onNewCategory =jest.fn();
        // TODO:?
        render(<AddCategory onNewCategory={onNewCategory}/>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input,{target: {value:inputValue}});
        // disparamos el evento sumit por lo tanto input debe ser igual a ""
        fireEvent.submit(form);
        expect(input.value).toBe("");
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        
    })
    
    test('no debe llamar el onNewCategory si el input esta vacio', () => { 
        const onNewCategory =jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);

        
       })
 })