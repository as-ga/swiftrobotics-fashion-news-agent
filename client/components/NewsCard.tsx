import { News } from "@/types/news";

interface Props {
  article: News;
}

export default function NewsCard({ article }: Props) {
  return (
    <div className="border rounded-xl p-5 shadow-sm space-y-3">
      <div className="flex justify-between">
        <h2 className="font-bold text-lg">{article.title}</h2>

        <span>{article.importance}</span>
      </div>

      <p>{article.summary}</p>

      <div className="text-sm text-gray-500">{article.source}</div>

      <a href={article.url} target="_blank" className="text-blue-600">
        Open Article →
      </a>
    </div>
  );
}
