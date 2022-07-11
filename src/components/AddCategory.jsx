import { PropTypes } from "prop-types";
import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onImputChange = ({target}) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //setCategories(categories =>[inputValue, ...categories]);
        setinputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <>
            <form onSubmit={onSubmit} aria-label="form">
                <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onImputChange} />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
