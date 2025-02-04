import { useState } from "react";
import { AddCategory } from "./components";
import { GifGrid } from "./components";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const onAddCategory = (newCategory) => {
if(categories.includes(newCategory)) return; //validar que no ingrese valores duplicados
    
      setCategories([newCategory,...categories]);
  };

  return (
    <>

        <h1>GifExpertApp</h1>


        <AddCategory 
            onNewCategory={ (value) => onAddCategory(value) }
        />

        { 
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category } 
                    category={ category } />
            ))
        }




    </>
)
};
