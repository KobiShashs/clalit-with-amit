import { useState } from "react";
import "./Player.css";

interface PlayerProps{
    name: string;
    numOfGoals?: number
}
function Player(props: PlayerProps): JSX.Element {
    const [numOfGoals, setNumOfGoals] = useState<number>(props.numOfGoals || 0);

    const addGoal = () => {
        console.log('Im going to add goal');
        setNumOfGoals(keren => keren + 1);
    }

    const subGoal = () => {
        console.log('Im going to sub goal');
        setNumOfGoals(liat => liat - 1);
        // props.numOfGoals--;
    }

    return (
        <div className="Player">
            <p>{props.name}</p>
            <button onClick={subGoal}>-</button>
            <span>{numOfGoals}</span>
            <button onClick={addGoal}>+</button>
        </div>
    );
}

export default Player;
