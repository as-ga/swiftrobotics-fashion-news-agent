import { asyncHandler } from "@/utils/asyncHandler";
import { ApiError, ApiResponse } from "@/utils/apiHandler";

import { getNews } from "@/services/news.service";
import { summarizeNews } from "@/services/ai.service";

const generateReport = asyncHandler(async (req, res) => {
  const { country, topics } = req.body;

  const articles = await getNews(country, topics);

  const report = await summarizeNews(articles);

  if (!report) {
    throw new ApiError(500, "Failed to generate report");
  }

  return res.json(
    new ApiResponse(200, "Report generated successfully", report)
  );
});

export { generateReport };
