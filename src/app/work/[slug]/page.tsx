import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { work } from "@/data/work";
import { formatDate, getCaseStudyBySlug } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";



// export async function generateMetadata({
//   params,
// }: {
//   params: {
//     slug: string;
//   };
// }): Promise<Metadata | undefined> {
//   let post = await getPost(params.slug);

//   let {
//     title,
//     publishedAt: publishedTime,
//     summary: description,
//     image,
//   } = post.metadata;
//   let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: "article",
//       publishedTime,
//       url: `${DATA.url}/work/${post.slug}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogImage],
//     },
//   };
// }

export default async function WorkCaseStudy({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const caseStudy = await getCaseStudyBySlug(params.slug);

 console.log({caseStudy, params});

  if (!caseStudy) {
    notFound();
  }

  return (
    <section id="blog">
    
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          {caseStudy.title}
        </h1>
       
        <div className="prose dark:prose-invert max-w-none">
                {caseStudy.mainImg && (
                    <Image
                      src={caseStudy.mainImg}
                      alt={caseStudy.title}
                      width={500}
                      height={300}
                      className="h-40 w-full overflow-hidden object-cover object-center"
                    />
                  )}
        </div>
      
     
    </section>
  );
}
