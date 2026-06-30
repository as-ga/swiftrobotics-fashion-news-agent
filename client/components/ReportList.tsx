import { News } from "@/types/news";
import NewsCard from "./NewsCard";

interface Props {
  articles: News[];
}

export default function ReportList({ articles }: Props) {
  return (
    <div className="grid gap-5">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}
