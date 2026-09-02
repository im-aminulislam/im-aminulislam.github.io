const thesisStats = [
  { value: "34.2%", label: "Port utilization vs. FCFS baseline" },
  { value: "28.9%", label: "Reduction in mean user wait time" },
  { value: "18.4%", label: "Reduction in energy consumption" },
  { value: "100%", label: "Payment fraud attempts blocked (150 tests)" },
  { value: "21.9%", label: "Solar yield vs. fixed optimal-tilt panel" },
  { value: "164%", label: "Battery service-life extension at 80% SOC" },
];

const thesisArchitecture = [
  { layer: "Perception", detail: "HC-SR04 ultrasonic occupancy sensors, LDR solar-tracking sensors, voltage monitoring, relay-driven charge cutoff, servo-positioned PV panel, OLED status display" },
  { layer: "Network", detail: "Arduino Uno edge controller + ESP32 module transmitting AES-128 encrypted sensor data over Wi-Fi/HTTP" },
  { layer: "Data", detail: "MySQL backend with PHP ingestion and retrieval scripts for occupancy, session, and payment-token records" },
  { layer: "Application", detail: "Real-time web dashboard with live occupancy grid, push notifications, and a cryptographic session-based payment interface" },
];

const thesisContributions = [
  "Designed, built, and physically deployed a complete IoT charging station at an estimated 25 RMB (~USD 3.50) hardware cost per port, integrating ultrasonic occupancy sensing, encrypted ESP32 cloud connectivity, LDR-driven solar tracking, and automatic relay-based charge cutoff",
  "Developed and benchmarked a Reinforcement Learning-based Dynamic Scheduling Algorithm (RL-DSA) — a Deep Q-Network over a 132-feature state space combined with ARIMA demand forecasting — against First-Come-First-Served and Greedy Time-Slot baselines",
  "Built a cryptographic HMAC-SHA256 session-token payment system with server-side replay detection to close the static-QR-code fraud vulnerability of the existing station",
  "Ran a 30-day field study quantifying solar-tracking yield versus fixed-tilt mounting, and a 500-cycle accelerated battery study quantifying the cycle-life impact of an 80% state-of-charge cutoff",
  "Identified six PhD-level extensions arising from the work: federated learning across stations, computer-vision occupancy sensing, multi-objective reinforcement learning, vehicle-to-grid integration, blockchain billing, and predictive maintenance",
];

const thesisTech = [
  "ESP32", "Arduino Uno", "HC-SR04 Ultrasonic Sensors", "LDR Solar Tracking",
  "Relay-Based Charge Cutoff", "HMAC-SHA256", "Deep Q-Network (DQN)", "ARIMA Forecasting",
  "MySQL", "PHP", "AES-128", "MQTT/HTTP",
];

const otherProjects = [
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

          {/* Featured thesis project */}
          <div className="bg-background border border-border p-6 md:p-8 mb-12">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <span className="news-date block mb-1">2021 – 2022 · Bachelor Thesis · Yunnan University</span>
                <h3 className="text-xl font-medium text-foreground">
                  Smart IoT-Enabled Electric Bike Charging Station
                </h3>
                <p className="text-accent text-sm mt-1">
                  AI-Based Scheduling, Real-Time Cloud Monitoring, Security, and Energy Efficiency
                </p>
              </div>
              <a
                href="/Smart_IoT_Charging_Station_Revised_Manuscript.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 border border-accent/40 text-accent rounded-sm hover:bg-accent/10 transition-colors whitespace-nowrap"
              >
                Read Full Paper (PDF)
              </a>
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed mb-6">
              For my B.Eng. thesis, I designed, built, and experimentally evaluated the Smart
              IoT-Enabled Charging Station (SIECS) — a complete hardware-and-software system
              addressing five infrastructure failures common to campus e-bike charging: no
              real-time occupancy visibility, uncontrolled overcharging, insecure reusable static
              payment codes, reliance on grid-only electricity, and inefficient port allocation.
              The system was physically deployed and evaluated over a four-week live study.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {thesisStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-light text-accent">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Architecture + Contributions */}
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">System Architecture</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {thesisArchitecture.map((layer) => (
                    <li key={layer.layer}>
                      <span className="text-foreground font-medium">{layer.layer}:</span>{" "}
                      {layer.detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Key Contributions</h4>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  {thesisContributions.map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {thesisTech.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Other projects */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {otherProjects.map((exp, index) => (
              <div key={index} className="pb-6 border-b border-border md:border-0">
                <span className="news-date block mb-2">{exp.period}</span>
                <div>
                  <h3 className="font-medium text-foreground">{exp.role}</h3>
                  <p className="text-accent text-sm">{exp.lab}</p>
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
