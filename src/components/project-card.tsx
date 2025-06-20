import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CaseStudySection, CaseStudyType } from "@/data/work";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props extends CaseStudyType {
  className?: string;
  height?: number;
}

export function ProjectCard({
  title,
  tags,
  href,
  mainImg,
  summary,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out  min-h-[19rem] h-full"
      }
    >
      <Link
        href={`/work${href}` || "#"}
        className={cn("block hover:cursor-pointer h-full", className)}
      >
        {/* {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )} */}
        {mainImg && (
          <Image
            src={mainImg}
            alt={title}
            width={500}
            height={300}
            className="min-h-40 max-h-72 w-full overflow-hidden object-cover object-center"
          />
        )}
        <CardHeader className="px-2 pb-2">
          <div className="space-y-1">
            <CardTitle className="mt-2 text-base">{title}</CardTitle>

            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert line-clamp-3">
              {summary}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex flex-col px-2 pb-2">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        {/* <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter> */}
      </Link>
    </Card>
  );
}
