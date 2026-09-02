const projects = [
  {
    period: "2021 – 2022",
    role: "Smart Charging Station",
    lab: "Bachelor Thesis",
    institution: "Yunnan University",
    achievements: [
      "Developed a full-stack IoT solution for electric vehicle charging infrastructure, integrating ESP32 microcontrollers with cloud-based data logging and a mobile application, supporting up to 10 simultaneous charging sessions",
      "Implemented real-time energy monitoring and user authentication across 5+ sensor nodes, achieving under 500ms system response time",
    ],
  },
  {
    period: "2019 – Present",
    role: "Embedded IoT Systems",
    lab: "Independent & Freelance Projects",
    achievements: [
      "Designed and deployed 10+ sensor-driven automation projects using Raspberry Pi, Arduino, and ESP32 platforms for clients across Bangladesh and China",
      "Developed prototypes for environmental monitoring, home automation, and low-power wireless communication (MQTT, Wi-Fi, Bluetooth), reducing manual monitoring effort by an estimated 60%",
      "Applied TensorFlow.js for lightweight on-device inference, achieving real-time classification on resource-constrained hardware",
    ],
  },
  {
    period: "2017 – 2018",
    role: "PLC & Industrial Automation",
    lab: "Applied Coursework Projects",
    achievements: [
      "Completed projects involving Programmable Logic Controller (PLC) and Programmable Logic Device (PLD) programming for industrial process control",
      "Gained practical exposure to circuit board design and prototyping",
    ],
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">Research & Technical Projects</h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {projects.map((exp, index) => (
              <div key={index} className="pb-6 border-b border-border md:border-0">
                <span className="news-date block mb-2">{exp.period}</span>
                <div>
                  <h3 className="font-medium text-foreground">{exp.role}</h3>
                  <p className="text-accent text-sm">{exp.lab}</p>
                  {exp.institution && (
                    <p className="text-sm text-muted-foreground">{exp.institution}</p>
                  )}
                  {exp.achievements && (
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      {exp.achievements.map((a, i) => (
                        <li key={i}>• {a}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
