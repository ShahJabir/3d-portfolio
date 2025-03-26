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
            "At Shah Jabir's Portfolio, technology isn’t just a tool—it’s a means to empower, innovate, and create meaningful change. With a strong foundation in cybersecurity, web development, DevSecOps, and AI-driven solutions, I specialize in delivering secure, scalable, and intelligent systems that transform ideas into impactful realities. Each project is crafted with precision, creativity, and a commitment to solving real-world challenges through cutting-edge technology.",
            "My journey combines a deep passion for innovation with a relentless focus on building resilient digital ecosystems. From developing advanced applications to designing secure infrastructure, my work bridges the gap between creativity and functionality. Whether it's crafting seamless web experiences, fortifying digital defenses, or integrating AI for smarter solutions, I approach every endeavor with a mindset of excellence and adaptability.",
            "At my core, I believe technology should not only solve problems but also inspire growth and trust. This ethos drives me to deliver solutions that are as practical as they are visionary. Through collaboration, continuous learning, and attention to detail, I strive to push boundaries, redefine possibilities, and leave a lasting impact in the digital landscape. Let’s build something extraordinary together.",
          ],
        }}
        imageSrc={"/images/about.webp"}
      />
    </>
  );
};

export default AboutPage;
