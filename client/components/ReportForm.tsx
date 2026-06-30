"use client";

import { useState } from "react";

import { generateReport } from "@/lib/api";
import { News } from "@/types/news";

import Loading from "./Loading";
import ReportList from "./ReportList";

const AVAILABLE_TOPICS = ["fashion", "retail", "luxury", "textiles", "economy"];

export default function ReportForm() {
  const [country, setCountry] = useState("India");

  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "fashion",
    "retail",
    "luxury",
  ]);

  const [loading, setLoading] = useState(false);

  const [articles, setArticles] = useState<News[]>([]);

  const [error, setError] = useState("");

  const handleTopicChange = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((item) => item !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await generateReport(country, selectedTopics);

      setArticles(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to generate report.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Country */}

      <div>
        <label className="block font-semibold mb-2">Country</label>

        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full"
        >
          <option>India</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>France</option>
          <option>Italy</option>
        </select>
      </div>

      {/* Topics */}

      <div>
        <label className="block font-semibold mb-2">Topics</label>

        <div className="grid grid-cols-2 gap-3">
          {AVAILABLE_TOPICS.map((topic) => (
            <label key={topic} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedTopics.includes(topic)}
                onChange={() => handleTopicChange(topic)}
              />

              <span className="capitalize">{topic}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Button */}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-black text-white rounded-lg px-6 py-3 w-full hover:bg-gray-800 disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate Report"}
      </button>

      {/* Error */}

      {error && <p className="text-red-500">{error}</p>}

      {/* Loading */}

      {loading && <Loading />}

      {/* Report */}

      {!loading && articles.length > 0 && (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold">Today&#39;s Report</h2>

          <ReportList articles={articles} />
        </div>
      )}
    </div>
  );
}
