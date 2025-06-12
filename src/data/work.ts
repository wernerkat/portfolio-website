export type BodyType = {
  description: string;
  bulletPoints: string[] | null;
};

export type CaseStudySection = {
  description: string;
  title: string;
  body: BodyType[];
  img: any | null;
  imgLocation: "top" | "middle" | "bottom";
};

export type CaseStudyType = {
  title: string;
  sections: CaseStudySection[];
  href: string;
  mainImg: any;
  briefDescription: string;
  tags?: string[];
};

export const work: CaseStudyType[] = [
  {
    title: "Carbon Hub Case Study",
    href: "/carbon-hub",
    mainImg: "/default_img.png",
    briefDescription:
      "Today, the universal standard is to count them by scopes. Scope 1 and 2 are counted by energy we directly purchase (electricity and gas are common. Sope 3 is everything else.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    sections: [
      {
        description: "Context",
        title:
          "Reducing Carbon Footprint: A Sustainable Solution for Emissions Tracking",
        body: [
          {
            description:
              "We are all familiar with the terms 'greenhouse gases' and 'carbon emissions', but have most of us ever stopped to consider exactly how they are calculated? To put it simply, getting an accurate picture of emissions individual people are responsible for is complex. And for an organization? Even more so.",
            bulletPoints: null,
          },
          {
            description:
              "Today, the universal standard is to count them by scopes. Scope 1 and 2 are counted by energy we directly purchase (electricity and gas are common. Sope 3 is everything else.",
            bulletPoints: null,
          },
          {
            description:
              "As a UX team manager at our company, I led a project alongside my team member to develop a new app focused on carbon emissions tracking. The challenge was to create a tool that could leverage the existing utility bill information gathered by our company's current utility management tool and translate it into comprehensive carbon emissions data. Not only did we need to incorporate scope 1 and 2 emissions data often located within UtilityManagement, but we also aimed to include scope 3 emissions data to provide a holistic view of our users' carbon footprint.",
            bulletPoints: null,
          },
        ],
        img: null,
        imgLocation: "bottom",
      },
    ],
  },
];
