//this file should export 2 array of helper functions:

//choice (items): returns a randomly selected item from array of items
//remove(items, item): removes the first matching item from items,
//if item exists, and returns it. Otherwise returns undefined.

const choice = ({items}) => {
    let idx = Math.floor(Math.random() * items.length);
    return(
        <div>
            <p> Items: {idx} </p>
        </div>
    )
    
}

//return copy of array w/o first apperance of item

const remove = (item, items) => {
    for(let i = 0; i < items.length; i++){
        if(items[i] === item){
            return[...items.slice(0,1), ...items.slice(i+1)];
        }
    }
}

export default {choice, remove};