var mockProfiles = [
  {
    "id": "0",
    "name": "Avery Scott",
    "photo": "https://randomuser.me/api/portraits/women/0.jpg",
    "description": "Freelance Photographer capturing moments.",
    "address": { "lat": 37.9838, "lng": 23.7275 }
    },
    {
      "id": "1",
      "name": "John Doe",
      "photo": "https://randomuser.me/api/portraits/men/30.jpg",
      "description": "Software Engineer with a passion for scalable web apps.",
      "address": { "lat": 37.7749, "lng": -122.4194 }
    },
    {
      "id": "2",
      "name": "Jane Smith",
      "photo": "https://randomuser.me/api/portraits/women/64.jpg",
      "description": "Product Manager specializing in innovative solutions.",
      "address": { "lat": 34.0522, "lng": -118.2437 }
    },
    {
      "id": "3",
      "name": "Alice Johnson",
      "photo": "https://randomuser.me/api/portraits/women/22.jpg",
      "description": "UX Designer focused on user-centered design.",
      "address": { "lat": 40.7128, "lng": -74.006 }
    },
    {
      "id": "4",
      "name": "Bob Brown",
      "photo": "https://randomuser.me/api/portraits/men/42.jpg",
      "description": "Data Scientist with expertise in AI and ML.",
      "address": { "lat": 41.8781, "lng": -87.6298 }
    },
    {
      "id": "5",
      "name": "Emma Wilson",
      "photo": "https://randomuser.me/api/portraits/women/55.jpg",
      "description": "Digital Marketing Specialist with a creative edge.",
      "address": { "lat": 29.7604, "lng": -95.3698 }
    },
    {
      "id": "6",
      "name": "Liam Garcia",
      "photo": "https://randomuser.me/api/portraits/men/73.jpg",
      "description": "Cloud Architect with AWS and Azure experience.",
      "address": { "lat": 47.6062, "lng": -122.3321 }
    },
    {
      "id": "7",
      "name": "Olivia Martinez",
      "photo": "https://randomuser.me/api/portraits/women/31.jpg",
      "description": "Cybersecurity Analyst for enterprise systems.",
      "address": { "lat": 25.7617, "lng": -80.1918 }
    },
    {
      "id": "8",
      "name": "William Davis",
      "photo": "https://randomuser.me/api/portraits/men/18.jpg",
      "description": "Full-stack Developer adept in JavaScript frameworks.",
      "address": { "lat": 39.7392, "lng": -104.9903 }
    },
    {
      "id": "9",
      "name": "Sophia Anderson",
      "photo": "https://randomuser.me/api/portraits/women/47.jpg",
      "description": "HR Specialist with a knack for talent acquisition.",
      "address": { "lat": 32.7767, "lng": -96.797 }
    },
    {
      "id": "10",
      "name": "James Thomas",
      "photo": "https://randomuser.me/api/portraits/men/24.jpg",
      "description": "Blockchain Developer creating decentralized apps.",
      "address": { "lat": 33.4484, "lng": -112.074 }
    },
        {
        "id": "11",
        "name": "Liam Smith",
        "photo": "https://randomuser.me/api/portraits/men/30.jpg",
        "description": "Web Developer with a passion for clean code.",
        "address": { "lat": 35.6895, "lng": 139.6917 }
        },
        {
        "id": "12",
        "name": "Emma Johnson",
        "photo": "https://randomuser.me/api/portraits/women/0.jpg",
        "description": "Digital Marketing Specialist.",
        "address": { "lat": 40.7128, "lng": -74.0060 }
        },
        {
        "id": "13",
        "name": "Noah Williams",
        "photo": "https://randomuser.me/api/portraits/men/10.jpg",
        "description": "Full Stack Developer building scalable applications.",
        "address": { "lat": 34.0522, "lng": -118.2437 }
        },
        {
        "id": "14",
        "name": "Olivia Brown",
        "photo": "https://randomuser.me/api/portraits/women/4.jpg",
        "description": "UX/UI Designer creating intuitive user experiences.",
        "address": { "lat": 51.5074, "lng": -0.1278 }
        },
        {
        "id": "15",
        "name": "Elijah Jones",
        "photo": "https://randomuser.me/api/portraits/men/3.jpg",
        "description": "Machine Learning Engineer.",
        "address": { "lat": 48.8566, "lng": 2.3522 }
        },
        {
        "id": "16",
        "name": "Sophia Garcia",
        "photo": "https://randomuser.me/api/portraits/women/6.jpg",
        "description": "SEO Specialist optimizing web content.",
        "address": { "lat": 37.7749, "lng": -122.4194 }
        },
        {
        "id": "17",
        "name": "James Martinez",
        "photo": "https://randomuser.me/api/portraits/men/20.jpg",
        "description": "Cloud Architect designing cloud solutions.",
        "address": { "lat": 40.7306, "lng": -73.9352 }
        },
        {
        "id": "18",
        "name": "Isabella Anderson",
        "photo": "https://randomuser.me/api/portraits/women/14.jpg",
        "description": "Content Writer crafting compelling stories.",
        "address": { "lat": 28.6139, "lng": 77.2090 }
        },
        {
        "id": "19",
        "name": "Benjamin Taylor",
        "photo": "https://randomuser.me/api/portraits/men/25.jpg",
        "description": "Data Scientist analyzing big data.",
        "address": { "lat": 41.8781, "lng": -87.6298 }
        },
        {
        "id": "20",
        "name": "Mia Thomas",
        "photo": "https://randomuser.me/api/portraits/women/18.jpg",
        "description": "Graphic Designer with an eye for detail.",
        "address": { "lat": 34.6937, "lng": 135.5023 }
        },
        {
        "id": "21",
        "name": "Lucas White",
        "photo": "https://randomuser.me/api/portraits/men/25.jpg",
        "description": "Cybersecurity Expert securing networks.",
        "address": { "lat": 30.0444, "lng": 31.2357 }
        },
        {
        "id": "22",
        "name": "Charlotte Harris",
        "photo": "https://randomuser.me/api/portraits/women/46.jpg",
        "description": "Product Manager leading cross-functional teams.",
        "address": { "lat": 35.6895, "lng": 139.6917 }
        },
        {
        "id": "23",
        "name": "Henry Clark",
        "photo": "https://randomuser.me/api/portraits/men/35.jpg",
        "description": "Mobile App Developer specializing in iOS.",
        "address": { "lat": 55.7558, "lng": 37.6173 }
        },
        {
        "id": "24",
        "name": "Amelia Lewis",
        "photo": "https://randomuser.me/api/portraits/women/33.jpg",
        "description": "Operations Manager streamlining processes.",
        "address": { "lat": 19.0760, "lng": 72.8777 }
        },
        {
        "id": "25",
        "name": "Logan Walker",
        "photo": "https://randomuser.me/api/portraits/men/0.jpg",
        "description": "Blockchain Developer innovating in fintech.",
        "address": { "lat": 1.3521, "lng": 103.8198 }
        },
        {
        "id": "26",
        "name": "Harper Hall",
        "photo": "https://randomuser.me/api/portraits/women/16.jpg",
        "description": "HR Specialist improving workplace culture.",
        "address": { "lat": 31.2304, "lng": 121.4737 }
        },
        {
        "id": "27",
        "name": "Alexander Allen",
        "photo": "https://randomuser.me/api/portraits/men/9.jpg",
        "description": "Game Developer creating immersive worlds.",
        "address": { "lat": 52.5200, "lng": 13.4050 }
        },
        {
        "id": "28",
        "name": "Ella Young",
        "photo": "https://randomuser.me/api/portraits/women/2.jpg",
        "description": "Research Scientist in AI.",
        "address": { "lat": 59.3293, "lng": 18.0686 }
        },
        {
        "id": "29",
        "name": "William King",
        "photo": "https://randomuser.me/api/portraits/men/23.jpg",
        "description": "DevOps Engineer automating workflows.",
        "address": { "lat": 13.7563, "lng": 100.5018 }
        },
        {
        "id": "30",
        "name": "Avery Scott",
        "photo": "https://randomuser.me/api/portraits/women/0.jpg",
        "description": "Freelance Photographer capturing moments.",
        "address": { "lat": 37.9838, "lng": 23.7275 }
        },
            {
              "id": "31",
              "name": "Michael Johnson",
              "photo": "https://randomuser.me/api/portraits/men/6.jpg",
              "description": "Backend Developer specializing in APIs.",
              "address": { "lat": 34.0522, "lng": -118.2437 }
            },
            {
              "id": "32",
              "name": "Emma Davis",
              "photo": "https://randomuser.me/api/portraits/women/17.jpg",
              "description": "Marketing Manager with a creative flair.",
              "address": { "lat": 40.7128, "lng": -74.0060 }
            },
            {
              "id": "33",
              "name": "David Martinez",
              "photo": "https://randomuser.me/api/portraits/men/33.jpg",
              "description": "DevOps Engineer passionate about automation.",
              "address": { "lat": 41.8781, "lng": -87.6298 }
            },
            {
              "id": "34",
              "name": "Sophia Brown",
              "photo": "https://randomuser.me/api/portraits/women/63.jpg",
              "description": "Content Writer creating engaging narratives.",
              "address": { "lat": 29.7604, "lng": -95.3698 }
            },
            {
              "id": "35",
              "name": "James Wilson",
              "photo": "https://randomuser.me/api/portraits/men/35.jpg",
              "description": "Mobile App Developer with a focus on Android.",
              "address": { "lat": 47.6062, "lng": -122.3321 }
            },
            {
              "id": "36",
              "name": "Olivia Garcia",
              "photo": "https://randomuser.me/api/portraits/women/56.jpg",
              "description": "Financial Analyst helping businesses grow.",
              "address": { "lat": 25.7617, "lng": -80.1918 }
            },
            {
              "id": "37",
              "name": "Liam Taylor",
              "photo": "https://randomuser.me/api/portraits/men/30.jpg",
              "description": "Cybersecurity Specialist securing systems.",
              "address": { "lat": 39.7392, "lng": -104.9903 }
            },
            {
              "id": "38",
              "name": "Ava Thomas",
              "photo": "https://randomuser.me/api/portraits/women/62.jpg",
              "description": "Data Analyst turning numbers into insights.",
              "address": { "lat": 32.7767, "lng": -96.7970 }
            },
            {
              "id": "39",
              "name": "Noah Moore",
              "photo": "https://randomuser.me/api/portraits/men/20.jpg",
              "description": "AI Engineer exploring neural networks.",
              "address": { "lat": 33.4484, "lng": -112.0740 }
            },
            {
              "id": "40",
              "name": "Isabella Clark",
              "photo": "https://randomuser.me/api/portraits/women/28.jpg",
              "description": "Project Manager driving results.",
              "address": { "lat": 36.1699, "lng": -115.1398 }
            },
            {
              "id": "41",
              "name": "Ethan Lewis",
              "photo": "https://randomuser.me/api/portraits/men/19.jpg",
              "description": "Game Developer crafting immersive experiences.",
              "address": { "lat": 37.7749, "lng": -122.4194 }
            },
            {
              "id": "42",
              "name": "Mia Walker",
              "photo": "https://randomuser.me/api/portraits/women/3.jpg",
              "description": "Operations Manager optimizing workflows.",
              "address": { "lat": 34.0522, "lng": -118.2437 }
            },
            {
              "id": "43",
              "name": "Alexander Hall",
              "photo": "https://randomuser.me/api/portraits/men/4.jpg",
              "description": "Cloud Engineer managing scalable infrastructures.",
              "address": { "lat": 40.7128, "lng": -74.0060 }
            },
            {
              "id": "44",
              "name": "Charlotte Allen",
              "photo": "https://randomuser.me/api/portraits/women/5.jpg",
              "description": "HR Manager fostering company culture.",
              "address": { "lat": 41.8781, "lng": -87.6298 }
            },
            {
              "id": "45",
              "name": "Benjamin Scott",
              "photo": "https://randomuser.me/api/portraits/men/7.jpg",
              "description": "SEO Specialist improving online presence.",
              "address": { "lat": 29.7604, "lng": -95.3698 }
            },
            {
              "id": "46",
              "name": "Amelia Young",
              "photo": "https://randomuser.me/api/portraits/women/9.jpg",
              "description": "Freelance Graphic Designer.",
              "address": { "lat": 47.6062, "lng": -122.3321 }
            },
            {
              "id": "47",
              "name": "Henry King",
              "photo": "https://randomuser.me/api/portraits/men/10.jpg",
              "description": "Research Scientist in quantum computing.",
              "address": { "lat": 25.7617, "lng": -80.1918 }
            },
            {
              "id": "48",
              "name": "Evelyn Wright",
              "photo": "https://randomuser.me/api/portraits/women/38.jpg",
              "description": "Healthcare Consultant improving patient care.",
              "address": { "lat": 39.7392, "lng": -104.9903 }
            },
            {
              "id": "49",
              "name": "Samuel Green",
              "photo": "https://randomuser.me/api/portraits/men/18.jpg",
              "description": "Frontend Developer crafting modern UIs.",
              "address": { "lat": 32.7767, "lng": -96.7970 }
            },
            {
              "id": "50",
              "name": "Harper Adams",
              "photo": "https://randomuser.me/api/portraits/women/64.jpg",
              "description": "Business Analyst streamlining operations.",
              "address": { "lat": 33.4484, "lng": -112.0740 }
            }   
        
  ]

  export default mockProfiles;
  