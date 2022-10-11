import { useState } from "react";
export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setinputValue] = useState("");
    
    const onInputChange = (event) =>{
        setinputValue(event.target.value);
    };

    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length <= 1)return;
        onNewCategory(inputValue.trim());
        // setCategories(categories =>[...categories,inputValue]);
        setinputValue("");
    }

    return (
    <>
    <form onSubmit={onSubmit}>
    
    <input
      type="text"
      placeholder="Buscar Gifs"
      value= {inputValue}
      onChange={onInputChange}
    />
    
    </form>
    
    </>
  )
}
