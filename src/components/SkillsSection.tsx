import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const skillGroups = [
  {
    category: "Hardware & Systems Engineering",
    skills: [
      { name: "Arduino", detail: "Uno-based edge controller handling sensor fusion and relay control in the Smart Charging Station" },
      { name: "ESP32", detail: "Wi-Fi microcontroller used for AES-128 encrypted cloud data transmission across IoT projects" },
      { name: "Raspberry Pi", detail: "Deployed for home automation and environmental monitoring prototypes" },
      { name: "PLC Programming", detail: "Programmable Logic Controller programming for industrial process control" },
      { name: "PLD Programming", detail: "Programmable Logic Device programming for industrial automation coursework" },
      { name: "Circuit Board Design", detail: "PCB layout and prototyping for embedded hardware projects" },
      { name: "MQTT", detail: "Lightweight publish-subscribe protocol for low-power IoT sensor communication" },
      { name: "HTTP", detail: "Used for encrypted ESP32-to-cloud sensor data transmission via POST requests" },
      { name: "Wi-Fi", detail: "Wireless connectivity layer for cloud-connected ESP32 sensor nodes" },
      { name: "Bluetooth", detail: "Low-power wireless communication for home automation prototypes" },
      { name: "Python", detail: "Data processing, automation scripting, and machine learning workflows" },
      { name: "C++", detail: "Embedded firmware development for Arduino and ESP32 platforms" },
      { name: "JavaScript", detail: "Web dashboard logic and cloud data visualization" },
      { name: "TensorFlow.js", detail: "On-device inference for real-time classification on resource-constrained hardware" },
      { name: "Edge ML Deployment", detail: "Deploying lightweight ML models directly onto embedded and edge devices" },
      { name: "Git", detail: "Version control for firmware and application codebases" },
      { name: "MySQL", detail: "Backend database for occupancy, session, and payment records in the Smart Charging Station" },
      { name: "Cisco Fundamentals", detail: "Foundational networking and infrastructure concepts" },
    ],
  },
  {
    category: "Design & Productivity Tools",
    skills: [
      { name: "3D Modelling", detail: "Mechanical and electronic enclosure design for hardware prototypes" },
      { name: "Adobe Photoshop", detail: "Image editing for technical documentation and presentations" },
      { name: "Adobe Illustrator", detail: "Vector graphics for diagrams and technical illustrations" },
      { name: "Microsoft Office Suite", detail: "Documentation, reporting, and presentation tools" },
      { name: "Computer Graphics", detail: "Visual design for technical communication" },
      { name: "Technical Illustration", detail: "Diagramming system architecture and circuit schematics" },
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
                    <Tooltip key={skill.name} delayDuration={150}>
                      <TooltipTrigger asChild>
                        <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded cursor-default">
                          {skill.name}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent
                        side="bottom"
                        sideOffset={8}
                        className="max-w-56 border-border/50 bg-popover/95 text-popover-foreground shadow-sm backdrop-blur-sm text-xs font-normal"
                      >
                        {skill.detail}
                      </TooltipContent>
                    </Tooltip>
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
