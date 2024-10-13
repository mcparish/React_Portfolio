export default function Portfolio() {
  const projects = [
    {
      title: "Social Network API",
      image: "src/assets/images/SocialNetworkAPI.png",
      link: "https://drive.google.com/file/d/1U9S8dUx8Mb0mHZhe3G_rN1ZqCMdzCzST/view",
    },
    {
      title: "SVG Logo Maker",
      image: "src/assets/images/SVGscreenshot.png",
      link: "https://drive.google.com/file/d/1T1jUAK1fYqv1SOdLQaxIVKcK8xzE4BtS/view",
    },
    {
      title: "MERN Book Search Engine",
      image: "src/assets/images/MERN.png",
      link: "https://mern-book-search-engine-vpjt.onrender.com/",
    },
    {
      title: "Note Taker",
      image: "src/assets/images/NoteTaker.png",
      link: "https://note-taker-3-p60x.onrender.com",
    },
    {
      title: "ORM E-Commerce Back End",
      image: "src/assets/images/ORM.png",
      link: "https://drive.google.com/file/d/1iSNbOWsYB4zLRqSJwjACCEzyBZhScXMX/view",
    },
    {
      title: "PWA Text Editor",
      image: "src/assets/images/PWA.png",
      link: "https://pwa-text-editor-cgjr.onrender.com/",
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="grid-container">
        {projects.map((project, i) => {
          return (
            
            <article
              key={i}
              className="relative w-80 h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
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
