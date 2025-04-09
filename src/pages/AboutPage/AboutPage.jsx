import Page from "../Page";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "About Us",
          quote: "Empowering innovation, security, and growth.",
          content: [
            "👨‍💻 Name: Shah Jabir Taqi",
            "🎯 Current Role: Security Engineer | Web Team Lead at Team Bitsec | Founder of PathAI",
            "🎓 Education: Dakhil and Alim from Tamirul Millat Kamil Madrasah",
            "🛠️ Core Skills: Cybersecurity, DevSecOps, Full-Stack Web Development, AI Development",
            "🧠 Technical Interests: Offensive Security, AI Research, Web Exploitation, Secure Coding, Space-Tech, and Open Source Innovation",
            "🌱 Personal Highlights: Cybersecurity Community Leader | Active CTF Player | Explorer of Aerospace & Quantum Tech",
            "📚 Hobbies: Reading books on astronomy, psychology, and politics; building futuristic web & AI applications; learning space and quantum innovations"
          ],
        }}
        imageSrc={"/images/about.webp"}
      />
    </>
  );
};

export default AboutPage;
