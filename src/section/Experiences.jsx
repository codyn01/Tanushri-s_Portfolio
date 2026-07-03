/** 
 * @copyright 2025 Looknath
 * @license Apache-2.0
*/

import { Timeline } from "../components/Timeline"
import { experiences } from "../constants"

const Experiences = ()=>{
    return (
        <div className="w-full">
            <Timeline data={experiences} />
        </div>
    )
}

export default Experiences