export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <img src="../img/imgProfilApple.jpeg" width={150} height={150}></img>
        <h1 className="text-6xl font-extrabold mb-4">Nael Haddadi</h1>
        <p className="text-xl max-w-xl mb-8">Etudiant développeur passionné par la cybersécurité. 😄</p>
        <a href="https://github.com/Xonodeh"><img className="logosHeader" src="../img/github-142-svgrepo-com.svg" width={40} height={40}></img></a>
        <a href="https://www.linkedin.com/in/nael-haddadi/"><img className="logosHeader" src="../img/linkedin-svgrepo-com.svg" width={40} height={40}></img></a>
        <a href="#projects" className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">Voir mes projets</a>

      </section>
    )
  }
  