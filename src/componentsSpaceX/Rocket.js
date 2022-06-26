import './Rocket.css';

export default function Rocket({data}) {

    return (
        <div>
            <ul>
                <li>{data.mission_name}</li>
                <li>{data.launch_year}</li>
                <img src={data.links.mission_patch_small} alt={data.mission_name}/>
            </ul>
        </div>
    );
}