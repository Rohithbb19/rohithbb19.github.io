function Projects() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <p className="text-xl font-bold">Projects</p>
      <div className="flex flex-col tablet:gap-6 tablet:flex-row">
        <div className="p-2 shadow-2xl rounded mt-5 w-80 flex flex-col justify-center duration-150 hover:bg-purple-500 hover:text-white">
          <img src="public\ACME.PNG" />
          <p className="font-medium text-center mt-1">ACME Dashbord</p>
          <p className="mt-2 text-center">
          it's a Dashbord web application build using React.js and required Libraries
          </p>
          <div className="flex justify-around mt-4 mb-2">
          <a href="https://github.com/Rohithbb19/mitsogo-round1" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Code</a>
          <a href="https://mitsogo-round1.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Demo</a>
          </div>
        </div>
        <div className="p-2 shadow-2xl rounded mt-5 w-80 flex flex-col justify-center duration-150 hover:bg-purple-500 hover:text-white">
          <img src="public\anime.PNG" />
          <p className="font-medium text-center mt-1">Anime Library</p>
          <p className="mt-2 text-center">
            it's a Anime Search web application build using jikan API
          </p>
          <div className="flex justify-around mt-4 mb-2">
          <a href="https://github.com/Rohithbb19/anime-library" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Code</a>
          <a href="https://rohithbb19.github.io/anime-library/" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Demo</a>
          </div>
        </div>
        <div className="p-2 shadow-2xl rounded mt-5 w-80 flex flex-col justify-center duration-150 hover:bg-purple-500 hover:text-white">
          <img src="public\landing.PNG" />
          <p className="font-medium text-center mt-1">Cluster</p>
          <p className="mt-2 text-center">
            it's a Landing page build using HTML, CSS and Javascript
          </p>
          <div className="flex justify-around mt-4 mb-2">
          <a href="https://github.com/Rohithbb19/landing-page" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Code</a>
          <a href="https://rohithbb19.github.io/landing-page/" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Demo</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col tablet:gap-6 tablet:flex-row"> 
      <div className="p-2 shadow-2xl rounded mt-5 w-80 flex flex-col justify-center duration-150 hover:bg-purple-500 hover:text-white">
          <img src="public\Cal.PNG" />
          <p className="font-medium text-center mt-1">Calculator</p>
          <p className="mt-2 text-center">
            it's a calculator web application build using HTML, CSS and
            Javascript
          </p>
          <div className="flex justify-around mt-4 mb-2">
          <a href="https://github.com/Rohithbb19/calculator" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Code</a>
          <a href="https://rohithbb19.github.io/calculator/" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Demo</a>
          </div>
        </div>
      <div className="flex flex-col tablet:gap-6 tablet:flex-row">
                <div className="p-2 shadow-2xl rounded mt-5 w-80 flex flex-col justify-center duration-150 hover:bg-purple-500 hover:text-white">
                    <img src="public\sign in.PNG"/>
                    <p className="font-medium text-center mt-1">Sign in page</p>
                    <p className="mt-2 text-center">it's a Sign in page for cluster build using HTML, CSS and Javascript</p>
                    <div className="flex justify-around mt-4 mb-2">
          <a href="https://github.com/Rohithbb19/signup" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Code</a>
          <a href="https://rohithbb19.github.io/signup/" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Demo</a>
          </div>
                </div>
        </div>
        </div>
    </div>
  );
}

export default Projects;
