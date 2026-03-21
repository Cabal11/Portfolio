import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
			{/* Proyecto 1 */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-700 relative">
              <Image
                src={`/images/proyecto-uni.png`}
                alt={`Proyecto Uni`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                App web de comercialización de la matricula del colegio Bocas de
                Nosara
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                Aplicación web diseñada para brindar información actualizada
                sobre la institución y sus requisitos de acceso. Desarrollada
                con Next.js en el frontend y Node.js con Express en el backend,
                implementando APIs seguras con JWT y CORS, y utilizando MySQL
                como base de datos.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://github.com/Cabal11/colegio-app.git" target="_blank" rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
                >
                  Ver proyecto frontend →
                </a>
				  <a
                  href="https://github.com/Cabal11/backend-nodejs.git" target="_blank" rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base"
                >
                  Ver proyecto backend →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* {[1, 2, 3, 4].map((project) => (
						<div key={project} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`/images/code.jpg`} alt={`Project ${project}`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">Project Title {project}</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">A brief description of the project and the technologies used in its development.</p>
								<div className="flex gap-2">
									<a href="#" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</div>
					))} */
}
