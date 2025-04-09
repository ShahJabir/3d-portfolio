import Page from "../Page";
import "./SecurityWorkPage.scss";

const SecurityWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={false}
        panelContent={{
          title: "Security Work",
          quote: "The best cybersecurity is more than protection; it’s resilience.",
          content: [
            "🛡️ Cybersecurity Skills",
            "Domains: Web Security, Network Security, Red Teaming, Blue Teaming, Threat Hunting, Malware Analysis, Cloud Security, OSINT, Secure Dev",
            "Concepts & Frameworks: OWASP Top 10, MITRE ATT&CK, NIST, ISO 27001, Threat Modeling, Zero Trust, CVSS, Secure SDLC",
            "Tools: Burp Suite, Nmap, Metasploit, OWASP ZAP, Nikto, Gobuster, Autopsy, Volatility, Ghidra, Wireshark, yara, Splunk, Suricata, Wazuh, Sigma, ELK",
            "Cloud & Infra Security: AWS Security Hub, Azure Defender, GCP Security Scanner, Nessus, Shodan",
            "CTF & Labs: Hack The Box, TryHackMe, PortSwigger, VulnHub, PicoCTF",
            "Certifications: TryHackMe – Cyber Defense, Offensive Pentesting, Threat Hunting, Red Teaming",
            "📂 Notable Projects:",
            "DNSProbeX – DNS vulnerability scanner for zone transfers, wildcard abuse & misconfig detection with reporting module.",
            "NetworkGuard – Raspberry Pi-based LAN intrusion detection system with real-time alerting and MAC filtering.",
            "OWASP-Auditor – Automated OWASP Top 10 testing CLI integrated with GitHub Actions for secure CI/CD workflows.",
            "LogAnalyzer 360 – Log forensics & brute force detection engine with ELK-based visual dashboard.",
            "SecureDev Framework – Security-focused middleware toolkit enforcing validation, auth, and protections in Python/Node apps.",
            "Community & Research:",
            "Cybersecurity Knowledge Base – GitHub repo with in-depth coverage of OS, Networking, Cryptography, Binary Exploitation, and more.",
            "Cybersecurity Community Lead – Built and moderate a Discord group that hosts internal CTFs and shares daily threat insights."
          ],
        }}
        imageSrc={"/images/security.jpg"}
      />
    </>
  );
};

export default SecurityWorkPage;
