import './Insight.css'
import Insight from './Insight'

function Insights(props) { 

    return <div>
        <div className="title">
            {props.text}
        </div>
        <div className="insights-stack">
        <Insight welcome="Insight Statement 1" text= 
            "Most workers in this field stated they view their clients as out of touch or uninformed on important details of their projects, leading to tension and distrust in the process of building. We think that easing this process could be done through better communication between both parties and more accessible information on pricing, timelines and the overall construction process." />
        <Insight welcome="Insight Statement 2" text=
        "Engineers interviewed frequently mentioned issues in organization, such as managing multiple projects at once, organizing meetings and communications with clients and researching key information such as zoning and construction laws. Different restrictions and obstacles are faced by each engineer based on the focus of their job." />
        <Insight welcome="Insight Statement 3" text=
        "Civil engineering is often viewed as a typical engineering job when it often is more “dynamic” than most purely technical office jobs. New engineers often enter the field not aware of other skills required. Engineers, in smaller companies especially, have to develop team work skills and communication methods quickly to be successful in communicating with subcontractors and making client connections in the field." />

        </div>
       
    </div>
}

export default Insights
