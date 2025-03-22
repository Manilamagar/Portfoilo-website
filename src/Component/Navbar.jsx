function Navbar() {
  return (
    <header className="bg-white bg-opacity-10 backdrop-blur-md shadow-md sticky top-0 z-10">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Manila Magar</h1>
      <nav className="flex space-x-6">
        <a href="" className="md:p-4 py-3 px-0 block text-rose-500 hover:text-rose-500">About</a>
        <a href="" className="md:p-4 py-3 px-0 block text-rose-500 hover:text-rose-500">Skills</a>
        <a href="" className="md:p-4 py-3 px-0 block text-rose-500 hover:text-rose-500">Experience</a>
        <a href="" className="md:p-4 py-3 px-0 block text-rose-500 hover:text-rose-500">Contact</a>
      </nav>
    </div>
  </header>
  )
}
export default Navbar