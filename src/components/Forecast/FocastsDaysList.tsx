import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import ForecastListElem from "../../types/ForecastListElem";
import ForecastDetail from "./ForecastDetail";
import ForecastShort from "./ForecastShort";
import { IShortForecast } from "../../models/IShortForecast";

interface ForecastDaysListProps {
    list: [ForecastListElem[]],
    shortList: IShortForecast
}

const ForecastDaysList: React.FC<ForecastDaysListProps> = ({list, shortList}) => {

    const dailyForecast = shortList.data.slice(0, 5);

    return (
        <Accordion>
            {dailyForecast.map((day, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <ForecastShort day={day}/>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ForecastDetail day={list[idx]}/>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default ForecastDaysList;