import Grade from "../../School/Grade/Grade";
import Player from "../../Sports/Player/Player";
import "./Main.css";

function Main(): JSX.Element {



    return (
        <div className="Main">

            <Grade name={"Orel"} grade={100}/>
            <Grade name={"Orel"} grade={77}/>
            <Grade name={"Orel"} grade={67}/>
            <Grade name={"Moshe"} grade={57}/>


            {/* <Player name={"Messi"} numOfGoals={100} /> */}
        </div>
    );
}

export default Main;
