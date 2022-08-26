import React from "react";
import {NavLink} from "react-router-dom"

function Home(){
    return(
        <React.Fragment>
            <div className="sticky top-0 bg-purple-300 z-50">
                <div className="container mx-auto px-8 h-10 flex justify-between items-center ">
                    <img className="w-6" src="public\purple ape.png" />
                    <NavLink to="/projects" className="font-bold">Projects</NavLink>
                </div>
            </div>
            <div className="mt-10 container mx-auto flex flex-col justify-center items-center ">
                <img className="w-60 rounded-full " src="public\pic.jpg"/>
                <p className="mt-3 text-4xl font-bold ">Hey, I'm Rohith</p>
                <p className="mt-3 text-xl ">Am a Web Developer and a Illustrator</p>
                <div className="mt-5 flex justify-center gap-8">
                    <a href="http://github.com/Rohithbb19" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">GitHub</a>
                    <a href="https://www.linkedin.com/in/rohithbb19/" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-blue-300 duration-150 hover:scale-110">LinkedIn</a>
                    <a href="mailto:rohithbb19@gmail.com" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-zinc-300 duration-150 hover:scale-110">Email</a>
                </div>
            </div>
            <div className="mt-10 flex flex-col items-center">
                <p className="text-xl font-bold">Projects</p>
                <div className="flex flex-col tablet:gap-6 tablet:flex-row">
                <div className="p-2 shadow-2xl rounded mt-5 w-80 flex flex-col justify-center duration-150 hover:bg-purple-500 hover:text-white">
                    <img src="public\Cal.PNG"/>
                    <p className="font-medium text-center mt-1">Calculator</p>
                    <p className="mt-2 text-center">it's a calculator web application build using HTML, CSS and Javascript</p>
                    <div className="flex justify-around mt-4 mb-2">
          <a href="https://github.com/Rohithbb19/calculator" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Code</a>
          <a href="https://rohithbb19.github.io/calculator/" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Demo</a>
          </div>
                </div>
                <div className="p-2 shadow-2xl rounded mt-5 w-80 flex flex-col justify-center duration-150 hover:bg-purple-500 hover:text-white">
                    <img src="public\anime.PNG"/>
                    <p className="font-medium text-center mt-1">Anime Library</p>
                    <p className="mt-2 text-center">it's a Anime Search web application build using jikan API</p>
                    <div className="flex justify-around mt-4 mb-2">
          <a href="https://github.com/Rohithbb19/anime-library" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Code</a>
          <a href="https://rohithbb19.github.io/anime-library/" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Demo</a>
          </div>
                </div>
                <div className="p-2 shadow-2xl rounded mt-5 w-80 flex flex-col justify-center duration-150 hover:bg-purple-500 hover:text-white">
                    <img src="public\landing.PNG"/>
                    <p className="font-medium text-center mt-1">Cluster</p>
                    <p className="mt-2 text-center">it's a Landing page build using HTML, CSS and Javascript</p>
                    <div className="flex justify-around mt-4 mb-2">
          <a href="https://github.com/Rohithbb19/landing-page" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Code</a>
          <a href="https://rohithbb19.github.io/landing-page/" target="_blank" rel="noopener noreferrer" className="p-1 px-4 rounded bg-purple-300 duration-150 hover:scale-110">Demo</a>
          </div>
                </div>
                </div>
                <NavLink to="/projects" className="shadow-2xl rounded mt-10 flex flex-col justify-center items-center duration-150 hover:bg-purple-500 hover:text-white">
                    <div className="border-2 p-1 rounded-md border-purple-300">View More</div>
                </NavLink>
            </div>
            <div className="mt-10 flex flex-col items-center">
                <p className="text-xl font-bold">Illustrations</p>
                <div className="flex flex-col tablet:gap-6 tablet:flex-row">
                <img className="shadow-2xl rounded mt-5 w-80 flex flex-col justify-center duration-150 hover:scale-110" src="public\illustrations\vector1.jpg"/>
                <img className="shadow-2xl rounded mt-5 w-80 flex flex-col justify-center duration-150 hover:scale-110" src="public\illustrations\ava.jpg"/>
                <img className="shadow-2xl rounded mt-5 w-80 flex flex-col justify-center duration-150 hover:scale-110" src="public\illustrations\tobi.jpg"/>
                </div>    
            </div>
            <div className="mt-10 flex flex-col items-center">
                <p className="text-xl font-bold">Achievements</p>
                <div className="flex flex-col tablet:gap-6 tablet:flex-row">
                <div className="w-72 p-5 shadow-2xl rounded mt-8 border-2 border-purple-300">
                    <p className="text-lg font-bold">Uzhavar Sandhai Application</p>
                    <p>Won "Best Paper" Award in ICECC 2019</p>
                    <p>Tagore Engineering College</p>
                </div>
                <div className="w-72 p-5 shadow-2xl rounded mt-8 border-2 border-purple-300">
                    <p className="text-lg font-bold">Google Startup Weekend</p>
                    <p>Won "People Choice" Award 2018</p>
                    <p>CEG, Anna University</p>
                </div>
                <div className="w-72 p-5 shadow-2xl rounded mt-8 border-2 border-purple-300">
                    <p className="text-lg font-bold">Silicon Valley - Winners</p>
                    <p>Samhita 2018</p>
                    <p>Madras Institute Of Technology</p>
                </div>
                </div>
            </div>
            <footer className="p-4 mt-10 flex flex-col items-center bg-purple-300 ">
            <p className="text-xl font-bold text-white">Contact</p>
            <div className="mt-5 flex gap-6 items-center">
                <a href="http://github.com/Rohithbb19" target="_blank" rel="noopener noreferrer"><img className="h-10" src="public\icons\icons8-github.svg"/></a>
                <a href="https://www.linkedin.com/in/rohithbb19/" target="_blank" rel="noopener noreferrer"><img className="h-10" src="public\icons\icons8-linkedin-circled.svg"/></a>
                <a href="https://www.instagram.com/rohith_bb19/" target="_blank" rel="noopener noreferrer"><img className="h-10" src="public\icons\icons8-instagram.svg"/></a>
                <a href="mailto:rohithbb19@gmail.com" target="_blank" rel="noopener noreferrer"><img className="h-10" src="public\icons\icons8-mail-90.png"/></a>
                <a href="public\resume\Resume.pdf" target="_blank" rel="noopener noreferrer"><img className="h-7" src="public\icons\icons8-resume-100.png"/></a>
            </div>
            </footer>
        </React.Fragment>
    )
}

export default Home;