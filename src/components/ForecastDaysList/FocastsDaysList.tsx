import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import ForecastListElem from "../../types/ForecastListElem";
import ForecastDetail from "../ForecastDetail/ForecastDetail";
import ForecastShort from "../ForecastShort/ForecastShort";

interface ForecastDaysListProps {
    list: [ForecastListElem[]]
}

const ForecastDaysList: React.FC<ForecastDaysListProps> = ({list}) => {
    return (
        <Accordion>
            {list.map((day, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <ForecastShort day={day}/>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <ForecastDetail day={day}/>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default ForecastDaysList;