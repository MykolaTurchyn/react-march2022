import {useEffect, useState} from "react";
import {getRockets} from "../services/SpaceXAPI";
import Rocket from "./Rocket";
export default function Rockets() {
    let [rockets, setRockets] = useState([]);

    useEffect(() => {
        getRockets().then(value => setRockets([...value]))
    }, [])
    return (
        <div>
            {
                rockets.map((data, index) =>
                    data && (data.launch_year !== '2020' ? <Rocket key={index} data={data}/> : null)
                )
            }
        </div>
    );
}
