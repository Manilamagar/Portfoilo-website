import Navbar from "../src/Component/Navbar"

function Home(){
    return (
      <div>
        <Navbar />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Manila Magar | Expert Mobile &amp; Full Stack Developer in Nagercoil &amp; Kochi</title>
  <meta name="description" content="Senior Mobile and Full Stack Developer with 9+ years of experience in React Native, React.js, and modern web technologies. Expert in building scalable, high-performance applications for iOS, Android, and web platforms." />
  <meta name="keywords" content="Best Software Developer in Nagercoil, Best Software Developer in Kochi, Senior Software Developer, Mobile Application Developer, React Native Developer, Full Stack Developer, Healthcare App Developer, E-commerce Developer" />
  {/* Header */}
  
  {/* Hero Section */}
  <section className="  py-12">
    <div className="flex mx-auto max-w-[1440px] justify-between gap-6">
      <div className="w-[649px] h-[632px] ml-5">
        <h1 className="  text-[#224f34] text-[86px] font-bold font-['Rufina']">Portfolio</h1>
        <p className="mt-5 mb-12 text-[#267d49] text-2xl font-medium font-['Poppins'] leading-[50px]">Developed and maintained Frontend , collaborated with cross-functional teams, and contributed to project planning and execution</p>
        <button onclick="window.location.href='https://portfolio-ayyam.vercel.app/';" 
        className="px-16 py-5 text-white text-xl font-medium font-['Poppins'] uppercase bg-gray-700 rounded-[3px] shadow-[6px_33px_59px_0px_rgba(0,0,0,0.30)]">
          Contact Me
        </button></div><img className="w-[570px]" src="11.jpg" alt />
    </div>
  </section>
  {/* About Section */}
  <section id="about" className="py-20">
    <div className="container mx-auto px-6">
      <h3 className="text-3xl font-bold mb-6">About Me</h3>
      <p className="text-lg">With 2+ years of experience, I specialize in building high-performance web applications using React, 
        React.js, HTML, CSS and modern web technologies. I excel at creating scalable, user-friendly solutions for e-commerce, and educational platforms.</p>
    </div>
  </section>
  {/* Skills Section */}
  <section id="skills" className="py-20">
    <div className="container mx-auto px-6">
      <h3 className="text-3xl font-bold mb-6">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center bg-white p-6 rounded shadow-md"><h4 className="font-bold">React</h4></div>
        <div className="text-center bg-white p-6 rounded shadow-md"><h4 className="font-bold">Node.js</h4></div>
        <div className="text-center bg-white p-6 rounded shadow-md"><h4 className="font-bold">JavaScript</h4></div>
        <div className="text-center bg-white p-6 rounded shadow-md"><h4 className="font-bold">HTML &amp; CSS</h4></div>
      </div>
    </div>
  </section>
  {/* Experience Section */}
  <section id="experience" className="py-20">
    <div className="container mx-auto px-6">
      <h3 className="text-3xl font-bold mb-6">Experience</h3>
      <ul className="space-y-6">
        <li>
          <h4 className="font-bold text-lg"> Work on Web projects Developed at School</h4>
          <p>Building scalable web and mobile apps using HTML, CSS, Javascript and advanced state management tools.</p>
        </li>
        <li>
          <h4 className="font-bold text-lg">Lead for Volunteer Teams</h4>
          <p>Leading a volunteer team requires a mix of leadership, communication, and motivational skills.so keeping them engaged and motivated is crucial. </p>
        </li>
        <li>
          <h4 className="font-bold text-lg">Full Take up internships</h4>
          <p>  internship is a temporary work experience or early-career professionals to gain hands-on exposure in a Municipality. 
            It serves as a bridge between academic learning and real-world application.</p>
        </li>
      </ul>
    </div>
  </section>
  {/* Contact Section */}
  <section id="contact" className="py-20">
    <div className="container mx-auto px-6">
      <h3 className="text-3xl font-bold mb-6">Contact</h3>
      <form action="https://portfolio-ayyam.vercel.app/" method="POST" className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full border-gray-300 rounded px-4 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full border-gray-300 rounded px-4 py-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-bold mb-2">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full border-gray-300 rounded px-4 py-2" defaultValue={""} />
        </div>
        <button type="submit" className="bg-blue-500 text-white font-bold px-6 py-2 rounded">Send</button>
      </form>
    </div>
  </section>
  {/* Footer */}
  <footer className="text-white py-6">
    <div className="container mx-auto text-center">
      <p>© 2025 Manila Magar. All rights reserved.</p>
    </div>
  </footer>
</div>

    )
}
export default Home