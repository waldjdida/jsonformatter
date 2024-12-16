# JSON Formatter Tool

Try it now: https://jsonformatter-gamma.vercel.app/

This is a React-based JSON Formatter tool that allows users to format JSON arrays by customizing key-value pair styles. The tool provides options to include or exclude double quotes for keys and numeric values.

## Features

- Accepts JSON input via a text area.
- Formats JSON output with the option to:
  - Retain double quotes for keys and values.
  - Remove double quotes from keys.
  - Automatically remove quotes from numeric values.
- Copy the formatted JSON output to the clipboard.

## Requirements

- Node.js
- npm or yarn

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd json-formatter-tool
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Enter a valid JSON array in the left text area.
2. Use the dropdown menu in the middle column to choose the formatting style:
   - **Double Quotes**: Retains quotes for both keys and values.
   - **No Quotes**: Removes quotes from keys and numeric values.
3. Click the **Go** button to generate the formatted JSON.
4. View the formatted JSON in the right column.
5. Use the **Copy to Clipboard** button to copy the output.

## Example

### Input:
```json
[
  {"key1": "value1", "key2": 123},
  {"key3": "value3", "key4": 456}
]
```

### Output (No Quotes):
```
[
  {key1: "value1", key2: 123},
  {key3: "value3", key4: 456}
]
```

### Output (Double Quotes):
```json
[
  {"key1": "value1", "key2": 123},
  {"key3": "value3", "key4": 456}
]
```

## File Structure

- `Tool.tsx`: Main component containing the logic for JSON formatting.
- `index.css`: Tailwind CSS styles.
- `App.tsx`: Entry point for the React application.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

