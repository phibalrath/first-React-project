import React from 'react';
//import ListChild from './listChildComp'

const ListComponent = () => {
    let [array, setArray] = React.useState(['Apples', 'Oranges', 'Peaches'])

    const newList = array.map((item, index) => {
        return <li key={index}>
            {item}
        </li>
    })

        //save data and add to array
        const onAddItem = () => {
            setArray([...array, document.getElementById('inputValue').value])
        }    
    return (
        <div>
            <input id= 'inputValue'  type="text" />
            <button onClick = {onAddItem}>Add Item</button>
            {newList}
            {/* use props to add child element
            <ListChild theList = {newList} /> */}
        </div>
    )
}

export default ListComponent;

