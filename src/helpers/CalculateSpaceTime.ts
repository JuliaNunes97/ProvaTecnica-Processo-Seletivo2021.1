import SimpleDate from "../interfaces/SimpleDate";
import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateSpaceTime = (timeMachine:TimeMachine) => 
{
    const balance = calculateTimeBalance (timeMachine);
    const SpaceTime=Math.sqrt(Math.pow(balance.year,2)+Math.pow(balance.month,2)+Math.pow(balance.day,2));

    return SpaceTime;
}

export default calculateSpaceTime;
