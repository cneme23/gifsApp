import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () =>{
//Aca defino estados y funciones 
    const [categories, setCategories]= useState(["Dragon Ball", "Pokemon"]);
    
    const onAddCategory = () => {
         setCategories([...categories, "Nuevo valor"] );
    }   
   
    return (
        <>
    {/* Titulo  */}
        <h1>Giff Appppp</h1>
        {/* <button onClick={()=>onAddCategory()}>Agregar categoria</button>
     */}
        <AddCategory setCategories={setCategories}/>
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
