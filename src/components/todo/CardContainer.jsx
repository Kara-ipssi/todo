import Card from "./Card";

function CardContainer(){



    return(
        <ul>
            <Card contenu="Penser à CamCam" key="Task1"/>
            <Card contenu="Penser trois fois à camcamcam" key="Task2"/>
        </ul>
    )
}

export default CardContainer;