import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () =>{
//Aca defino estados y funciones 
    const [categories, setCategories]= useState(["Dragon Ball", "Pokemon"]);
    
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory))  return; 
        
         setCategories([...categories, newCategory] );
    }   
   
    return (
        <>
    {/* Titulo  */}
        <h1>Giff Appppp</h1>
        {/* <button onClick={()=>onAddCategory()}>Agregar categoria</button>
     */}
        <AddCategory onNewCategory={onAddCategory} />
    {/* Listado de categorias */}
    <ol>
        {
            categories.map( category =>{
                return <li key={category}> {category} </li>
            })
        }


    </ol>
        </>
    )    
}
