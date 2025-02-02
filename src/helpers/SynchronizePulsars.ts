import SimpleDate from "../interfaces/SimpleDate";
import SpacePoint from "../interfaces/SpacePoint";
import { TimeMachine } from "../entities/TimeMachine";
import calculateSpaceTime from "./CalculateSpaceTime";

const synchronizePulsars = (timeMachine:TimeMachine) => 
{
    const SpaceTime = calculateSpaceTime(timeMachine);
    const Pulsars = Math.sqrt(Math.pow(timeMachine.currentPosition.x,2)+Math.pow(timeMachine.currentPosition.y,2)+Math.pow(timeMachine.currentPosition.z,2)/SpaceTime)
    
    return Pulsars;
}

export default synchronizePulsars;
