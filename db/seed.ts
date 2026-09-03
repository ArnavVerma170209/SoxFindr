import { eq } from "drizzle-orm";
import { db } from "./index";
import { departments, societies } from "./schema";

export const societyData = [
  // TECHNICAL
  {
    id: 1,
    name: "Google developers Group",
    image: "/societies/gdg.webp",
    category: "Technical",
    description:
      "Google Developer Groups NSUT brings together students passionate about software development, emerging technologies, and building real-world projects.",
    departments: [
      "Development",
      "AI/ML",
      "Design",
      "Content",
      "PR & Outreach",
    ],
  },

  {
    id: 2,
    name: "Institute of Electrical and Electronics Engineers (IEEE)",
    image: "/societies/IEEE.webp",
    category: "Technical",
    description:
      "A community for students interested in engineering, electronics, computing, innovation, and technological research.",
    departments: [
      "Technical",
      "Research",
      "Design",
      "Content",
      "PR & Outreach",
    ],
  },

  {
    id: 3,
    name: "The Debugging Society",
    image: "/societies/tds.webp",
    category: "Technical",
    description:
      "A technical society focused on programming, competitive coding, technology, and developing practical problem-solving skills.",
    departments: [
      "Competitive Programming",
      "Development",
      "AI/ML",
      "Research",
      "PR & Outreach",
    ],
  },

  {
    id: 4,
    name: "DevComm NSUT",
    image: "/societies/devcomm.webp",
    category: "Technical",
    description:
      "A student community dedicated to computer science, software development, programming, and exploring new areas of computing.",
    departments: [
      "Web Development",
      "App Development",
      "AI/ML",
      "Design",
      "Open Source",
    ],
  },

  // CULTURAL
  {
    id: 5,
    name: "Moksha",
    image: "/societies/moksha.webp",
    category: "Cultural",
    description:
      "NSUT's cultural society bringing together students interested in dance, music, theatre, and creative expression.",
    departments: [
      "Dance",
      "Music",
      "Theatre",
      "Production",
      "PR & Outreach",
    ],
  },

  {
    id: 6,
    name: "Western Dance Society",
    image: "/societies/wds.webp",
    category: "Cultural",
    description:
      "A dance community for students passionate about contemporary, hip-hop, and other western dance styles.",
    departments: [
      "Choreography",
      "Performance",
      "Production",
      "Design",
      "PR & Outreach",
    ],
  },

  {
    id: 7,
    name: "Music Society",
    image: "/societies/ms.webp",
    category: "Cultural",
    description:
      "A community for singers, instrumentalists, and music enthusiasts to collaborate and perform.",
    departments: [
      "Vocals",
      "Instrumental",
      "Composition",
      "Production",
      "PR & Outreach",
    ],
  },

  {
    id: 8,
    name: "Ashwanmedh",
    image: "/societies/ashwa.webp",
    category: "Cultural",
    description:
      "A creative space for students interested in acting, theatre, stage performances, and storytelling.",
    departments: [
      "Acting",
      "Direction",
      "Scriptwriting",
      "Production",
      "Design",
    ],
  },

  // LITERARY
  {
    id: 9,
    name: "DebSoc",
    image: "/societies/debsoc.webp",
    category: "Literary",
    description:
      "NSUT's debating community for students interested in public speaking, argumentation, critical thinking, and competitive debating.",
    departments: [
      "Debating",
      "Research",
      "Content",
      "Events",
      "PR & Outreach",
    ],
  },

  {
    id: 10,
    name: "Quizzing Society",
    image: "/societies/qs.webp",
    category: "Literary",
    description:
      "A community for trivia enthusiasts who enjoy competitive quizzing, general knowledge, and discovering interesting facts.",
    departments: [
      "Quizzing",
      "Question Setting",
      "Research",
      "Events",
      "PR & Outreach",
    ],
  },

  {
    id: 11,
    name: "Creative Writing Society",
    image: "/societies/cws.webp",
    category: "Literary",
    description:
      "A platform for students interested in poetry, fiction, essays, storytelling, and other forms of creative writing.",
    departments: [
      "Writing",
      "Editing",
      "Content",
      "Design",
      "PR & Outreach",
    ],
  },

  {
    id: 12,
    name: "Literary Society",
    image: "/societies/tls.webp",
    category: "Literary",
    description:
      "A community that encourages reading, writing, discussion, and exploration of literature and ideas.",
    departments: [
      "Writing",
      "Research",
      "Editing",
      "Events",
      "PR & Outreach",
    ],
  },

  // SOCIAL
  {
    id: 13,
    name: "Enactus NSUT",
    image: "/societies/enactus.webp",
    category: "Social",
    description:
      "A student community focused on entrepreneurship and creating sustainable solutions to social and economic challenges.",
    departments: [
      "Social Projects",
      "Business Development",
      "Research",
      "Marketing",
      "PR & Outreach",
    ],
  },

  {
    id: 14,
    name: "NSS NSUT",
    image: "/societies/nss.webp",
    category: "Social",
    description:
      "A student volunteer community working on social initiatives, community service, awareness campaigns, and civic engagement.",
    departments: [
      "Community Service",
      "Social Awareness",
      "Events",
      "Content",
      "PR & Outreach",
    ],
  },

  {
    id: 15,
    name: "Rotaract NSUT",
    image: "/societies/rota.webp",
    category: "Social",
    description:
      "A youth-led community focused on volunteering, leadership, social impact, and community development.",
    departments: [
      "Community Service",
      "Social Impact",
      "Events",
      "Fundraising",
      "PR & Outreach",
    ],
  },

  {
    id: 16,
    name: "ECell NSUT",
    image: "/societies/ecell.webp",
    category: "Social",
    description:
      "A community that promotes entrepreneurship, innovation, startup culture, and business-oriented initiatives among students.",
    departments: [
      "Entrepreneurship",
      "Business Development",
      "Research",
      "Events",
      "Marketing & PR",
    ],
  },
];

// async function seedDepartments() {
 
//     const ExistingSoc = { id: 2,
//     name: "IEEE NSUT",
//     category: "Technical",
//     description:
//       "A community for students interested in engineering, electronics, computing, innovation, and technological research.",
//     departments: [
//       "Technical",
//       "Research",
//       "Design",
//       "Content",
//       "PR & Outreach",
//     ],
//   }
// const result = await db.insert(departments).values(
//   ExistingSoc.departments.map((department) => ({
//     societyId: ExistingSoc.id,
//     name: department,
//   }))
// ).returning();

// console.log("Inserted:", result);
// console.log("Done!");
// }

// seedDepartments()
//   .catch(console.error)
//   .finally(() => process.exit(0));