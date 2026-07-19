const Portfolio = () => {
	return (
		<>
			<div className="relative min-h-screen text-gray-700 pb-20 overflow-hidden">
				{/* --- GLOBAL FIXED BACKGROUND ELEMENTS --- */}
				<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
					{/* 3D Browser Window (Top Right) */}
					<div className="absolute top-20 right-[-5%] md:right-10 w-72 h-48 rounded-2xl shadow-clay bg-clay-bg border border-white/40 animate-float opacity-70 flex flex-col">
						<div className="h-6 w-full border-b border-gray-300 flex items-center px-3 gap-1.5 shadow-clay-inset rounded-t-2xl">
							<div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
							<div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
							<div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
						</div>
						<div className="flex-1 p-4 flex flex-col gap-2">
							<div className="w-3/4 h-3 rounded-full shadow-clay-inset bg-gray-200"></div>
							<div className="w-1/2 h-3 rounded-full shadow-clay-inset bg-gray-200"></div>
						</div>
					</div>

					{/* 3D Monitor (Bottom Left) */}
					<div className="absolute bottom-32 left-[-10%] md:left-20 w-56 h-40 rounded-xl shadow-clay bg-clay-bg border border-white/40 animate-float-delayed opacity-60 flex items-center justify-center">
						<div className="w-48 h-32 rounded-lg shadow-clay-inset bg-gray-200 border border-gray-300"></div>
						<div className="absolute -bottom-6 w-8 h-6 bg-clay-bg shadow-clay-inset"></div>
						<div className="absolute -bottom-8 w-24 h-2 rounded-full bg-clay-bg shadow-clay"></div>
					</div>

					{/* 3D Mouse (Middle Right) */}
					<div className="absolute top-1/2 right-[10%] w-16 h-24 rounded-[2rem] shadow-clay bg-clay-bg border border-white/40 animate-float-slow opacity-80 flex justify-center pt-4">
						<div className="w-1.5 h-4 rounded-full shadow-clay-inset bg-gray-300"></div>
					</div>
				</div>
				{/* --- END GLOBAL BACKGROUND --- */}

				{/* Floating Pill Navigation */}
				<nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/40 backdrop-blur-md shadow-clay rounded-full px-6 py-3 flex items-center gap-4 md:gap-8 z-50">
					<a
						href="/home/dashboard"
						className="font-extrabold text-sm tracking-widest text-blue-600 hidden md:block hover:cursor-pointer">
						KS
					</a>
					<a
						href="#about"
						className="text-xs md:text-sm font-semibold hover:text-blue-600 transition-colors">
						About
					</a>
					<a
						href="#experience"
						className="text-xs md:text-sm font-semibold hover:text-blue-600 transition-colors">
						Experience
					</a>
					<a
						href="#projects"
						className="text-xs md:text-sm font-semibold hover:text-blue-600 transition-colors">
						Projects
					</a>
					<a
						href="#skills"
						className="text-xs md:text-sm font-semibold hover:text-blue-600 transition-colors">
						Skills
					</a>
					<a
						href="#contact"
						className="text-xs md:text-sm font-semibold hover:text-blue-600 transition-colors">
						Contact
					</a>
				</nav>

				{/* Main Content Container */}
				<main className="relative max-w-4xl mx-auto px-6 pt-32 flex flex-col gap-12 z-10">
					{/* Hero / About Section */}
					<section
						id="about"
						className="p-8 md:p-12 rounded-3xl shadow-clay flex flex-col md:flex-row gap-8 items-center text-center md:text-left bg-clay-bg">
						<div className="w-40 h-40 rounded-full shadow-clay border-4 border-[#e0e5ec] flex-shrink-0 overflow-hidden bg-gray-200">
							<img
								src="/your-image-placeholder.png"
								alt="Khushi Savla"
								className="w-full h-full object-cover"
							/>
						</div>

						<div className="flex-1">
							<h1 className="text-4xl font-extrabold mb-2 text-gray-800">
								Khushi Savla
							</h1>
							<h2 className="text-xl font-bold text-blue-600 mb-4">
								Java Full-Stack Developer
							</h2>
							<p className="text-gray-600 leading-relaxed mb-6">
								Passionate Java Full-Stack Developer with experience building
								scalable web applications using Java, Spring Boot, React, and
								MySQL. I enjoy solving real-world problems through clean,
								maintainable code and continuously expanding my knowledge of
								modern backend technologies and cloud-based development.
							</p>

							<div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
								<span className="px-4 py-2 rounded-xl shadow-clay-inset text-xs font-medium flex items-center gap-2">
									📍 Mumbai, Maharashtra
								</span>
								<span className="px-4 py-2 rounded-xl shadow-clay-inset text-xs font-medium flex items-center gap-2">
									📧 khushinsavla@gmail.com
								</span>
								{/* <span className="px-4 py-2 rounded-xl shadow-clay-inset text-xs font-medium flex items-center gap-2">📞 +91 70695 09440</span> */}
							</div>

							<div className="flex justify-center md:justify-start gap-4">
								<a
									href="#contact"
									className="px-6 py-2.5 rounded-xl shadow-clay bg-blue-600 text-white font-bold text-sm hover:text-blue-100 transition-all transform active:scale-95">
									Let's Connect
								</a>
								<a
									href="https://github.com"
									target="_blank"
									rel="noreferrer"
									className="px-6 py-2.5 rounded-xl shadow-clay bg-gray-800 text-white font-bold text-sm hover:text-gray-300 transition-all transform active:scale-95">
									GitHub
								</a>
							</div>
						</div>
					</section>

					{/* Experience Section */}
					<section
						id="experience"
						className="p-8 md:p-12 rounded-3xl shadow-clay bg-clay-bg">
						<h3 className="text-2xl font-bold mb-8 text-gray-800 border-b-2 border-gray-300 pb-2">
							Experience
						</h3>

						<div className="flex flex-col gap-8">
							<div className="p-6 md:p-8 rounded-2xl shadow-clay-inset">
								<div className="flex justify-between items-start flex-col md:flex-row mb-4">
									<div>
										<h4 className="text-lg font-bold text-blue-600">
											Java Developer
										</h4>
										<p className="text-md font-bold text-gray-800">TAXOSMART</p>
									</div>
									<span className="text-sm font-semibold text-gray-500 mt-1 md:mt-0">
										July 2025 – March 2026
									</span>
								</div>
								<ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
									<li>
										Developed and maintained RESTful APIs using Spring Boot and
										Java.
									</li>
									<li>
										Implemented secure authentication and authorization using
										Spring Security.
									</li>
									<li>
										Designed and optimized MySQL database queries to improve
										application performance.
									</li>
									<li>
										Collaborated with cross-functional teams to develop scalable
										business solutions.
									</li>
									<li>
										Participated in code reviews, bug fixing, and feature
										enhancements in an Agile environment.
									</li>
								</ul>
							</div>

							<div className="p-6 md:p-8 rounded-2xl shadow-clay-inset">
								<div className="flex justify-between items-start flex-col md:flex-row mb-4">
									<div>
										<h4 className="text-lg font-bold text-blue-600">
											Trainee Survey Programmer
										</h4>
										<p className="text-md font-bold text-gray-800">
											Global Tenet Events and Research
										</p>
									</div>
									<span className="text-sm font-semibold text-gray-500 mt-1 md:mt-0">
										October 2022 – July 2023
									</span>
								</div>
								<ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
									<li>
										Managed survey programming and data validation for research
										projects.
									</li>
									<li>
										Automated repetitive data processing tasks to improve
										operational efficiency.
									</li>
									<li>
										Worked closely with analysts to ensure data accuracy and
										timely project delivery.
									</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Projects Section */}
					<section
						id="projects"
						className="p-8 md:p-12 rounded-3xl shadow-clay bg-clay-bg">
						<h3 className="text-2xl font-bold mb-8 text-gray-800 border-b-2 border-gray-300 pb-2">
							Featured Projects
						</h3>

						<div className="flex flex-col gap-8">
							{/* Project 1 */}
							<div className="p-6 md:p-8 rounded-2xl shadow-clay flex flex-col gap-6">
								<div>
									<h4 className="text-xl font-bold text-gray-800 mb-2">
										E-Commerce Backend API
									</h4>
									<p className="text-sm text-gray-600">
										Built a secure and scalable RESTful e-commerce backend using
										Spring Boot.
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
											Features
										</h5>
										<ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
											<li>JWT Authentication</li>
											<li>Product Management</li>
											<li>Shopping Cart & Order Processing</li>
											<li>Role-based Authorization</li>
										</ul>
									</div>
									<div>
										<h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
											Tech Stack
										</h5>
										<div className="flex flex-wrap gap-2">
											{[
												"Spring Boot",
												"Spring Security",
												"Hibernate",
												"MySQL",
												"JWT",
											].map((tech) => (
												<span
													key={tech}
													className="px-2.5 py-1 shadow-clay-inset bg-clay-bg rounded-md text-xs font-semibold">
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>

								<div className="flex gap-4 pt-4 border-t border-gray-300/50">
									<a
										href="#"
										className="px-4 py-2 rounded-xl shadow-clay text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
										GitHub
									</a>
									<a
										href="#"
										className="px-4 py-2 rounded-xl shadow-clay text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
										Live Demo
									</a>
								</div>
							</div>

							{/* Project 2 */}
							<div className="p-6 md:p-8 rounded-2xl shadow-clay flex flex-col gap-6">
								<div>
									<h4 className="text-xl font-bold text-gray-800 mb-2">
										Employee Management System
									</h4>
									<p className="text-sm text-gray-600">
										Developed a full-stack employee management application for
										handling employee records efficiently.
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
											Features
										</h5>
										<ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
											<li>CRUD Operations</li>
											<li>Responsive Dashboard</li>
											<li>REST APIs</li>
											<li>Form Validation</li>
										</ul>
									</div>
									<div>
										<h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
											Tech Stack
										</h5>
										<div className="flex flex-wrap gap-2">
											{["React", "Spring Boot", "MySQL", "Tailwind CSS"].map(
												(tech) => (
													<span
														key={tech}
														className="px-2.5 py-1 shadow-clay-inset bg-clay-bg rounded-md text-xs font-semibold">
														{tech}
													</span>
												),
											)}
										</div>
									</div>
								</div>

								<div className="flex gap-4 pt-4 border-t border-gray-300/50">
									<a
										href="#"
										className="px-4 py-2 rounded-xl shadow-clay text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
										GitHub
									</a>
									<a
										href="#"
										className="px-4 py-2 rounded-xl shadow-clay text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
										Live Demo
									</a>
								</div>
							</div>

							{/* Project 3 */}
							<div className="p-6 md:p-8 rounded-2xl shadow-clay flex flex-col gap-6">
								<div>
									<h4 className="text-xl font-bold text-gray-800 mb-2">
										Portfolio Website
									</h4>
									<p className="text-sm text-gray-600">
										Designed and developed a responsive personal portfolio
										showcasing projects, skills, and professional experience.
									</p>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
											Features
										</h5>
										<ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
											<li>Responsive Design & Smooth Navigation</li>
											<li>Resume Download</li>
											<li>Modern Neumorphic UI</li>
										</ul>
									</div>
									<div>
										<h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
											Tech Stack
										</h5>
										<div className="flex flex-wrap gap-2">
											{["React", "Tailwind CSS", "Vite"].map((tech) => (
												<span
													key={tech}
													className="px-2.5 py-1 shadow-clay-inset bg-clay-bg rounded-md text-xs font-semibold">
													{tech}
												</span>
											))}
										</div>
									</div>
								</div>

								<div className="flex gap-4 pt-4 border-t border-gray-300/50">
									<a
										href="#"
										className="px-4 py-2 rounded-xl shadow-clay text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
										GitHub
									</a>
									<a
										href="#"
										className="px-4 py-2 rounded-xl shadow-clay text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
										Live Demo
									</a>
								</div>
							</div>
						</div>
					</section>

					{/* Skills & Currently Learning */}
					<section
						id="skills"
						className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="p-8 md:p-12 rounded-3xl shadow-clay bg-clay-bg h-full flex flex-col">
							<h3 className="text-2xl font-bold mb-8 text-gray-800 border-b-2 border-gray-300 pb-2">
								Technical Skills
							</h3>

							<div className="flex flex-col gap-6 flex-1">
								{[
									{
										title: "Languages",
										skills: ["Java", "JavaScript", "SQL", "HTML", "CSS"],
									},
									{
										title: "Frontend",
										skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
									},
									{
										title: "Backend",
										skills: [
											"Spring Boot",
											"Spring Framework",
											"Spring Security",
											"Hibernate",
											"REST APIs",
										],
									},
									{ title: "Database", skills: ["MySQL", "MongoDB (Basic)"] },
									{
										title: "Tools",
										skills: [
											"Git",
											"GitHub",
											"Postman",
											"VS Code",
											"IntelliJ IDEA",
											"Maven",
										],
									},
								].map((category, idx) => (
									<div key={idx}>
										<h4 className="text-sm font-bold text-blue-600 mb-3">
											{category.title}
										</h4>
										<div className="flex flex-wrap gap-3">
											{category.skills.map((skill) => (
												<span
													key={skill}
													className="px-4 py-2 rounded-xl shadow-clay-inset bg-clay-bg text-xs font-bold text-gray-700">
													{skill}
												</span>
											))}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Right Column: Currently Learning + Certs */}
						<div className="flex flex-col gap-8">
							<div className="p-8 md:p-12 rounded-3xl shadow-clay bg-clay-bg">
								<h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">
									Currently Learning
								</h3>
								<div className="flex flex-wrap gap-3">
									{[
										"Docker",
										"AWS",
										"Redis",
										"Microservices",
										"System Design",
									].map((item) => (
										<span
											key={item}
											className="px-4 py-2 rounded-xl shadow-clay bg-clay-bg text-xs font-bold text-blue-600 border border-blue-200/50">
											{item}
										</span>
									))}
								</div>
							</div>

							<div className="p-8 md:p-12 rounded-3xl shadow-clay bg-clay-bg flex-1">
								<h3 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-gray-300 pb-2">
									Certifications
								</h3>
								<div className="flex flex-col gap-4">
									{[
										"IBM – Java Fundamentals",
										"IBM – SQL and Relational Databases",
										"IBM – Web Development with HTML",
										"Infosys Springboard – Java Programming",
									].map((cert, index) => (
										<div
											key={index}
											className="p-4 rounded-xl shadow-clay-inset bg-clay-bg border border-white/20 flex items-center">
											<p className="text-sm font-bold text-gray-700">{cert}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</section>

					{/* Education Section */}
					<section
						id="education"
						className="p-8 md:p-12 rounded-3xl shadow-clay bg-clay-bg">
						<h3 className="text-2xl font-bold mb-8 text-gray-800 border-b-2 border-gray-300 pb-2">
							Education
						</h3>

						<div className="flex flex-col gap-6">
							<div className="p-6 rounded-2xl shadow-clay-inset">
								<div className="flex justify-between flex-col md:flex-row mb-1">
									<h4 className="text-lg font-bold text-blue-600">
										Bachelor of Science (Information Technology)
									</h4>
									<span className="text-sm font-semibold text-gray-500">
										2021 – 2024
									</span>
								</div>
								<p className="text-md font-bold text-gray-800">
									Malini Kishore Sanghvi College
								</p>
								<p className="text-sm text-gray-600">Mumbai University</p>
							</div>

							<div className="p-6 rounded-2xl shadow-clay-inset">
								<div className="flex justify-between flex-col md:flex-row mb-1">
									<h4 className="text-lg font-bold text-blue-600">
										Higher Secondary (Commerce)
									</h4>
									<span className="text-sm font-semibold text-gray-500">
										2020 – 2021
									</span>
								</div>
								<p className="text-md font-bold text-gray-800">
									Malini Kishore Sanghvi College
								</p>
							</div>

							<div className="p-6 rounded-2xl shadow-clay-inset">
								<div className="flex justify-between flex-col md:flex-row mb-1">
									<h4 className="text-lg font-bold text-blue-600">
										Secondary School (SSC)
									</h4>
									<span className="text-sm font-semibold text-gray-500">
										2019
									</span>
								</div>
								<p className="text-md font-bold text-gray-800">
									Bombay Cambridge School
								</p>
							</div>
						</div>
					</section>

					{/* Contact Section */}
					<section
						id="contact"
						className="p-8 md:p-12 rounded-3xl shadow-clay bg-blue-600 text-white text-center">
						<h3 className="text-3xl font-extrabold mb-4">Let's Connect</h3>
						<p className="text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
							I'm always interested in discussing new opportunities,
							collaborating on exciting projects, or simply connecting with
							fellow developers.
						</p>

						<div className="flex flex-wrap justify-center gap-4">
							<a
								href="mailto:khushinsavla@gmail.com"
								className="px-6 py-3 rounded-xl shadow-clay bg-white text-blue-600 font-bold text-sm hover:bg-gray-50 transition-colors">
								Email
							</a>
							<a
								href="https://linkedin.com/in/khushinsavla"
								target="_blank"
								rel="noreferrer"
								className="px-6 py-3 rounded-xl shadow-clay bg-white text-blue-600 font-bold text-sm hover:bg-gray-50 transition-colors">
								LinkedIn
							</a>
							<a
								href="https://github.com"
								target="_blank"
								rel="noreferrer"
								className="px-6 py-3 rounded-xl shadow-clay bg-white text-blue-600 font-bold text-sm hover:bg-gray-50 transition-colors">
								GitHub
							</a>
							<a
								href="/Khushi_Savla_Resume.pdf"
								download
								className="px-6 py-3 rounded-xl shadow-clay-inset bg-blue-700 text-white font-bold text-sm hover:bg-blue-800 transition-colors">
								Download Resume
							</a>
						</div>
					</section>
				</main>
			</div>
		</>
	);
};

export default Portfolio;
