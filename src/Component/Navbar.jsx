function Navbar() {
  return (
    <div>
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
    </div>
  )
}
export default Navbar