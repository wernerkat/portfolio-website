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
  summary: string;
  tags?: string[];
};

export const work: CaseStudyType[] = [
  // Carbon Hub Case Study
  {
    title: "Carbon Hub Case Study",
    href: "/carbon-hub",
    mainImg:
      "https://random-image-pepebigotes.vercel.app/api/random-image?seed=3",

    // keep summary to 224 characters or less
    summary:
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
  // Budget Feature Case Study
  {
    title: "Budget Feature Case Study",
    href: "/budget-feature",
    mainImg:
      "https://random-image-pepebigotes.vercel.app/api/random-image?seed=57",
    // keep summary to 224 characters or less
    summary:
      "The Budget Feature Case Study explores the development of a new budgeting tool that allows users to set and track their budgets effectively, providing insights into their spending habits and helping them achieve financial goals.",
    tags: ["Figma", "Research", "Energy"],
    sections: [
      // Section 1
      {
        sectionTitle:
          "Automating Budgeting Feature for Enhanced User Flexibility",
        sectionDescription: "Background",

        body: [
          {
            bodyDescription:
              "As the Product Manager leading the team at XYZ Company, we undertook a project to create an automated budgeting feature based on a popular budget spreadsheet extensively used by our customers. The new feature aimed to automatically generate a budget using utility data from a previous year of the user's choice, providing them with the flexibility to manipulate the data and create a revised version of their budget. With a tight timeline of two sprints, we delved into customer interviews to gather insights from those specifically requesting this functionality.",
            bulletPoints: null,
          },
        ],
        img:
          "https://random-image-pepebigotes.vercel.app/api/random-image?seed=2",
        imgAlt: "Budget Case Study Image",
        imgLocation: "bottom",
      },
      // Section 2
      {
        sectionTitle:
          "Enhancing Data Output Flexibility for Seamless Manipulation",
        sectionDescription: "Limitations",

        body: [
          {
            bodyDescription:
              "While developing the automated budgeting feature at XYZ Company, a key consideration was ensuring that the output data could be easily manipulated by users. Recognizing the importance of user-friendly formats, we implemented a solution where the generated data was readily available in spreadsheet format. This approach empowered our users to make quick edits, perform detailed analysis, and create new budget versions with ease.",
            bulletPoints: null,
          },
        ],
        img:
          "https://random-image-pepebigotes.vercel.app/api/random-image?seed=7",
        imgAlt: "Limitation Image",
        imgLocation: "bottom",
      },

      // Section 3
      {
        sectionTitle: "Uncovering User Needs Through Customer Interviews",
        sectionDescription: "Research",

        body: [
          {
            bodyDescription:
              "In my role as Product Manager, I spearheaded the research phase by conducting in-depth customer interviews with individuals who had been vocal about the need for an automated budgeting feature. These interviews were instrumental in understanding the pain points and specific requirements of our target users. By empathizing with their challenges and listening to their feedback, we gained valuable insights into how they currently managed their budgets using spreadsheets and the limitations they faced.",
            bulletPoints: null,
          },
          {
            bodyDescription:
              "The customer interviews revealed that many users found the manual process of creating and updating budgets in spreadsheets time-consuming and prone to errors. They expressed a strong desire for a more efficient solution that could automate repetitive tasks while still allowing them the flexibility to adjust figures based on their unique circumstances. Additionally, users emphasized the importance of being able to compare different budget versions easily and track changes over time.",
            bulletPoints: null,
          },
        ],
        img:
          "https://random-image-pepebigotes.vercel.app/api/random-image?seed=8",
        imgAlt: "Research Image",
        imgLocation: "bottom",
      },

      // Section 4
      {
        sectionTitle: "Design Solution for Scalability and User Experience",
        sectionDescription: "Design and development",

        body: [
          {
            bodyDescription:
              "During development collaboration and testing, it was discovered that customers with very large organizations experienced longer processing times when generating budgets, causing potential concerns. To address this challenge, we implemented a design solution aimed at managing user expectations. Through transparent communication, we educated customers that extended output times were due to the automated generation process rather than system failures. This proactive approach not only reassured users but also set accurate expectations about budgeting completion times.",
            bulletPoints: null,
          },
        ],
        img:
          "https://random-image-pepebigotes.vercel.app/api/random-image?seed=83",
        imgAlt: "Design and Development Image",
        imgLocation: "bottom",
      },

      // Section 5
      {
        sectionTitle: "Driving User Engagement and Business Impact",
        sectionDescription: "Results/Impact",

        body: [
          {
            bodyDescription:
              "Following the successful implementation of the automated budgeting feature at XYZ Company, we witnessed significant improvements in user engagement metrics:",
            bulletPoints: [
              `<strong> Reduced manual budget creation time by 45%</strong> , allowing users to focus on strategic financial planning rather than administrative tasks.`,
              "Increased user retention by 30% among customers actively utilizing the new feature.",
              "Decreased support tickets related to budget errors by 25% due to improved accuracy and automation.",
              "Boosted overall customer satisfaction scores by 20 points through positive feedback on ease of use and enhanced functionality.",
            ],
          },
          {
            bodyDescription:
              "Moreover, from a business perspective, we observed a 15% uptick in premium subscriptions attributed to the added value provided by the automated budgeting feature. This translated into $100K in additional revenue within six months of launch.",
            bulletPoints: null,
          },
          {
            bodyDescription:
              "By leveraging agile methodologies, customer-centric design principles, and close collaboration across teams, we successfully delivered a transformative solution that not only met user expectations but also drove tangible business outcomes at XYZ Company.",
            bulletPoints: null,
          },
        ],
        img:
          "https://random-image-pepebigotes.vercel.app/api/random-image?seed=6",
        imgAlt: "Research Image",
        imgLocation: "bottom",
      },
    ],
  },
  // Emissions Tracking Case Study
  {
    title: "Emissions Tracking Case Study",
    href: "/emissions-tracking",
    mainImg:
      "https://random-image-pepebigotes.vercel.app/api/random-image?seed=100",
    // keep summary to 224 characters or less
    summary:
      "The Emissions Tracking Case Study explores the development of a comprehensive emissions tracking tool that allows users to monitor and manage their carbon footprint effectively, providing insights into their environmental impact and helping them achieve sustainability goals.",
    tags: ["Figma", "Research", "Energy"],
    sections: [
      // Section 1
      {
        sectionTitle: "Enhancing emissions tracking",
        sectionDescription: "Background",

        body: [
          {
            bodyDescription:
              "Carbon emissions tracking is complex. You need to multiply your total emissions by an emissions factor (generally soemthing selected from a library curated by an organization like the EPA). From here, you can get a meaningful value through which to benchmark your organization to others or provide evidence of carbon reduction. You can also report these numbers as part of certifications or even mandates. ",
            bulletPoints: null,
          },
          {
            bodyDescription:
              "Following all that? Good! Now lets make it more confusing and explain market vs. location emissions.",
            bulletPoints: null,
          },
          {
            bodyDescription:
              "Customers may actually need to provide emissions in both of these ways, so they requested that we make our carbonHub emissions sources more flexible.",
            bulletPoints: null,
          },
        ],
        img:
          "https://random-image-pepebigotes.vercel.app/api/random-image?seed=30",
        imgAlt: "Emissions Tracking Image",
        imgLocation: "bottom",
      },
      // Section 2
      {
        sectionTitle: "Talk to more customers",
        sectionDescription: "Research",

        body: [
          {
            bodyDescription:
              "Created a survey for customers to get a sense for if this was a one-off request.",
            bulletPoints: null,
          },
        ],
        img:
          "https://random-image-pepebigotes.vercel.app/api/random-image?seed=31",
        imgAlt: "Research Image",
        imgLocation: "bottom",
      },
    ],
  },
];
