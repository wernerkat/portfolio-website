import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { getBlogPosts } from "@/data/blog";
import { work } from "@/data/work";
import Link from "next/link";

export const metadata = {
  title: "Work",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function WorkPage() {
  const posts = await getBlogPosts();

  return (
    <section id="work-page">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                My Work
              </h2>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3  max-w-[800px] mx-auto">
          {work.map((work, id) => (
            <BlurFade key={work.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
              <ProjectCard
                href={work.href}
                sections={work.sections}
                key={work.title}
                title={work.title}
                summary={work.summary}
                mainImg={work.mainImg}
                tags={work.tags}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
