const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const generateReport = async (country: string, topics: string[]) => {
  const response = await fetch(`${BASE_URL}/news/generate-report`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      country,
      topics,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate report");
  }

  return response.json();
};
