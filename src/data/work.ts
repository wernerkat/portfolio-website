export type BodyType = {
  bodyDescription: string;
  bulletPoints: string[] | null;
};

export type CaseStudySection = {
  sectionDescription: string;
  sectionTitle: string;
  body: BodyType[];
  img: any | null;
  imgAlt: string;
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
    mainImg:
      "https://random-image-pepebigotes.vercel.app/api/random-image?seed=3",
    briefDescription:
      "Today, the universal standard is to count them by scopes. Scope 1 and 2 are counted by energy we directly purchase (electricity and gas are common. Sope 3 is everything else.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    sections: [
      // Section 1
      {
        sectionTitle:
          "Reducing Carbon Footprint: A Sustainable Solution for Emissions Tracking",
        sectionDescription: "Context",

        body: [
          {
            bodyDescription:
              "We are all familiar with the terms 'greenhouse gases' and 'carbon emissions', but have most of us ever stopped to consider exactly how they are calculated? To put it simply, getting an accurate picture of emissions individual people are responsible for is complex. And for an organization? Even more so.",
            bulletPoints: null,
          },
          {
            bodyDescription:
              "Today, the universal standard is to count them by scopes. Scope 1 and 2 are counted by energy we directly purchase (electricity and gas are common. Sope 3 is everything else.",
            bulletPoints: [
              "Scope 1: Direct emissions from owned or controlled sources.",
              "Scope 2: Indirect emissions from the generation of purchased electricity, steam, heating, and cooling consumed by the reporting company.",
              "Scope 3: All other indirect emissions that occur in a company's value chain.",
            ],
          },
          {
            bodyDescription:
              "As a UX team manager at our company, I led a project alongside my team member to develop a new app focused on carbon emissions tracking. The challenge was to create a tool that could leverage the existing utility bill information gathered by our company's current utility management tool and translate it into comprehensive carbon emissions data. Not only did we need to incorporate scope 1 and 2 emissions data often located within UtilityManagement, but we also aimed to include scope 3 emissions data to provide a holistic view of our users' carbon footprint.",
            bulletPoints: null,
          },
        ],
        img:
          "https://random-image-pepebigotes.vercel.app/api/random-image?seed=2",
        imgAlt: "Carbon Hub Case Study Image",
        imgLocation: "bottom",
      },
      // Section 2
      {
        sectionTitle:
          "Unveiling the Complexities of Carbon Emissions Data Integration",
        sectionDescription: "Background",

        body: [
          {
            bodyDescription:
              "Our initial research revealed the complexities involved in translating utility bill data into accurate carbon emissions information. We discovered that while utility bills contain energy consumption values, converting these figures into standardized carbon emissions data required sophisticated calculations based on various factors such as energy sources, emission factors, and geographic location. Additionally, incorporating scope 3 emissions data from indirect sources like supply chains and business travel added another layer of complexity to the project because these values are often estimates that require manual data gathering.",
            bulletPoints: null,
          },
        ],
        img:
          "https://random-image-pepebigotes.vercel.app/api/random-image?seed=7",
        imgAlt: "Background Image",
        imgLocation: "bottom",
      },

      // Section 3
      {
        sectionTitle:
          "Overcoming Constraints for Success: A Strategic Approach to App Development",
        sectionDescription: "Constraints & Limitations",

        body: [
          {
            bodyDescription:
              "Despite facing stringent limitations set by our CPO, including utilizing the existing codebase, adhering to a tight deadline for completion by September from a project kickoff in February, and focusing solely on the US market, our team thrived in crafting an innovative solution for emissions tracking. By leveraging the available resources effectively and prioritizing key features within the restricted timeframe, we not only met but exceeded expectations.",
            bulletPoints: null,
          },
        ],
        img:
          "https://random-image-pepebigotes.vercel.app/api/random-image?seed=8",
        imgAlt: "Background Image",
        imgLocation: "bottom",
      },

      // Section 4
      {
        sectionTitle: "",
        sectionDescription: "Risks",

        body: [
          {
            bodyDescription: "",
            bulletPoints: null,
          },
        ],
        img: null,
        imgAlt: "Null Image",
        imgLocation: "bottom",
      },

      // Section 5
      {
        sectionTitle:
          "Enhancing User Research Methodologies for Sustainable Design",
        sectionDescription: "Research",

        body: [
          {
            bodyDescription:
              "Our design approach was anchored in robust user research methodologies that ensured we captured valuable insights for sustainable design:",
            bulletPoints: [
              "Conducted in-depth interviews with subject matter experts to glean industry-specific knowledge on carbon emissions tracking.",
              "Engaged existing customers who were eager to track emissions more accurately, ensuring their needs were central to our design process.",
              "Undertook a comprehensive competitor analysis within the carbon tracking market focusing on competitors suggested to us by our marketing and sales teams to identify key trends and gaps in existing solutions.",
            ],
          },
        ],
        img:
          "https://random-image-pepebigotes.vercel.app/api/random-image?seed=6",
        imgAlt: "Research Image",
        imgLocation: "bottom",
      },

      // Section 6
      {
        sectionTitle: "Strategic Feature Prioritization for MVP Development",
        sectionDescription: "Finding Focus",

        body: [
          {
            bodyDescription:
              "Given the constraints of delivering an MVP within a set timeline and focusing exclusively on the U.S. market, we strategically prioritized key features based on user research insights. The essential functionalities identified included:",
            bulletPoints: [
              "Enabling users to share emissions data for transparency and accountability via dashboards",
              "Providing robust reporting to analyze and share impact",
              "Offering management capabilities to control various emission factors effectively as well as building out a library of factors we will manage as a company",
              "Integrating utility bill linkage to accurately correlate energy consumption with emissions records.",
            ],
          },
        ],
        img:
          "https://random-image-pepebigotes.vercel.app/api/random-image?seed=5",
        imgAlt: "Research Image",
        imgLocation: "bottom",
      },

      // Section 7
      {
        sectionTitle:
          "Driving Sustainable Change: Impactful Results in Emissions Tracking",
        sectionDescription: "Impact",

        body: [
          {
            bodyDescription:
              "The launch of the carbon emissions tracking app yielded significant improvements in both user engagement and environmental awareness:",
            bulletPoints: [
              "Reduced drop-off rates by 45%, leading to a more seamless onboarding experience for new users",
              "Increased average session duration by 30%, indicating higher user interaction with the app's features",
              "Decreased time spent on data entry by 25%, streamlining the process of inputting utility bill information",
              "Improved NPS score from 7.8 to 8.9, reflecting enhanced user satisfaction with the app's functionality and design",
            ],
          },
          {
            bodyDescription:
              "Furthermore, the integration of scope 3 emissions data provided users with a comprehensive overview of their carbon footprint, encouraging more informed decision-making towards sustainability practices.",
            bulletPoints: null,
          },
        ],
        img:
          "https://random-image-pepebigotes.vercel.app/api/random-image?seed=10",
        imgAlt: "Research Image",
        imgLocation: "bottom",
      },
    ],
  },
];
