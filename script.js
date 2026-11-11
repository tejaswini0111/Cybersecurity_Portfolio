const projects = {
  scanner: {
    code: "PROJECT_03 / NETWORK SECURITY",
    title: "Python Local Vulnerability Scanner",
    lead: "A Python-based network security assessment tool that scans selected TCP ports, identifies running services, checks local Windows listeners and produces a searchable HTML security report.",
    tags: ["Python", "Nmap", "Python-Nmap", "PowerShell", "Jinja2", "HTML", "CSS", "JavaScript"],
    blocks: [
      ["WHAT WAS IT?", "A local/network assessment utility combining Nmap scanning with Windows process and listener inspection. It presents scan statistics, service details and security observations in an HTML dashboard."],
      ["WHY I BUILT IT", "To gain practical experience in network reconnaissance, service discovery and understanding how exposed services relate to processes running on a Windows machine."],
      ["OBJECTIVE", "Scan 62 selected TCP ports, identify open services and available versions, inspect local listening addresses and associated processes, and generate a structured report."],
      ["WHAT I IMPLEMENTED", ["Integrated Nmap through Python-Nmap for selected TCP port scanning and service detection.", "Used PowerShell to retrieve local listening addresses, process names and PIDs.", "Added checks for MySQL ports 3306 and 33060 and their listening addresses.", "Categorised security observations and generated a responsive, searchable HTML report using Jinja2, HTML, CSS and JavaScript."]],
      ["SKILLS DEVELOPED", "Network reconnaissance · TCP port scanning · Service/version detection · Windows process inspection · PowerShell automation · Python scripting · HTML reporting"],
      ["OUTCOME", "A tool that turns selected-port scan results and local listener/process information into a structured HTML security dashboard with searchable port details and security findings."],
      ["REAL-WORLD RELEVANCE", "Security teams use asset and service discovery to understand network exposure. Correlating a listening port with its process can help prioritise investigation. An open port alone does not prove a vulnerability; configuration, authentication, reachability and controls must also be reviewed."]
    ],
    evidence: ["https://github.com/tejaswini0111/Python-Local-Vulnerability-Scanner", "https://github.com/tejaswini0111/Python-Local-Vulnerability-Scanner/blob/main/image.png", "https://github.com/tejaswini0111/Python-Local-Vulnerability-Scanner/blob/main/README.md", "http://127.0.0.1:5500/scan_report.html"]
  },
  phishing: {
    code: "PROJECT_02 / EMAIL SECURITY + MACHINE LEARNING",
    title: "AI-Powered Phishing Email Detection System",
    lead: "An educational email-analysis application that combines a TF-IDF and Logistic Regression text classifier with rule-based URL and keyword indicators, presented through a Streamlit interface.",
    tags: ["Python", "Pandas", "Scikit-learn", "TF-IDF", "Logistic Regression", "Streamlit", "Joblib", "Matplotlib"],
    blocks: [
      ["WHAT WAS IT?", "A Python machine-learning application that analyses pasted email content and predicts whether it resembles phishing or legitimate email. Additional checks flag suspicious URL characteristics and potentially risky phrases."],
      ["WHY I BUILT IT", "Phishing is commonly used to trick people into revealing sensitive information or interacting with harmful links. I wanted to explore how text classification and simple indicators can support an initial review."],
      ["OBJECTIVE", "Build and evaluate a binary text-classification pipeline, add supporting rule-based checks, and make the results accessible through an interactive dashboard."],
      ["WHAT I IMPLEMENTED", ["Collected a labelled Kaggle dataset containing 82,077 email records: 42,844 phishing and 39,233 legitimate.", "Preprocessed the data by removing empty records, missing labels and duplicate samples.", "Used TF-IDF to convert email text into numerical features and Logistic Regression for classification.", "Used an 80/20 stratified train-test split and evaluated accuracy, precision, recall, F1-score and a confusion matrix.", "Added suspicious URL-pattern and keyword checks, then integrated the analysis into a Streamlit interface."]],
      ["SKILLS DEVELOPED", "Email threat analysis · Data cleaning · Text feature extraction · Binary classification · Model evaluation · Rule-based indicators · Python application development"],
      ["OUTCOME", "The held-out test set produced 98.31% accuracy. Reported phishing precision was approximately 98%, recall approximately 99%, and F1-score approximately 98%. The confusion matrix recorded 8,448 true positives, 7,691 true negatives, 156 false positives and 121 false negatives."],
      ["REAL-WORLD RELEVANCE", "Email security teams assess message content and indicators to prioritise suspicious messages. This project demonstrates one educational approach to assisting that triage; it is not a production email gateway or a definitive verdict engine."],
      ["IMPORTANT LIMITATIONS", "Predictions can be wrong. Dataset-specific results do not guarantee real-world performance. Independent evaluation and checks for duplicate/source-related leakage are still important. URL indicators do not prove a domain is malicious; the application does not visit or verify extracted URLs, and attachments are not executed or opened."]
    ],
    evidence: ["https://github.com/tejaswini0111/AI-Phishing-Email-Detector", "https://github.com/tejaswini0111/AI-Phishing-Email-Detector/blob/main/Model%20training%20output.png", "https://github.com/tejaswini0111/AI-Phishing-Email-Detector/blob/main/confusion_matrix.png", "https://github.com/tejaswini0111/AI-Phishing-Email-Detector/blob/main/README.md"]
  },
  traffic: {
    code: "PROJECT_01 / NETWORK MONITORING",
    title: "Python-Based Network Traffic Monitoring Tool",
    lead: "A Python tool that captures and inspects network packets in real time, extracts key network metadata and records activity involving a predefined set of ports.",
    tags: ["Python", "Scapy", "Socket", "Psutil", "TCP/IP", "UDP", "Logging"],
    blocks: [
      ["WHAT WAS IT?", "A packet-monitoring script built with Scapy. It processes captured packets and extracts source and destination IP addresses, port numbers, protocol information and other packet details."],
      ["WHY I BUILT IT", "To gain hands-on experience with packet capture and understand how network traffic can provide useful signals for security monitoring and investigation."],
      ["OBJECTIVE", "Capture network packets in real time, inspect selected metadata, flag activity involving predefined ports and maintain timestamped logs for later review."],
      ["WHAT I IMPLEMENTED", ["Installed and imported Scapy, Socket and Psutil to support packet capture and network-related information.", "Configured timestamped logging for captured network activity.", "Defined ports of interest, including SSH (22), Telnet (23) and DNS (53).", "Implemented a process_packet() function to extract IP addresses, ports and protocol information and check port indicators.", "Used Scapy's sniff() function to capture packets and pass them to the processing function."]],
      ["SKILLS DEVELOPED", "Packet capture · Packet inspection · TCP/IP · UDP · IP and port analysis · Scapy · Python logging · Basic network threat monitoring"],
      ["OUTCOME", "A working script for observing packet metadata and recording network activity. The project provided practical experience with packet capture, packet processing and basic indicator-based monitoring."],
      ["REAL-WORLD RELEVANCE", "Network monitoring helps defenders understand communication patterns and investigate unusual connections. A port appearing in traffic is only an indicator; context and further analysis are needed before treating activity as malicious."]
    ],
    evidence: [
      "https://github.com/tejaswini0111/Python-Based-Network-Traffic-Monitoring-Tool",
      "https://private-user-images.githubusercontent.com/154247533/694867209-4fbe3ddd-2df8-4d4c-9a96-2bc548f00a86.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtlI6ImtlTUiLCJleHAiOjE3OTQ0MDg4MTEsIm5iZiI6MTc5NDQwODUxMSwicGF0aCI6Ii8xNTQyNDc1MzMvNjk0ODY3MjA5LTRmYmUzZGRkLTJkZjgtNGQ0Yy05YTk2LTJiYzU0OGYwMGE4Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYxMTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MTExMVQxNDQ4MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iN2IzMzk3MGIyYzY1NzI1MmY4MzU3M2E1YjY4N2M0M2FkZGM0YzVhNjFlODFlNzdjMDk5ZDVlZGI5MDBlOTcxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.yNmM_SQIICrC0F2wg4RDVcxWSBS2KfOEKIO1JmS-eA8",
      "https://private-user-images.githubusercontent.com/154247533/694868509-772d2706-9050-4060-995c-f404cb76b3fe.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtlI6ImtlTUiLCJleHAiOjE3OTQ0MDg4MTEsIm5iZiI6MTc5NDQwODUxMSwicGF0aCI6Ii8xNTQyNDc1MzMvNjk0ODY4NTA5LTc3MmQyNzA2LTkwNTAtNDA2MC05OTVjLWY0MDRjYjc2YjNmZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYxMTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MTExMVQxNDQ4MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00YTA2MDZmNWE5NGQ1MjY2MThiMTRmNjk3YmNlYjljY2VmODYwZjU1ZmQ3YjEyYzBkOGFmYWMyMzlkMzg1ZDE5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.NRn31h5d565w-MERfty76u_tXRutaURZGkQJsZZeaJ0",
      "https://private-user-images.githubusercontent.com/154247533/694866158-94d8f4f4-435c-4edd-83f7-47513e8d1cad.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTQ0MDg4MTEsIm5iZiI6MTc5NDQwODUxMSwicGF0aCI6Ii8xNTQyNDc1MzMvNjk0ODY2MTU4LTk0ZDhmNGY0LTQzNWMtNGVkZC04M2Y3LTQ3NTEzZThkMWNhZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYxMTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MTExMVQxNDQ4MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00OTlmNmEyM2ExZGJkMzkwMmNlODk5NzkxNWE5NmVhN2IxMWZhZTI2ODAyYzIyZjBkNGRhYmM4YzljMDNiOTc4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.bYPZoVlFKW2j-5pG84CrZLm31K__cN3fDS366EeHqqQ",
      "Implementation notes — https://github.com/tejaswini0111/Python-Based-Network-Traffic-Monitoring-Tool/blob/main/README.md"
    ]
  }
};

const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const modalOverline = document.getElementById("modalOverline");
const toast = document.getElementById("toast");
let lastFocused = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function formatEvidence(item) {
  let url = item;
  let label = item;

  if (item.includes(" — ")) {
    const parts = item.split(" — ");
    label = parts[0];
    url = parts[1];
  } else {
    const urlMatch = item.match(/(https?:\/\/[^\s]+)/);
    if (urlMatch) {
      url = urlMatch[0];
    }
  }

  // Handle long private user images / JWT links nicely
  if (url.includes("private-user-images.githubusercontent.com")) {
    if (url.includes("694867209")) label = "Traffic Screenshot 1";
    else if (url.includes("694868509")) label = "Traffic Screenshot 2";
    else if (url.includes("694866158")) label = "Traffic Screenshot 3";
    else label = "Network Traffic Screenshot";
  } else if (url.includes("github.com") && url.endsWith("/blob/main/README.md")) {
    label = label === item ? "README Documentation" : label;
  } else if (url.includes("github.com") && url.includes("/blob/main/")) {
    const filename = url.split("/").pop().split("?")[0];
    const decodedName = decodeURIComponent(filename);
    label = label === item ? `Screenshot: ${decodedName}` : label;
  } else if (url.includes("github.com") && !url.includes("/blob/") && !url.includes("/tree/")) {
    label = label === item ? "GitHub Repository" : label;
  } else if (url.includes("127.0.0.1") || url.includes("localhost")) {
    label = label === item ? "Local HTML Report Dashboard" : label;
  } else {
    if (label.length > 50) {
      label = url.replace(/^https?:\/\/(www\.)?/, "").substring(0, 42) + "...";
    }
  }

  return { url, label };
}

function openProject(key) {
  const project = projects[key];
  if (!project) return;
  lastFocused = document.activeElement;
  modalOverline.textContent = project.code;
  const blocks = project.blocks.map(([heading, content]) => {
    const body = Array.isArray(content)
      ? `<ul>${content.map(item => `<li>${item}</li>`).join("")}</ul>`
      : `<p>${content}</p>`;
    const full = heading === "WHAT I IMPLEMENTED" || heading === "IMPORTANT LIMITATIONS" || heading === "REAL-WORLD RELEVANCE";
    return `<article class="detail-block ${full ? "full" : ""}"><h3>${heading}</h3>${body}</article>`;
  }).join("");

  const evidence = project.evidence.map(item => {
    const { url, label } = formatEvidence(item);
    return `<a class="evidence-link" href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
  }).join("");

  modalContent.innerHTML = `
    <span class="section-label">PROJECT DETAIL / ${project.code.split(" / ")[0]}</span>
    <h2 id="modalTitle">${project.title}</h2>
    <p class="modal-lead">${project.lead}</p>
    <div class="modal-tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
    <div class="detail-grid">${blocks}
      <article class="detail-block full"><h3>EVIDENCE & PROJECT RESOURCES</h3>
        <p>Click on the links below to access repositories, screenshots, and documentation.</p>
        <div class="evidence-list">${evidence}</div>
      </article>
    </div>`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.getElementById("modalClose").focus();
}

function closeProject() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});
document.getElementById("modalClose").addEventListener("click", closeProject);
document.getElementById("modalCloseBottom").addEventListener("click", closeProject);
modal.addEventListener("click", event => { if (event.target === modal) closeProject(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeProject();
});

document.querySelectorAll(".placeholder-link").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showToast(link.dataset.placeholder);
  });
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach(element => element.classList.add("visible"));
}