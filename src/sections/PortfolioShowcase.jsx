import { useState, useEffect, useRef } from "react";

// Data Access Object (DAO) for managing project data
const getProjects = () => [
  {
    title: "Casino Website",
    description: "Goodwin.am is an online casino and betting platform",
    link: "https://goodwin.am/en/",
    images: [
      "/project/project1.png",
      "/project/project2.png",
      "/project/project3.png",
      "/project/project4.png",
      "/project/project5.png",
      "/project/project6.png",
      "/project/project7.png",
      "/project/project8.png",
      "/project/project9.png",
      "/project/project10.png",
      "/project/project11.png",
      "/project/project12.png",
    ],
    role: "Full-stack Web Developer",
    jobResponsibilities: "Front end and node proxy parts (all project had 6 parts)",
    duration: "18 months (ongoing)",
    technologies: ["React JS", "Node JS", "SCSS", "Git"],
  },
  {
    title: "Digital Wallet",
    description: "A secure and user-friendly digital wallet for easy transactions and balance management.",
    link: "https://1sq.realty/",
    images: [
      "/project2/1-mobile.png",
      "/project2/2-mobile.png",
      "/project2/3-mobile.png",
      "/project2/4-mobile.png",
      "/project2/5-mobile.png",
      "/project2/6-mobile.png",
      "/project2/7-mobile.png",
      "/project2/8-mobile.png",
      "/project2/9-mobile.png",
      "/project2/10-mobile.png",
      "/project2/11-mobile.png",
    ]
  },
  {
    title: "Dashboard UI",
    description: "A highly interactive admin dashboard with real-time data visualization.",
    link: "https://documan.am/",
    images: [
      "/project3/project1.png",
      "/project3/project2.png",
      "/project3/project3.png",
      "/project3/project4.png",
      "/project3/project5.png"
    ]
  },
  {
    title: "1SQ Realty",
    description: "Real estate buying and renting platform, also a useful tool for Realtors.",
    link: "https://1sq.realty/",
    images: [
      "/project4/project1.png",
      "/project4/project2.png",
      "/project4/project3.png",
      "/project4/project4.png",
      "/project4/project5.png"
    ],
    role: "Front-end Web Developer",
    jobResponsibilities: "Front end style and functionality",
    duration: "6 months",
    technologies: ["React JS", "CSS", "JavaScript", "Git"],
  }
];

// Data Access Object (DAO) function for fetching project data
const fetchProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getProjects()), 500);  // Simulating API call delay
  });
};

const PortfolioShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);

  // Create a ref for the selected project details
  const projectDetailsRef = useRef(null);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  // Handle project click and scroll to the selected project
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowAllImages(true);

    // Scroll to the project details
    if (projectDetailsRef.current) {
      projectDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="c-space my-20" id="work">
      <div className="p-6 bg-gray-900 min-h-screen text-white">
        <h1 className="text-3xl font-bold text-center mb-6">My Best Practices Showcase</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 border border-gray-700 rounded-xl hover:bg-gray-800 transition cursor-pointer"
              onClick={() => handleProjectClick(project)}  // Using the new click handler
            >
              <div className="mb-4">
                <img src={project.images[0]} alt={project.title} className="w-full h-40 object-cover rounded-md" />
              </div>
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div
            ref={projectDetailsRef}  // Attach the ref here
            className="mt-8 p-4 border border-gray-700 rounded-xl bg-gray-800"
          >
            {showAllImages && (
              <div className="grid grid-cols-5 gap-2 mb-4">
                {selectedProject.images.map((img, i) => (
                  <img key={i} src={img} alt={selectedProject.title} className="w-full h-84 object-cover rounded-md" />
                ))}
              </div>
            )}
            <h2 className="text-2xl font-semibold">{selectedProject.title}</h2>
            <p className="text-gray-400">{selectedProject.description}</p>
            <a
              href={selectedProject.link}
              className="text-blue-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>

            {selectedProject.role && (
              <div className="mt-4 text-gray-400">
                <p><strong>Role:</strong> {selectedProject.role}</p>
                <p><strong>Job Responsibilities:</strong> {selectedProject.jobResponsibilities}</p>
                <p><strong>Duration:</strong> {selectedProject.duration}</p>
                <p><strong>Technologies Used:</strong> {selectedProject.technologies.join(", ")}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioShowcase;
