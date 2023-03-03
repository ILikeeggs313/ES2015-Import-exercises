import {choice, remove} from "./helpers";
import fruits from "./foods";

const App = () => {
    let fruit = choice(fruits);
    let noneLeft = remove(fruit, fruits);
    return(
        <div>
            <p> you: I'd like one {fruit}, please </p>
            <p> seller: Here you go: {fruit} </p>
            <p> <b>you </b>: Delicious! Can I have another?</p>
            <p> <b>Seller: </b> Sorry, we have {noneLeft.length} left. </p>
        </div>
    )
}