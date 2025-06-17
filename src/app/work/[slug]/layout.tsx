import { DATA } from "@/data/resume";
// import type { Metadata } from "next";

import { work } from "@/data/work";
import Link from "next/link";
import { Card } from "@/components/ui/card";

// export const metadata: Metadata = {
//   metadataBase: new URL(DATA.url),
//   title: {
//     default: DATA.name,
//     template: `%s | ${DATA.name}`,
//   },

// };

export default function WorkLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string };
}>) {
  const currentIndex = work.findIndex(
    (item) => item.href === `/${params.slug}`
  );

  const beforeIndex = (currentIndex - 1 + work.length) % work.length;
  const afterIndex = (currentIndex + 1) % work.length;

  const suggested = [work[beforeIndex], work[afterIndex]].filter(
    (item) => item.href !== `/${params.slug}`
  );

  return (
    <div>
      {children}

      <div className="w-screen flex flex-col gap-4 justify-center items-center absolute bottom-0 left-0 py-8 pb-28">
        <h4 className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm  ">
          Up Next
        </h4>
        <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto overflow-x-auto py-2 px-10">
          {suggested.map((item, i) => (
            <Link
              href={`/work${item.href}`}
              key={i}
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <Card className="border p-4  space-y-2">
                <h3 className="font-medium">{item.title}</h3>
                <p className="line-clamp-2"> {item.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
