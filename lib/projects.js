import nextfoodApp from "@/public/pizza.jpg";
import teachingHeart from "@/public/image-one.jpeg";
import desk from "@/public/desk.webp";
import wildOasis from "@/public/bg-wild-oasis.png";

export function getProjects() {
  const app = "Visit App";
  const website = "Visit Website";

  return [
    {
      id: 1,
      name: "The Wild Oasis",
      url: "https://the-wild-oasis-website-rodrigo.vercel.app/",
      image: wildOasis,
      alt: "Image of a cabin in the woods",
      title: "Cabins Website",
      visit: website,
      summary: "An interactive cabin reservation website.",
      description: [
        "This platform leverages both static and dynamic routing to provide seamless navigation and user experience.",
        "Users can easily browse available cabins, check availability, and make reservations.",
        "It incorporates NextAuth for robust user authentication and authorization, ensuring secure access to user accounts.",
        "Additionally, the site utilizes API Routes to handle data interactions efficiently, enabling real-time updates and smooth management of reservations and user data.",
      ],
    },

    {
      id: 2,
      name: "Teaching from the Heart",
      url: "https://teaching-from-the-heart.vercel.app/",
      image: teachingHeart,
      alt: "Image of a ESL web site for kids that want to learn english",
      title: "Teaching from the Heart Website",
      visit: website,
      summary: "An interactive ESL website.",
      description: [
        "Real-world website designed following client consultations, incorporating color psychology, a user-friendly interface for both kids and parents, and cohesive brand-focused design.",
        "Built with Next.js to optimize performance and provide both static and dynamic routing for smooth navigation.",
        "Allows users to read an about page, a blog with short stories with grammatical lessons for kids, and easily submit inquiries through a contact page linked to whatsapp.",
        "Highly responsive design implemented with Tailwind CSS, ensuring a consistent user experience across devices.",
        "Utilizes Next.js App router for efficient and secure handling of data interactions, enhancing real-time functionality.",
        "Automatically switches between light and dark themes based on the user's local time for an adaptive experience.",
      ],
    },
    {
      id: 3,
      name: "NextLevel Food",
      url: "https://food-app-rodrigo.vercel.app/",
      image: nextfoodApp,
      alt: "Image of a an app for sharing meals",
      title: "Food App",
      visit: app,
      summary: "Food app for sharing meals developed using Next.js.",
      description: [
        "App for sharing meals",
        "Completely Responsive using tailwind css",
        "Dinamic routing using in-built Next.js app router",
        "Create new meals with a form using server action",
      ],
    },
    {
      id: 4,
      name: "News Today",
      url: "https://news-today-rodrigo.vercel.app/",
      image: desk,
      alt: "Image of a an app for reading the latest news",
      title: "News App",
      visit: app,
      summary:
        "News app developed with advanced routing and file system using Next.js.",
      description: [
        "An application designed with AI-generated dummy news articles for practice as a personal project.",
        "Completely Responsive using tailwind css",
        "Dinamic routing, parallel routing, intercept routing and more... using in-built Next.js app router",
        "Archive section with advanced filtering by using helper functions",
      ],
    },

    // {
    //   id: 5,
    //   name: "Worldwise",
    //   url: "https://worldwise-travelapp.netlify.app/",
    //   image: worldwiseImage,
    //   alt: "Image of a cabin in the woods",
    //   title: "Worldwise",
    //   visit: app,
    //   summary:
    //     "An intuitive React app to log and visualize your global travel experiences.",
    //   description: [
    //     "Developed with React to allow users to easily input and manage their travel history.",
    //     "Enables logging of countries and cities visited, providing an organized way to track travel.",
    //     "Displays an interactive map for users to visualize their travel progress and explore new destinations.",
    //     "Implements secure data handling for a smooth, reliable experience when adding or updating entries.",
    //     "Focused on delivering a user-friendly interface with a responsive design for access on multiple devices.",
    //   ],
    // },
  ];
}
