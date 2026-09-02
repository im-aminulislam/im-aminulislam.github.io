const skillGroups = [
  {
    category: "Hardware & Systems Engineering",
    skills: [
      "Arduino",
      "ESP32",
      "Raspberry Pi",
      "PLC Programming",
      "PLD Programming",
      "Circuit Board Design",
      "MQTT",
      "HTTP",
      "Wi-Fi",
      "Bluetooth",
      "Python",
      "C++",
      "JavaScript",
      "TensorFlow.js",
      "Edge ML Deployment",
      "Git",
      "MySQL",
      "Cisco Fundamentals",
    ],
  },
  {
    category: "Design & Productivity Tools",
    skills: [
      "3D Modelling",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Microsoft Office Suite",
      "Computer Graphics",
      "Technical Illustration",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading">Technical Skills</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group, index) => (
              <div
                key={index}
                className="bg-background p-5 border border-border hover:border-accent/50 transition-colors"
              >
                <h3 className="font-medium text-foreground mb-3 text-sm">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
