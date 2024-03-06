'use client';

'use client';

import React, { useEffect } from 'react';

import { Model } from 'survey-core';

import 'survey-core/defaultV2.min.css';
import { addDoc, collection } from 'firebase/firestore';
import { realtimeDb } from '@/dbConfig/firebase';
import { ref, push } from 'firebase/database';
import Footer from '@/components/footer';
import MarginWidthWrapperAtBothSides from '@/components/margin-width-wrapper-at-both-sides';
import { Survey } from 'survey-react-ui';
import {  ref as rtdbRef, push as rtdbPush ,set } from 'firebase/database';

import 'firebase/firestore';

import {app, analytics,db,rtdb } from '@/dbConfig/firebase';
import { track } from '@vercel/analytics';



const themeJson = {

  backgroundOpacity: 1,

  themeName: 'threedimensional',

  isPanelless: false,

  colorPalette: 'light',

  cssVariables: {

    '--sjs-general-backcolor': 'rgba(248, 248, 248, 1)',

    '--sjs-general-backcolor-dark': 'rgba(242, 242, 242, 1)',

    '--sjs-general-backcolor-dim': '#e7e7e7',

    '--sjs-general-backcolor-dim-light': 'rgba(182, 157, 72, 1)',

    '--sjs-general-backcolor-dim-dark': 'rgba(242, 242, 242, 1)',

    '--sjs-general-forecolor': 'rgba(0, 0, 0, 0.91)',

    '--sjs-general-forecolor-light': 'rgba(0, 0, 0, 0.45)',

    '--sjs-general-dim-forecolor': 'rgba(0, 0, 0, 0.91)',

    '--sjs-general-dim-forecolor-light': 'rgba(0, 0, 0, 0.45)',

    '--sjs-primary-backcolor': '#b69d48',

    '--sjs-primary-backcolor-light': 'rgba(NaN, NaN, NaN, 0.1)',

    '--sjs-primary-backcolor-dark': 'rgba(47, 77, 143, 1)',

    '--sjs-primary-forecolor': 'rgba(255, 255, 255, 1)',

    '--sjs-primary-forecolor-light': 'rgba(255, 255, 255, 0.25)',

    '--sjs-base-unit': '8px',

    '--sjs-corner-radius': '8px',

    '--sjs-secondary-backcolor': 'rgba(255, 152, 20, 1)',

    '--sjs-secondary-backcolor-light': 'rgba(255, 152, 20, 0.1)',

    '--sjs-secondary-backcolor-semi-light': 'rgba(255, 152, 20, 0.25)',

    '--sjs-secondary-forecolor': 'rgba(255, 255, 255, 1)',

    '--sjs-secondary-forecolor-light': 'rgba(255, 255, 255, 0.25)',

    '--sjs-shadow-small':

      '0px 2px 0px 2px rgba(228, 228, 228, 1),0px 0px 0px 2px rgba(228, 228, 228, 1)',

    '--sjs-shadow-medium':

      '0px 0px 0px 2px rgba(228, 228, 228, 1),0px 8px 0px 2px rgba(228, 228, 228, 1)',

    '--sjs-shadow-large': '0px 0px 0px 0px rgba(0, 0, 0, 0.1)',

    '--sjs-shadow-inner':

      '0px 0px 0px 2px rgba(228, 228, 228, 1), 0px -2px 0px 2px rgba(228, 228, 228, 1)',

    '--sjs-shadow-inner-reset':

      '0px 0px 0px 0px rgba(228, 228, 228, 1), 0px 0px 0px 0px rgba(228, 228, 228, 1)',

    '--sjs-border-light': 'rgba(0, 0, 0, 0.08)',

    '--sjs-border-default': 'rgba(0, 0, 0, 0.08)',

    '--sjs-border-inside': 'rgba(0, 0, 0, 0.16)',

    '--sjs-special-red': 'rgba(229, 10, 62, 1)',

    '--sjs-special-red-light': 'rgba(229, 10, 62, 0.1)',

    '--sjs-special-red-forecolor': 'rgba(255, 255, 255, 1)',

    '--sjs-special-green': 'rgba(25, 179, 148, 1)',

    '--sjs-special-green-light': 'rgba(25, 179, 148, 0.1)',

    '--sjs-special-green-forecolor': 'rgba(255, 255, 255, 1)',

    '--sjs-special-blue': 'rgba(67, 127, 217, 1)',

    '--sjs-special-blue-light': 'rgba(67, 127, 217, 0.1)',

    '--sjs-special-blue-forecolor': 'rgba(255, 255, 255, 1)',

    '--sjs-special-yellow': 'rgba(255, 152, 20, 1)',

    '--sjs-special-yellow-light': 'rgba(255, 152, 20, 0.1)',

    '--sjs-special-yellow-forecolor': 'rgba(255, 255, 255, 1)',

    '--sjs-article-font-xx-large-textDecoration': 'none',

    '--sjs-article-font-xx-large-fontWeight': '700',

    '--sjs-article-font-xx-large-fontStyle': 'normal',

    '--sjs-article-font-xx-large-fontStretch': 'normal',

    '--sjs-article-font-xx-large-letterSpacing': '0',

    '--sjs-article-font-xx-large-lineHeight': '64px',

    '--sjs-article-font-xx-large-paragraphIndent': '0px',

    '--sjs-article-font-xx-large-textCase': 'none',

    '--sjs-article-font-x-large-textDecoration': 'none',

    '--sjs-article-font-x-large-fontWeight': '700',

    '--sjs-article-font-x-large-fontStyle': 'normal',

    '--sjs-article-font-x-large-fontStretch': 'normal',

    '--sjs-article-font-x-large-letterSpacing': '0',

    '--sjs-article-font-x-large-lineHeight': '56px',

    '--sjs-article-font-x-large-paragraphIndent': '0px',

    '--sjs-article-font-x-large-textCase': 'none',

    '--sjs-article-font-large-textDecoration': 'none',

    '--sjs-article-font-large-fontWeight': '700',

    '--sjs-article-font-large-fontStyle': 'normal',

    '--sjs-article-font-large-fontStretch': 'normal',

    '--sjs-article-font-large-letterSpacing': '0',

    '--sjs-article-font-large-lineHeight': '40px',

    '--sjs-article-font-large-paragraphIndent': '0px',

    '--sjs-article-font-large-textCase': 'none',

    '--sjs-article-font-medium-textDecoration': 'none',

    '--sjs-article-font-medium-fontWeight': '700',

    '--sjs-article-font-medium-fontStyle': 'normal',

    '--sjs-article-font-medium-fontStretch': 'normal',

    '--sjs-article-font-medium-letterSpacing': '0',

    '--sjs-article-font-medium-lineHeight': '32px',

    '--sjs-article-font-medium-paragraphIndent': '0px',

    '--sjs-article-font-medium-textCase': 'none',

    '--sjs-article-font-default-textDecoration': 'none',

    '--sjs-article-font-default-fontWeight': '400',

    '--sjs-article-font-default-fontStyle': 'normal',

    '--sjs-article-font-default-fontStretch': 'normal',

    '--sjs-article-font-default-letterSpacing': '0',

    '--sjs-article-font-default-lineHeight': '28px',

    '--sjs-article-font-default-paragraphIndent': '0px',

    '--sjs-article-font-default-textCase': 'none',

    '--sjs-question-background': 'rgba(255, 255, 255, 1)',

    '--sjs-font-surveytitle-family': 'Arial, sans-serif',

    '--sjs-font-surveytitle-weight': '600',

    '--sjs-font-surveytitle-size': '24px',

    '--sjs-font-size': '16px',

    '--sjs-font-pagetitle-family': 'Arial, sans-serif',

    '--sjs-editor-background': 'rgba(182, 157, 72, 1)',

    '--sjs-editorpanel-hovercolor': 'rgba(47, 77, 143, 1)',

    '--sjs-editorpanel-backcolor': 'rgba(182, 157, 72, 1)',

    '--sjs-font-editorfont-placeholdercolor': 'rgba(0, 0, 0, 0.45)',

  },

};



const json = {

  title: 'Experience with Recommender Systems',

  description:

    'I am conducting an academic research on user experiences with chatbots and generative AI services. This questionnaire aims to gather insights into the inclusiveness, usefulness, and potential biases of these technologies across different demographics. Your perspectives will inform efforts to improve chatbots and AIs to be more equitable and effective for all users.',

  logo: 'https://api.surveyjs.io/private/Surveys/files?name=5bbf310c-1132-4442-b103-48beaedb0d4c',

  logoWidth: '200px',

  logoPosition: 'right',
  completedHtml: "<h6 style=\"margin-bottom: 30px text-align: center\"> Thank you for your time and insights.</h6>\n<div style=\"margin-bottom: 30px\">This questionnaire is for academic research purposes only. If you would be interested in participating in further research after the development of new tools, please click on<strong> Create Your Account </strong> to register for further research. If not, you can exit or go<strong>  Back to Homepage.</strong></div>\n<div style=\"margin:20px text-align: center;\">\n  <a href=\"/homepage\" style=\"display: inline-block; margin-right: 1rem; padding: 0.5rem 1.25rem; background-color: #b69d48; color: #fff; text-decoration: none; border-radius: 5px;\">Back to Homepage</a>\n  <a href=\"/authentication/signup\" style=\"display: inline-block; padding: 0.5rem 1.25rem; background-color: #2f4d8f; color: #fff; text-decoration: none; border-radius: 5px;\">Create an Account</a>\n</div>",

  completedBeforeHtml:

    '<h3>Our records show that you have already completed this questionnaire.</h3>',

  loadingHtml: '<h3>Loading Questionnaire...</h3>',

 
  "pages": [
    {
     "name": "page1",
     "elements": [
      {
       "type": "text",
       "name": "Age",
       "title": "How old are you ?",
       "isRequired": true,
       "inputType": "number",
       "min": 11,
       "max": 99,
       "minErrorText": "Respondent should be between 11 and 99 years",
       "maxErrorText": "Respondent should be between 11 and 99 years"
      },
      {
       "type": "radiogroup",
       "name": "Gender",
       "title": "What do you identify as?",
       "isRequired": true,
       "choices": [
        {
         "value": "Male",
         "text": "Male"
        },
        {
         "value": "Female",
         "text": "Female"
        },
        {
         "value": "Prefer not to say",
         "text": "Prefer not to say"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "Education Level",
       "title": "What is your highest level of education?",
       "isRequired": true,
       "choices": [
        {
         "value": "High school or lower",
         "text": "High school or lower"
        },
        {
         "value": "Some college",
         "text": "Some college,"
        },
        {
         "value": "Bachelor's degree",
         "text": "Bachelor's degree"
        },
        {
         "value": "Master's degree",
         "text": "Master's degree,"
        },
        {
         "value": "Doctorate or higher",
         "text": "Doctorate or higher"
        }
       ]
      },
      {
       "type": "text",
       "name": "Profession",
       "title": "What is your profession?",
       "isRequired": true
      },
      {
       "type": "dropdown",
       "name": "Country",
       "title": "What country do you live in?",
       "isRequired": true,
       "choicesByUrl": {
        "url": "https://restcountries.com/v2/all?fields=name"
       }
      }
     ],
     "title": "Demographics:"
    },
    {
     "name": "page2",
     "elements": [
      {
       "type": "boolean",
       "name": "Usage of Music Streaming Platforms",
       "title": "Do you use music streaming platforms?(eg. Sportify, AudioMack, Apple, Youtube, etc)",
       "isRequired": true
      },
      {
       "type": "checkbox",
       "name": "Specify platforms",
       "visibleIf": "{Usage of Music Streaming Platforms} = true",
       "title": "Which music streaming platforms do you use",
       "isRequired": true,
       "choices": [
        "Spotify",
        "Apple Music",
        "Youtube",
        "Audiomack"
       ],
       "showOtherItem": true,
       "otherText": "Others (Please specify)"
      },
      {
       "type": "radiogroup",
       "name": "Usage of Platforms",
       "visibleIf": "{Usage of Music Streaming Platforms} = true",
       "title": "How much time do you spend on these platforms ?",
       "isRequired": true,
       "choices": [
        "Never",
        "Once a month",
        "Several Times a month",
        "Daily",
        "More than once a day"
       ]
      },
      {
       "type": "text",
       "name": "Artist",
       "visibleIf": "{Usage of Music Streaming Platforms} = true",
       "title": "Who is your favorite artist? (Please indicate)",
       "isRequired": true
      },
      {
       "type": "dropdown",
       "name": "Platform Usage",
       "visibleIf": "{Usage of Music Streaming Platforms} = true",
       "title": "How many times do you averagely listen to your favorite artist in a day?",
       "isRequired": true,
       "choices": [
        "1-5",
        "6-10",
        "11-15",
        "16-20",
        "21-25",
        "26-30"
       ]
      }
     ],
     "title": "Usage of Recommender System"
  },
  {
   "name": "page3",
   "elements": [
    {
     "type": "radiogroup",
     "name": "Accuracy",
     "title": "How accurately do the Music Streaming Platform(s) understand your music preferences?",
     "isRequired": true,
     "choices": [
      {
       "value": "Not accurate",
       "text": "Not accurate"
      },
      {
       "value": "Somewhat accurate",
       "text": "Somewhat accurate"
      },
      {
       "value": "Very accurate",
       "text": "Very accurate"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Relevance",
     "title": "How relevant are the music recommendations to your tastes?",
     "isRequired": true,
     "choices": [
      {
       "value": "Not relevant",
       "text": "Not relevant"
      },
      {
       "value": "Somewhat relevant",
       "text": "Somewhat relevant"
      },
      {
       "value": "Very relevant",
       "text": "Very relevant"
      }
     ]
    },
    {
     "type": "boolean",
     "name": "Introduction to new artist/genre",
     "title": "Have the recommendations expanded your awareness of new artists/genres?",
     "isRequired": true
    },
    {
     "type": "boolean",
     "name": "Diversity",
     "title": "Is there enough diversity in the recommended content?",
     "isRequired": true
    },
    {
     "type": "boolean",
     "name": "Transparency",
     "title": "Does the system provide transparency into why recommendations are suggested?",
     "isRequired": true
    },
    {
     "type": "radiogroup",
     "name": "Interface Design",
     "title": "How would you rate the user interface design?",
     "isRequired": true,
     "choices": [
      {
       "value": "Poor",
       "text": "Poor"
      },
      {
       "value": "Satisfactory",
       "text": "Satisfactory"
      },
      {
       "value": "Good",
       "text": "Good"
      },
      {
       "value": "Excellent",
       "text": "Excellent"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "Is the platform recommendable to other",
     "title": "How likely are you to recommend the platform to others.",
     "choices": [
      {
       "value": "Not likely",
       "text": "Not likely"
      },
      {
       "value": "Somewhat likely",
       "text": "Somewhat likely"
      },
      {
       "value": "Very likely",
       "text": "Very likely"
      }
     ]
    },
    {
     "type": "comment",
     "name": "Suggestions to improve",
     "title": "Please share any other suggestions to improve experience:"
    }
   ],
   "visibleIf": "{Usage of Music Streaming Platforms} = true",
   "title": "Experience with Recommender Systems:"
  },
  {
    "name": "page4",
    "elements": [
     {
      "type": "text",
      "name": "Email",
      "title": "Kindly put your email here if you want to be part of further research or use of the recommender system.",
      "inputType": "email",
      "placeholder": "###@email.com"
     }
    ],
    "title": "Further Feedback"
   }
   ],
   showProgressBar: "top",
   showPreviewBeforeComplete: "showAnsweredQuestions",
   widthMode: "responsive",

  completeText: 'Submit',

  widthMode: 'responsive',

};



// Function to sanitize keys
function sanitizeKey(key) {
  // Replace invalid characters with underscores
  return key.replace(/[.#$/[\]]/g, '_');
}

const QuestionairesBeforePage = () => {
  
  if (typeof window !== 'undefined') {
    const model = new Model(json);
    model.applyTheme(themeJson);

    model.onComplete.add(async (model, options) => {
      try {
        const surveyData = model.data;

        // Get the current date and time
        const currentDate = new Date();
        
        // Format the date and time
        const formattedDate = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD
        const formattedTime = currentDate.toISOString().split('T')[1].split('.')[0]; // HH:mm:ss

        // Add date and time separately to the survey data
        surveyData.Date = formattedDate;
        surveyData.Time = formattedTime;

        // Sanitize keys in the survey data
        const sanitizedData = Object.keys(surveyData).reduce((acc, key) => {
          acc[sanitizeKey(key)] = surveyData[key];
          return acc;
        }, {});

           // Track survey completion as a Vercel Analytics event
           track('Recommender question is completed', {
            surveyType: 'recommender_system', // or any other identifier
          });
        // Save survey data to Firestore
        const firestoreDocRef = await addDoc(collection(db, 'Recommender System Questionnaire'), sanitizedData);
        console.log('Survey data added to Firestore with ID: ', firestoreDocRef.id);

        // Save survey data to Realtime Database
        const rtdbSurveyRef = rtdbRef(rtdb, 'Recommender System Questionnaire');
        const rtdbSurveyPushRef = rtdbPush(rtdbSurveyRef);
        await set(rtdbSurveyPushRef, sanitizedData);

        console.log('Survey data added to Realtime Database with ID: ', rtdbSurveyPushRef.key);
      } catch (error) {
        console.error('Error adding survey data to Firebase: ', error);
      }
    });


    return (
      <section className=" h-screen bg-Lgrey">
      <MarginWidthWrapperAtBothSides>
        <Survey model={model} />
      </MarginWidthWrapperAtBothSides>
      </section>

    );
  }

  return (
    <>
    <section className=" h-screen bg-Lgrey flex items-center justify-center text-center text-lg">
      Loading the questionnaire...
    </section>
    </>
  );
};

export default QuestionairesBeforePage;

