const education = [
  {
    period: "2024 – Present",
    degree: "Master of Science — Information Science",
    institution: "Trine University",
    location: "Michigan, USA",
    details: "GPA: 3.66 / 4.0. Focus: Cloud computing architectures, distributed systems, and cloud-IoT integration.",
  },
  {
    period: "Sept 2018 – Jun 2022",
    degree: "Bachelor of Engineering — Electronic Information Engineering",
    institution: "Yunnan University",
    location: "Kunming, China",
    details: "GPA: 3.27 / 4.0. Thesis: Smart Charging Station — IoT-enabled EV charging management system.",
  },
  {
    period: "2014 – 2018",
    degree: "Diploma in Engineering — Electrical Engineering",
    institution: "Rajshahi Polytechnic Institute",
    location: "Rajshahi, Bangladesh",
    details: "GPA: 3.31 / 4.0 (Distinction). Power systems, PLC programming, circuit board design.",
  },
];

const experience = [
  {
    period: "2019 – 2021",
    role: "Electronic Engineer",
    organization: "Various engineering firms, Bangladesh & China",
    highlights: [
      "Worked across two countries in technical and client-facing roles, developing expertise in engineering solutions delivery and cross-cultural communication",
      "Managed technical sales cycles and communicated complex product specifications to clients",
      "Supported post-sales technical implementation",
    ],
  },
  {
    period: "2020 – 2021",
    role: "Chinese–English Technical Translator",
    organization: "Xiaomi Mobile Company, Bangladesh",
    highlights: [
      "Provided Chinese–English translation in professional and technical settings",
      "Facilitated communication between Bangladeshi and Chinese counterparts",
    ],
  },
  {
    period: "2019 – 2021",
    role: "Teacher — English Language & Math",
    organization: "Private Instruction, Bangladesh",
    highlights: [
      "Delivered language and technical instruction to colleagues and students",
      "Supported development of English language proficiency and core Math",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="education" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Education */}
          <h2 className="section-heading">Education</h2>

          <div className="grid grid-cols-3 gap-6 mb-16">
            {education.map((edu, index) => (
              <div key={index} className="pb-4">
                <span className="news-date block mb-2 text-sm">{edu.period}</span>
                <div>
                  <h3 className="font-medium text-foreground text-sm">{edu.degree}</h3>
                  <p className="text-accent text-xs mt-1">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground">
                    {edu.location}
                  </p>
                  {edu.details && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <h2 className="section-heading">Professional Experience</h2>

          <div className="grid grid-cols-3 gap-6">
            {experience.map((exp, index) => (
              <div key={index} className="pb-4">
                <span className="news-date block mb-2 text-sm">{exp.period}</span>
                <div>
                  <h3 className="font-medium text-foreground text-sm">{exp.role}</h3>
                  <p className="text-accent text-xs mt-1">{exp.organization}</p>
                  <ul className="text-xs text-muted-foreground mt-2 space-y-0.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>• {h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
