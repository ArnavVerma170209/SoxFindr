import { db } from "./index";
import { societies } from "./schema";

export const societyData = [
  // TECHNICAL 

  {
    id : 1,
    name: "Google developers Group",
    category: "Technical",
    description:
      "Google Developer Groups NSUT brings together students passionate about software development, emerging technologies, and building real-world projects.",
  },
  {
    id : 2,
    name: "Institute of Electrical and Electronics Engineers (IEEE)",
    category: "Technical",
    description:
      "A community for students interested in engineering, electronics, computing, innovation, and technological research.",
  },
  {
     id : 3,
    name: "The Debugging Society",
    category: "Technical",
    description:
      "A technical society focused on programming, competitive coding, technology, and developing practical problem-solving skills.",
  },
  {
    id : 4,
    name: "DevComm NSUT",
    category: "Technical",
    description:
      "A student community dedicated to computer science, software development, programming, and exploring new areas of computing.",
  },

  //  CULTURAL 

  {
     id : 5,
    name: "Moksha",
    category: "Cultural",
    description:
      "NSUT's cultural society bringing together students interested in dance, music, theatre, and creative expression.",
  },
  {
     id : 6,
    name: "Western Dance Society",
    category: "Cultural",
    description:
      "A dance community for students passionate about contemporary, hip-hop, and other western dance styles.",
  },
  {
     id : 7,
    name: "Music Society",
    category: "Cultural",
    description:
      "A community for singers, instrumentalists, and music enthusiasts to collaborate and perform.",
  },
  {
     id : 8,
    name: "Ashwanmedh",
    category: "Cultural",
    description:
      "A creative space for students interested in acting, theatre, stage performances, and storytelling.",
  },

  // LITERARY 

  {
     id : 9,
    name: "DebSoc",
    category: "Literary",
    description:
      "NSUT's debating community for students interested in public speaking, argumentation, critical thinking, and competitive debating.",
  },
  {
     id : 10,
    name: "Quizzing Society",
    category: "Literary",
    description:
      "A community for trivia enthusiasts who enjoy competitive quizzing, general knowledge, and discovering interesting facts.",
  },
  {
     id : 11,
    name: "Creative Writing Society",
    category: "Literary",
    description:
      "A platform for students interested in poetry, fiction, essays, storytelling, and other forms of creative writing.",
  },
  {
     id : 12,
    name: "Literary Society",
    category: "Literary",
    description:
      "A community that encourages reading, writing, discussion, and exploration of literature and ideas.",
  },

  // SOCIAL 

  {
     id : 13,
    name: "Enactus NSUT",
    category: "Social",
    description:
      "A student community focused on entrepreneurship and creating sustainable solutions to social and economic challenges.",
  },
  {
    id : 14,
    name: "NSS NSUT",
    category: "Social",
    description:
      "A student volunteer community working on social initiatives, community service, awareness campaigns, and civic engagement.",
  },
  {
     id : 15,
    name: "Rotaract NSUT",
    category: "Social",
    description:
      "A youth-led community focused on volunteering, leadership, social impact, and community development.",
  },
  {
     id : 16,
    name: "ECell NSUT",
    category: "Social",
    description:
      "A community that promotes entrepreneurship, innovation, startup culture, and business-oriented initiatives among students.",
  },
];


// for(let i=0;i<societyData.length; i++){
//     await db.insert(societies).values({
//         name : societyData[i].name,
//         description : societyData[i].description,
//         category : societyData[i].category
//     });
// }

// console.log("done")

// process.exit(0);