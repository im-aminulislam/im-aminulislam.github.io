import { Mail, Phone, FileText } from "lucide-react";
import ProfileImageSlider from "@/components/ProfileImageSlider";

const HeroSection = () => {
  const cv = "/cv.pdf"; // Ensure this path is correct and the file is in the public directory

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-background py-12"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left: Bio Content */}

            <div className="flex-1 order-2 md:order-1">
              {/* Name Section */}
              <h1 className="text-4xl md:text-5xl font-light text-foreground mb-3">
                <span className="font-bold">Md</span> Aminul Islam
              </h1>

              {/* Current Role/University */}
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Electronic Information Engineering | IoT & Embedded Systems | Information Science
              </p>

              {/* Bio Description */}
              <div className="prose max-w-none text-foreground/80 space-y-5">

                <p>
                  I am a motivated engineer with a strong foundation in electronic information
                  engineering and hands-on expertise in Internet of Things (IoT) systems,
                  embedded computing, machine learning integration, and cloud computing. I am
                  currently pursuing a Master of Science in{" "}
                  <a href="#education" className="link-accent">Information Science</a>{" "}
                  at{" "}
                  <a
                    href="https://www.trine.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent font-medium"
                  >
                    Trine University
                  </a>
                  , Michigan, where my research centres on cloud computing architectures,
                  distributed systems, and cloud-IoT integration.
                </p>

                <p>
                  My research interests centre on{" "}
                  <a href="#research" className="link-accent">intelligent IoT architectures</a>,{" "}
                  <a href="#research" className="link-accent">smart energy systems</a>,{" "}
                  <a href="#research" className="link-accent">edge-AI applications</a>, and{" "}
                  <a href="#research" className="link-accent">cloud-based distributed systems</a>.
                  I am seeking a PhD position in England where I can contribute to and advance
                  research at the intersection of IoT, embedded systems, applied machine
                  learning, and cloud computing infrastructure.
                </p>

                <p>
                  For my Bachelor's thesis, I designed and implemented the{" "}
                  <strong>Smart Charging Station</strong>, an IoT-enabled EV charging
                  management system integrating ESP32 microcontrollers with cloud-based data
                  logging and a mobile application, supporting real-time monitoring and load
                  balancing across multiple simultaneous charging sessions. Since 2019, I have
                  also designed and deployed 10+ sensor-driven automation projects on Raspberry
                  Pi, Arduino, and ESP32 platforms as an independent and freelance engineer,
                  applying on-device machine learning inference with TensorFlow.js for
                  resource-constrained hardware.
                </p>

                <p className="text-base text-muted-foreground">
                  I hold a Bachelor of Engineering in Electronic Information Engineering from{" "}
                  <a
                    href="https://www.ynu.edu.cn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors underline decoration-border underline-offset-4"
                  >
                    Yunnan University
                  </a>
                  , Kunming, China, and a Diploma in Electrical Engineering from Rajshahi
                  Polytechnic Institute, Bangladesh, with a strong foundation in power systems, PLC programming, and
                  industrial automation. This progression across electrical, electronic, and
                  information systems continues to inform my current work in intelligent,
                  cloud-connected IoT infrastructure.
                </p>
              </div>
            </div>

            {/* Right: Profile Image & Contact */}
            <div className="w-full md:w-72 order-1 md:order-2 flex flex-col items-center md:items-start">
              <div className="w-48 md:w-full aspect-3/4 mb-6">
                <ProfileImageSlider alt="Md Aminul Islam" />
              </div>

              {/* Address */}
              <div className="font-mono text-sm text-foreground/80 text-center md:text-left space-y-1">
                <p>MS, Information Science</p>
                <p>Trine University</p>
                <p>Detroit, Michigan</p>
                <p>United States</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-12 pt-8 border-t border-border">
            <a
              href="mailto:aminul.islam.7145@gmail.com"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="tel:+13135737626"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-8 h-8" />
            </a>
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="CV"
            >
              <FileText className="w-8 h-8" />
            </a>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6 mb-6">
            Passionate about IoT architectures, embedded systems, edge-AI, and cloud computing.
            Interested in PhD opportunities and research collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
