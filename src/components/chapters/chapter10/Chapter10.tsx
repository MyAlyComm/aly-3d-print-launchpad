
import { Conclusion } from "./Conclusion";
import { FinalAssessment } from "./FinalAssessment";
import { FutureProofingStrategies } from "./FutureProofingStrategies";
import { ImplementationPlan } from "./ImplementationPlan";
import { IndustryShifts } from "./IndustryShifts";
import { Introduction } from "./Introduction";
import { StrategicPositioning } from "./StrategicPositioning";

const allSections = [
  () => <Introduction />,
  () => <IndustryShifts />,
  () => <StrategicPositioning />,
  () => <FutureProofingStrategies />,
  () => <ImplementationPlan />,
  () => <FinalAssessment />,
  () => <Conclusion />
];

export { allSections };
