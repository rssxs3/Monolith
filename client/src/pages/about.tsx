import { Separator } from "@/components/ui/separator";
import { SeoHead } from "@/components/seo-head";

export function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[720px] py-[32px] lg:py-[56px] px-[16px] lg:px-0">
      <SeoHead
        title="关于"
        description="关于"
        url="/about"
      />
      <h1 className="text-[28px] font-semibold tracking-[-0.02em]">关于</h1>
      <Separator className="my-[24px] bg-border/30" />
      <div className="prose-monolith">
        <h2> 本博客希望干什？</h2>
        <p>在信息洪流中保持沉默的力量，用深度的思考写作取代碎片化的速食内容。</p>
        <h2>技术栈</h2>
        <ul>
          <li><strong>前端</strong> — Vite + React 19 SPA，Tailwind CSS v4，Shadcn UI</li>
          <li><strong>后端</strong> — Hono.js，运行在 Cloudflare Workers 边缘</li>
          <li><strong>数据库</strong> — Cloudflare D1（边缘 SQLite）+ Drizzle ORM</li>
          <li><strong>存储</strong> — Cloudflare R2（S3 兼容对象存储）</li>
          <li><strong>部署</strong> — Cloudflare Pages + Workers，全球 300+ 节点</li>
        </ul>

 
      </div>
    </div>
  );
}
