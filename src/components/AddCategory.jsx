import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = ({target}) => {
       setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <=1) return;
        

        onNewCategory( inputValue.trim());
        setInputValue('');
    
       // props.setCategories([...props.categories, inputValue]); 
        //console.log(props.categories);

    }

    return (
        <form onSubmit={ onSubmit }>
             <input 
                 type="text"
                 placeholder = "Buscar gifs"
                 value={ inputValue }
                 onChange={ onInputChange }
            />
       </form>
    )
}

