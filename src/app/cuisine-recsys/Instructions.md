## Cuisine Recommender System

**Description:**

This repository holds a cuisine recommender system, assisting users in exploring delectable dishes based on their preferences and dietary restrictions.

**Dependencies:**

For a detailed list of dependencies, please refer to the `nextjs/README.md` file.

**Installation:**

1. Clone this repository: `[git clone https://github.com/your-username/recSys-test](https://github.com/LHydra-Com/LHydra-web-app/tree/recSys-test)`
2. Navigate to the project directory: `cd recSys-test`
3. Install dependencies: `npm install`

## Usage

### Cuisine Prediction from Ingredients

This recommender system predicts the most likely cuisine you can create based on the ingredients you have on hand. It leverages a powerful ONNX model seamlessly integrated into a Next.js full-stack application.

**To use the recommender:**

1. **Visit the application:** Launch the Next.js application (instructions on deployment coming soon).
2. **Enter your ingredients:** Use the provided interface to input your ingredient list by selecting any of the ingredients provided via checkboxes.
3. **Get your prediction:** Click the "Predict Cuisine" button. The system will analyze your ingredients and predict the most likely cuisine you can make, along with the confidence level of the prediction.

**Integrating an ONNX Model in Next.js:**

This section will be added soon, offering a detailed explanation of how the ONNX model interacts within the Next.js application architecture. It will cover aspects like model loading, prediction processing, and result presentation.

Please note that the application is currently under development. Stay tuned for updates on deployment instructions and additional features!

Here's an improved write-up for the `Troubleshooting` section:

**Troubleshooting:**

**`.wasm` Model Inferencing Error:**

If you encounter errors related to model inferencing, it's likely due to an issue with the placement of the ONNX Runtime WebAssembly files. Here's how to resolve it:

1. **Locate the `.wasm` files:** By default, these files are located within the `node_modules/onnxruntime-web/dist` directory within your Next.js project. The specific path might be `LHydra-web-app\.next\static\chunks\node_modules\onnxruntime-web\dist`.

2. **Move the files:** Copy the `.wasm` files directly into the root of the `chunks` directory. The destination path should be `LHydra-web-app\.next\static\chunks`.

3. **Restart the application:** After moving the files, restart your Next.js application to ensure the changes take effect.

**Alternative Solution using Webpack:**

While manually copying the files works, a more robust solution involves leveraging Webpack's copy functionality. This automates the process during the build phase:

1. **Modify your Webpack configuration:** Add a rule to copy the `.wasm` files from the source directory to the `chunks` directory during the build process. Refer to Webpack documentation for specific instructions on rule creation.
2. **Build the application:** Run `npm run build` to trigger the copying and ensure the `.wasm` files are correctly placed.

**Additional Support:**

- **`nextjs/README.md`:** For Next.js-specific issues, consult the project's README for additional troubleshooting steps.
- **Repository Issues:** Create an issue on this repository describing your problem in detail, including error messages and attempted solutions.
- **Team Contact:** Reach out to the team members listed in the repository for further clarification or assistance.

**Remember:** By addressing the `.wasm` file placement issue, you should be able to resolve most model inferencing errors. If you continue to face problems, don't hesitate to utilize the available support resources.

**Contributing:**

We welcome your contributions to this project! To get involved, follow these steps:

1. Fork this repository.
2. Create a new branch for your changes.
3. Implement your modifications and ensure they pass all tests.
4. Submit a pull request with a clear description of your changes.

**Contact:**

For any questions or suggestions, please contact [Josh](mailto:jnopareboateng@outlook.com).
