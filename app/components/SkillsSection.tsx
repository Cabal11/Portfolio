export default function SkillsSection() {
  // const skills = ['JavaScript - Básico/Intermedio', 'TypeScript - Aprendiendo', 'React - Básico/Intermedio', 'Node.js - Básico/Intermedio', 'Next.js Básico', 'MySQL Intermedio', 'Git'];

  const skills = [
    // Frontend
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "HTML / CSS", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },

    // Backend
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "C#", category: "Backend" },
    { name: "REST APIs", category: "Backend" },

    // Database
    { name: "MySQL / SQL", category: "Database" },

    // Tools & Workflow
    { name: "Git / GitHub", category: "Tools & Workflow" },
  ];

  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section className="bg-gray-800 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-gray-300 p-4 sm:p-6 rounded-lg shadow-sm text-center">
                {category}
              </h2>

              <div className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500 text-sm sm:text-base text-gray-200">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <ul key={category}>
                      <li>{skill.name}</li>
                    </ul>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
