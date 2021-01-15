import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateTimeDifferential = (timeMachine:TimeMachine) => 
{
    const balance = calculateTimeBalance (timeMachine);
    const TimeDifferential=balance.year*365*24+balance.month*30*24+balance.day*24;

    return TimeDifferential;
}

export default calculateTimeDifferential;
