import { getCaseStudyBySlug } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

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

  if (!caseStudy) {
    notFound();
  }

  return (
    <section className="flex flex-col px-4 my-8">
      <h1 className="font-medium text-3xl tracking-tighter">
        {caseStudy.title}
      </h1>
      {caseStudy.mainImg && (
        <div className="prose dark:prose-invert max-w-none my-8 mb-16">
          <Image
            src={caseStudy.mainImg}
            alt={caseStudy.title}
            width={500}
            height={300}
            className="w-full overflow-hidden object-cover object-center rounded-xl"
          />
        </div>
      )}

      {caseStudy.sections.map((section, index) => (
        <div key={index} className="space-y-4 mb-16">
          <h2 className=" uppercase">{section.sectionDescription}</h2>
          <h2 className="text-xl font-bold">{section.sectionTitle}</h2>

          <div className="prose dark:prose-invert max-w-none">
            {section.body.map((content, idx) => (
              <div key={idx}>
                {content.bodyDescription && (
                  <p className="">{content.bodyDescription}</p>
                )}
                {content.bulletPoints && (
                  <ul className=" ml-6 mb-2">
                    {content.bulletPoints.map((point, pointIdx) => (
                      <li key={pointIdx} className="mb-2">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          {section.img && section.imgLocation === "bottom" && (
            <Image
              src={section.img}
              alt={section.imgAlt}
              width={500}
              height={300}
              className="w-full overflow-hidden object-cover object-center rounded-xl"
            />
          )}
        </div>
      ))}
    </section>
  );
}
