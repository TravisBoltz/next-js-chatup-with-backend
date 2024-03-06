'use client';

// intention to use client side environment
import React, { useState } from 'react';

import * as ort from 'onnxruntime-web'; // import onnx runtime for ml model

// import css for styling
import '../../styles/styles.css';
import FeedBack from '@/components/feedback';

/**
 * Renders the Home component.
 * Allows the user to select ingredients and perform cuisine inference.
 */
export default function Home() {

  const [ingredients, setIngredients] = useState<number[]>(
    new Array(380).fill(0),
  ); // Declare the ingredients variable and initiate the state with an array of 380 elements set to 0

  // Define the CuisineDishes interface
  interface CuisineDishes {
    [ingredient: string]: string[];
  }
  // Define the CuisineDishes interface
  interface CombinedCuisines {
    Japanese: CuisineDishes;
    Korean: CuisineDishes;
    Thai: CuisineDishes;
    Indian: CuisineDishes;
    Chinese: CuisineDishes;
  }
  // Define the combined cuisines and their respective dishes
  const combinedCuisines: CombinedCuisines = {
    Japanese: {
      Apple: ["Apple Pie", "Apple Salad"],
      Pear: ["Pear Salad", "Pear Tart"],
      Cherry: ["Cherry Blossom Cake", "Cherry Smoothie"],
      Fenugreek: [],
      Sake: ["Sake Sushi", "Sake Teriyaki"],
      "Soy sauce": ["Soy Sauce Ramen", "Soy Sauce Chicken"],
      Cumin: []
    },
    Chinese: {
      Apple: ["Peking Duck"],
      Pear: ["Hot and Sour Soup"],
      Cheery: ["Mapo Tofu"],
      Fenugreek: ["Szechuan Chicken"],
      Sake: ["Kung Pao Shrimp"],
      Cumin: ["Mongolian Beef"]
    },
    Korean: {
      Apple: ["Apple Kimchi", "Apple Salad"],
      Pear: ["Pear Kimchi", "Pear Salad"],
      Cherry: ["Cherry Makgeolli", "Cherry Kimchi"],
      Fenugreek: [],
      Sake: [],
      "Soy sauce": ["Soy Sauce Bibimbap", "Soy Sauce Tofu"],
      Cumin: []
    },
    Thai: {
      Apple: ["Green Apple Salad", "Apple Curry"],
      Pear: ["Pear Salad", "Pear Smoothie"],
      Cherry: ["Cherry Pad Thai", "Cherry Salad"],
      Fenugreek: [],
      Sake: [],
      "Soy sauce": [],
      Cumin: ["Cumin Chicken", "Cumin Curry"]
    },
    Indian: {
      Apple: ["Apple Chutney", "Apple Samosa"],
      Pear: ["Pear Lassi", "Pear Curry"],
      Cherry: ["Cherry Kulfi", "Cherry Chutney"],
      Fenugreek: ["Fenugreek Curry", "Fenugreek Paratha"],
      Sake: [],
      "Soy sauce": [],
      Cumin: ["Cumin Rice", "Cumin Curry"]
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };// Function to reload the page

  /**
   * Handles the change event of the checkbox.
   * Updates the ingredients array based on the checkbox value.
   * @param event - The change event object
   */
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const updatedIngredients = [...ingredients];
    updatedIngredients[parseInt(value)] = checked ? 1 : 0; // Parse the value to an integer
    setIngredients(updatedIngredients);
  };

  /**
   * Checks if at least one checkbox is checked.
   * @returns True if at least one checkbox is checked, false otherwise.
   */
  const testCheckboxes = () => {
    return ingredients.includes(1); // Returns true if the ingredients array includes the value 1
  };
  const [predictedCuisine, setPredictedCuisine] = useState<string>('');

  /**
   * Starts the inference process.
   * Displays an alert with the predicted cuisine based on the selected ingredients.
   */
  const renderCuisineDishes = () => {
    if (predictedCuisine === 'You can enjoy japanese cuisine today!') {
      return (
        <ul>
          {Object.entries(combinedCuisines.Japanese).map(([ingredient, dishes]) => (
            <li key={ingredient}>
              <strong>{ingredient}:</strong> {dishes.join(', ')}
            </li>
          ))}
        </ul>
      );
    } else if (predictedCuisine === 'You can enjoy korean cuisine today!') {
      return (
        <ul>
          {Object.entries(combinedCuisines.Korean).map(([ingredient, dishes]) => (
            <li key={ingredient}>
              <strong>{ingredient}:</strong> {dishes.join(', ')}
            </li>
          ))}
        </ul>
      );
    } else if (predictedCuisine === 'You can enjoy chinese cuisine today!') {
      return (
        <ul>
          {Object.entries(combinedCuisines.Chinese).map(([ingredient, dishes]) => (
            <li key={ingredient}>
              <strong>{ingredient}:</strong> {dishes.join(', ')}
            </li>
          ))}
        </ul>
      );
    } else if (predictedCuisine === 'You can enjoy thai cuisine today!') {
      return (
        <ul>
          {Object.entries(combinedCuisines.Thai).map(([ingredient, dishes]) => (
            <li key={ingredient}>
              <strong>{ingredient}:</strong> {dishes.join(', ')}
            </li>
          ))}
        </ul>
      );
    } else if (predictedCuisine === 'You can enjoy indian cuisine today!') {
      return (
        <ul>
          {Object.entries(combinedCuisines.Indian).map(([ingredient, dishes]) => (
            <li key={ingredient}>
              <strong>{ingredient}:</strong> {dishes.join(', ')}
            </li>
          ))}
        </ul>
      );
    }
  };
  const startInference = async () => {
    const atLeastOneChecked = testCheckboxes(); // Check if at least one checkbox is checked

    if (!atLeastOneChecked) {
      alert('Please select at least one ingredient.'); // Display an alert if no checkbox is checked
      return;
    }

    try {
      // Create a new session and load the ONNX model
      const session = await ort.InferenceSession.create('/model.onnx');

      // Create a new input tensor with the ingredients array
      const input = new ort.Tensor(new Float32Array(ingredients), [
        1,
        ingredients.length,
      ]);
      const feeds = { float_input: input }; // Define the input feeds for the session

      // Feed the inputs and run the inference
      const results = await session.run(feeds);
      setPredictedCuisine('You can enjoy ' + results.label.data[0] + ' cuisine today!');

    } catch (e) {
      console.log('failed to inference ONNX model');
      console.error(e);
      setPredictedCuisine('Failed to make a prediction. Please try again later.');
    }


  };

  return (
    <>
      {/* <Header /> */}
      <section className="flex flex-col items-center justify-center">
        <div className="max-w-[800px] w-full">
          <h2 className="text-gold flex justify-center text-center mt-5 -mb-2 text-xl items-center">
            This Is A Test Platform For Our Recommender System.
          </h2>
          <div id="wrapper" className='grid m-5 sm:m-10 grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <p className='flex justify-center items-center font-bold '>Check your refrigerator. What kind of cuisine can you create?</p>
              <div className='border-2 border-royalBlue p-10 shadow-xl'>
                <div className="boxCont">
                  <input
                    name='Apple'
                    type="checkbox"
                    value="4"
                    className="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label>Apple</label>
                </div>
                <div className="boxCont">
                  <input
                    name="Pear"
                    type="checkbox"
                    value="247"
                    className="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label>Pear</label>
                </div>
                <div className="boxCont">
                  <input
                    name='Cherry'
                    type="checkbox"
                    value="77"
                    className="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label>Cherry</label>
                </div>
                <div className="boxCont">
                  <input
                    name='Fenugreek'
                    type="checkbox"
                    value="126"
                    className="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label>Fenugreek</label>
                </div>
                <div className="boxCont">
                  <input
                    name='Sake'
                    type="checkbox"
                    value="302"
                    className="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label>Sake</label>
                </div>
                <div className="boxCont">
                  <input
                    name='Soy sauce'
                    type="checkbox"
                    value="327"
                    className="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label>Soy sauce</label>
                </div>
                <div className="boxCont mb-4">
                  <input
                    name='Cumin'
                    type="checkbox"
                    value="112"
                    className="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label>Cumin</label>
                  {/* Testing another type of input of type = text. */}
                </div>
              </div>
            </div>
            {/* result box */}
            <section className='mt-5 sm:mt-0'>
              <p className='justify-center font-bold'>This is your recommended Cuisine</p>
              <div className="max-w-md w-full my-auto">
                <div className="prediction-box mt-5 shadow-xl text-gold border-2 border-gold p-10">
                  {predictedCuisine || "Can't wait to see what you want to cook 😇😜"}
                </div>
                <div className="prediction-box mt-5 shadow-xl text-gold border-2 border-gold p-10">
                  {renderCuisineDishes() || "Cuisine that you might be interested in will appear here"}
                </div>
              </div>
            </section>
          </div>
          {/* Button to feed input into the model and generate an output (recommendation) */}
          <div className="flex justify-center -mt-14 items-center p-10 ">
            <button onClick={startInference} className='bg-royalBlue py-2 px-4 rounded-lg text-gold font-bold hover:text-royalBlue hover:bg-gold'>Predict the Cuisine</button>
            <button onClick={reloadPage} className='bg-royalBlue py-2 px-4 rounded-lg text-gold font-bold hover:text-royalBlue hover:bg-gold'>Reload</button>
          </div>
        </div>
        <FeedBack />
      </section>

    </>
  )
}