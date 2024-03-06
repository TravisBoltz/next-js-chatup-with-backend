// import React from "react";
// import { Model } from "survey-core";
// import { Survey } from "survey-react-ui";
// import "survey-core/defaultV2.min.css";
// import "./index.css";
// import { json } from "./json";

// const storageItemKey = "my-survey";

// function saveSurveyData (survey) {
//     const data = survey.data;
//     data.pageNo = survey.currentPageNo;
//     window.localStorage.setItem(storageItemKey, JSON.stringify(data));
// }
// function SurveyComponent() {
//     const survey = new Model(json);
//     survey.onComplete.add((sender, options) => {
//         console.log(JSON.stringify(sender.data, null, 3));
//     });
//     // Save survey results to the local storage
//     survey.onValueChanged.add(saveSurveyData);
//     survey.onCurrentPageChanged.add(saveSurveyData);
    
//     // Restore survey results
//     const prevData = window.localStorage.getItem(storageItemKey) || null;
//     if (prevData) {
//         const data = JSON.parse(prevData);
//         survey.data = data;
//         if (data.pageNo) {
//             survey.currentPageNo = data.pageNo;
//         }
//     }
    
//     // Empty the local storage after the survey is completed
//     survey.onComplete.add(() => {
//         window.localStorage.setItem(storageItemKey, "");
//     });
//     return (<Survey model={survey} />);
// }

// export default SurveyComponent;