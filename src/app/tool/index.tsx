"use client";

// Tool.tsx
import React, { useState } from "react";

const Tool: React.FC = () => {
  const [jsonInput, setJsonInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [quoteOption, setQuoteOption] = useState<string>("double");

  const handleFormat = (): void => {
    try {
      const arr: object[] = JSON.parse(jsonInput);

      const result: string =
        "[\n" +
        arr
          .map((e: object) => {
            if (quoteOption === "none") {
              // Remove quotes from keys only
              return (
                "  {" +
                Object.entries(e)
                  .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
                  .join(", ") +
                "}"
              );
            }
            return "  " + JSON.stringify(e);
          })
          .join(",\n") +
        "\n]";

      setOutput(result);
    } catch (error: unknown) {
      alert("Invalid JSON input");
      console.error(error);
    }
  };

  const handleCopy = (): void => {
    navigator.clipboard
      .writeText(output)
      .then(() => {
        alert("Output copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy: " + err);
      });
  };

  return (
    <div className="flex h-screen">
      {/* Left Column */}
      <div className="w-2/5 p-4 border-r border-gray-300">
        <h1 className="text-xl font-bold mb-4">JSON Input</h1>
        <textarea
          className="w-full h-full p-2 border border-gray-300 rounded"
          placeholder="Enter your JSON array here"
          value={jsonInput}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setJsonInput(e.target.value)
          }
        ></textarea>
      </div>

      {/* Middle Column */}
      <div className="w-1/5 p-4 flex flex-col items-center justify-center border-r border-gray-300">
        <h1 className="text-lg font-bold mb-4">Options</h1>
        <div className="mb-4 w-full">
          <label
            htmlFor="quote-option"
            className="block text-sm font-medium mb-2"
          >
            Quote Option
          </label>
          <select
            id="quote-option"
            className="w-full p-2 border border-gray-300 rounded"
            value={quoteOption}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setQuoteOption(e.target.value)
            }
          >
            <option value="double">Double Quotes</option>
            <option value="none">No Quotes</option>
          </select>
        </div>

        {/* Placeholder for additional options */}
        <div className="mb-4 w-full">
          <label
            htmlFor="additional-option"
            className="block text-sm font-medium mb-2"
          >
            Additional Option (Coming Soon)
          </label>
          <input
            id="additional-option"
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="More options here..."
            disabled
          />
        </div>

        <button
          onClick={handleFormat}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go
        </button>
        {output && (
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Copy to Clipboard
          </button>
        )}
      </div>

      {/* Right Column */}
      <div className="w-2/5 p-4">
        <h1 className="text-xl font-bold mb-4">Formatted JSON</h1>
        <pre className="w-full h-full p-2 bg-gray-100 border border-gray-300 rounded overflow-auto">
          {output}
        </pre>
      </div>
    </div>
  );
};

export default Tool;
