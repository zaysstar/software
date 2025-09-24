import './App.css'
import Card from './Card';

function App() {
  const techResources = [
  {
    name: "React",
    category: "Frontend Library",
    description: "A JavaScript library for building user interfaces, maintained by Meta.",
    learnMoreLink: "https://react.dev/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  },
  {
    name: "Vue.js",
    category: "Frontend Framework",
    description: "An approachable, performant, and versatile framework for building web user interfaces.",
    learnMoreLink: "https://vuejs.org/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
  },
  {
    name: "Angular",
    category: "Frontend Framework",
    description: "A platform for building single-page client applications using HTML and TypeScript.",
    learnMoreLink: "https://angular.io/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
  },
  {
    name: "Node.js",
    category: "JavaScript Runtime",
    description: "An asynchronous event-driven JavaScript runtime for building scalable network applications.",
    learnMoreLink: "https://nodejs.org/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
  },
  {
    name: "Express.js",
    category: "Backend Framework",
    description: "A fast, unopinionated, minimalist web framework for Node.js.",
    learnMoreLink: "https://expressjs.com/",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    name: "Django",
    category: "Backend Framework",
    description: "A high-level Python web framework that encourages rapid development and clean design.",
    learnMoreLink: "https://www.djangoproject.com/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
  },
  {
    name: "Ruby on Rails",
    category: "Backend Framework",
    description: "A framework that includes everything needed to create database-backed web applications.",
    learnMoreLink: "https://rubyonrails.org/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg"
  },
  {
    name: "Svelte",
    category: "Frontend Compiler",
    description: "A radical new approach to building user interfaces by compiling components to efficient code.",
    learnMoreLink: "https://svelte.dev/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    description: "A utility-first CSS framework for rapidly building modern websites without leaving your HTML.",
    learnMoreLink: "https://tailwindcss.com/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
  },
  {
    name: "D3.js",
    category: "Data Visualization",
    description: "A JavaScript library for producing dynamic, interactive data visualizations in web browsers.",
    learnMoreLink: "https://d3js.org/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/D3.js_logo.svg"
  }
];

  return (
    <div className="App">
      <h1>Software Engineering Resources</h1>
      <div className="card-container">
        {techResources.map((resource, index) => (
          <Card
            key={index}
            name={resource.name}
            category={resource.category}
            description={resource.description}
            learnMoreLink={resource.learnMoreLink}
          />
        ))}
      </div>
    </div>
  );
}

export default App