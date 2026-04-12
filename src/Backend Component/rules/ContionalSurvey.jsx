// import { useEffect, useState } from "react";
// import SurveyFormValidation from "../survey recommendation/SurveyFormValidation";

// const ContionalSurvey = () => {
//     const [services, setServices] = useState([]);
//     const [objectives, setObjectives] = useState([]);
//     const [selectedService, setSelectedService] = useState(null);
//     const [selectedBasin, setSelectedBasin] = useState(null);
//     const [methods, setMethods] = useState([]);

//     useEffect(() => {
//         // Fetch services
//         fetch("http://localhost:8000/data")
//             .then(res => res.json())
//             .then(data => setServices(data))
//             .catch(err => console.error(err));

//         // Fetch objectives
//         fetch("http://localhost:8000/surveyObjectives")
//             .then(res => res.json())
//             .then(data => setObjectives(data))
//             .catch(err => console.error(err));
//     }, []);

//     // When user selects objective
//     const handleObjectiveSelect = (key) => {
//         const service = services.find(item => item.key === key);
//         setSelectedService(service);
//         setSelectedBasin(null);
//         setMethods([]);
//     };

//     // When user selects basin
//     const handleBasinSelect = (basinName) => {
//         const basin = selectedService?.basins.find(b => b.name === basinName);
//         setSelectedBasin(basin);
//         setMethods(basin?.methods || []);
//     };

//     return (
//         <SurveyFormValidation
//             objectives={objectives}
//             selectedService={selectedService}
//             selectedBasin={selectedBasin}
//             methods={methods}
//             onObjectiveSelect={handleObjectiveSelect}
//             onBasinSelect={handleBasinSelect}
//         />
//     );
// };

// export default ContionalSurvey;