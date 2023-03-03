import { useState } from "react";
import "./Grade.css";
import image from '../../../Images/kitten.png';

interface GradeProps {
    name: string;
    grade?: number;
}
function Grade(props: GradeProps): JSX.Element {
    const [grade, setGrade] = useState<number>(props.grade || 0);
    const amitCondition = (grade > 89) ? 'excellent' : (grade > 74) ? 'good' : (grade > 60) ? 'ok' : 'bad'

    const addPoint = () => {
        console.log("Im going to add one point");
        //Not possible since props is read only !!!
        // props.grade = (props.grade || 0) + 1;
        if (grade === 100) {
            return;
        }
        setGrade(x => x + 1);
    }

    const subPoint = () => {

        console.log("Im going to sub one point");
        //Not possible since props is read only !!!
        // props.grade = (props.grade || 0) - 1;
        if (grade === 0) {
            return;
        }
        setGrade(x => x - 1);
    }


    return (
        <div className="Grade">
            <p>name : {props.name}</p>
            <div className="row">
                {(grade !== 100) && <button onClick={addPoint}>+</button>}
                {
                    (props.grade) ? <p className={amitCondition}> {grade}</p> : <p className="evil" >No grade yet</p>
                }
                {(grade !== 0) && <button onClick={subPoint}>-</button>}
            </div>
        </div>
    );
}

export default Grade;
