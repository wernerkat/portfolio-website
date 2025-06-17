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

      <div className="w-screen space-y-8 absolute bottom-0 left-0 py-8 pb-24 bg-[#f6b9886b] backdrop-blur-lg ">
        <h4 className="font-medium uppercase text-center">Up Next</h4>
        <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto overflow-x-auto">
          {suggested.map((item, i) => (
            <Link
              href={`/work${item.href}`}
              key={i}
              className="cursor-pointer hover:shadow-2xl"
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
