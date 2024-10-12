export default function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "https://placehold.co/600x400",
      link: "https://www.google.com",
    },
    {
      title: "Project 2",
      image: "https://placehold.co/600x400",
      link: "https://www.google.com",
    },
    {
      title: "Project 3",
      image: "https://placehold.co/600x400",
      link: "https://www.google.com",
    },
    {
      title: "Project 4",
      image: "https://placehold.co/600x400",
      link: "https://www.google.com",
    },
    {
      title: "Project 5",
      image: "https://placehold.co/600x400",
      link: "https://www.google.com",
    },
    {
      title: "Project 6",
      image: "https://placehold.co/600x400",
      link: "https://www.google.com",
    },
    
  ];

  return (
    <div>
      <h1>Portfolio Page</h1>
      <div>
        {projects.map((project, i) => {
          return (
            <article
              key={i}
              className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 className="text-center">
                  <a
                    className="text-white text-2xl font-bold text-center project-title"
                    href={project.link}
                  >
                    <span className="absolute inset-0"></span>
                    {project.title}
                  </a>
                </h3>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
