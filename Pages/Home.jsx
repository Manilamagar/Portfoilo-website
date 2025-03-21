function Home(){
    return (
       <div className="w-full h-screen bg-black">
  <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
    <div className="flex-1 flex justify-between items-center">
      <img className="sm:w-[10rem] w-[7rem] z-10" src="https://techakim.com/sam/tg/7268/li/imgs/samlogo2.png" alt="Logo" />
    </div>
    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
      <svg className="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />
    <div className="hidden md:flex md:items-center md:w-auto w-full z-10" id="menu">
<nav>
<ul className="md:flex items-center justify-between text-base xl:text-lg text-gray-100 pt-4 md:pt-0">
<li><a className="md:p-4 py-3 px-0 block text-rose-500 hover:text-rose-500" href="#">Home</a></li>
<li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#">About Me</a></li>
<li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#">Education</a></li>
<li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#">Experience</a></li>
<li><a className="md:p-4 py-3 px-0 block hover:text-rose-500" href="#">Projects</a></li>
<li><a className="md:p-4 py-3 px-0 block hover:text-rose-500 md:mb-0 mb-2" href="#">Contact</a></li>
</ul>
</nav>
</div>
</header>
<div className="absolute hidden sm:block md:top-16 sm:top-[8%] top-[10%] xl:top-4 xl:left-[30%] lg:left-[35%] md:right-[20%] sm:left-[18%] left-[10%] overflow-hidden">
<img className="2xl:h-[760px] xl:h-[600px] md:h-[450px] sm:h-[480px]" src="11.jpg" alt="Image" />
</div>
  
<div className="lg:px-16 px-4 pb-4 h-full flex flex-col sm:flex-row sm:items-center mt-10 sm:mt-0 text-white">
    
<div className="w-full flex flex-col z-10">
<h4 className="text-lg font-semibold text-white xl:text-2xl">Hey There</h4>
<h1 className="2xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold font-serif mt-2">I'm
<span className>Manila</span>
</h1>
<h1 className="md:text-6xl sm:text-4xl text-3xl font-semibold font-serif">Magar</h1>
<h4 className="text-rose-500 mt-4 lg:text-2xl xl:3xl">--Frontend Developer</h4>
<p className="lg:w-[70%] w-full text-white text-md mt-4 md:text-lg 2xl:text-2xl">Experienced frontend developer with 2+
        years
        of expertise in HTML, CSS,Javascript experience.</p>
<div>
<button className="mt-6 px-6 py-1 bg-rose-500 text-lg text-white rounded-sm lg:text-2xl">Get In Touch</button>
</div>
</div>
<div className="w-full flex sm:flex-col justify-center mt-4 sm:mt-0 sm:gap-8 gap-2 bg-gray-700/60 sm:bg-transparent p-4 rounded-lg z-10">
<div className="flex flex-col sm:items-end items-center">
<div className="inline-flex gap-1 items-center">
<h2 className="xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold">5</h2>
<h2 className="text-rose-500 xl:text-6xl md:text-7xl sm:text-4xl text-3xl font-extrabold">+</h2>
</div>
<h4 className="text-sm sm:text-lg xl:text-2xl text-center">Years of Expireance</h4>
</div>
<div className="flex flex-col sm:items-end items-center">
<div className="inline-flex gap-1 items-center">
<h2 className="xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold">55</h2>
<h2 className="text-rose-500 xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-extrabold">+</h2>
</div>
<h4 className="text-sm sm:text-lg xl:text-2xl text-center">Component Contribution</h4>
</div>
<div className="flex flex-col sm:items-end items-center">
<div className="inline-flex gap-1 items-center">
<h2 className="xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold">127K</h2>
<h2 className="text-rose-500 xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-extrabold">+</h2>
</div>
<h4 className="text-sm sm:text-lg xl:text-2xl text-center">User's Got Help</h4>
</div>
</div>
</div>
</div>
    )
}
export default Home