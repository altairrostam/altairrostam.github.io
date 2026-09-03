export interface WritingEntry {
  title: string;
  href: string;
  date: string;
  displayDate: string;
  tag: string;
  type: string;
  summary: string;
}

export const writingEntries: readonly WritingEntry[] = [];
export const latestWriting: readonly WritingEntry[] = [];

export interface ProjectEntry {
  name: string;
  category: string;
  status?: string;
  metric?: string;
  description: readonly string[];
  stack: readonly string[];
  link: string;
  ctaText: string;
}

export const selectedProjects: readonly ProjectEntry[] = [
  {
    name: "Verniture",
    category: "E-Commerce Platform",
    status: "LIVE · IN DEVELOPMENT",
    description: [
      "A furniture e-commerce platform for browsing curated collections, purchasing products, and completing local payments through QRIS. Built as a reusable storefront platform rather than a one-off shop.",
      "I own the technical side end-to-end: application development, backend and database integration, infrastructure, deployment, domain setup, payment-gateway registration and integration, checkout, webhooks, payment reconciliation, and production operations."
    ],
    stack: ["Next.js", "Medusa.js", "PostgreSQL", "Midtrans", "Docker"],
    link: "https://verniture.com/",
    ctaText: "Visit site"
  }
];

export const healthcareProjects: readonly ProjectEntry[] = [
  {
    name: "iBRAIN2U",
    category: "Brain MRI Analysis Platform",
    status: "ARCHIVED · DEMO",
    description: [
      "A brain MRI platform for uploading imaging studies, reviewing scans, running AI-assisted classification, and annotating medical images within the application.",
      "I built the full-stack application and medical-imaging workflow, including the custom MRI viewer and integration between imaging storage, application data, and AI models."
    ],
    stack: ["React", "Django", "TensorFlow", "Cornerstone.js", "DICOM", "Orthanc", "PostgreSQL"],
    link: "https://drive.google.com/file/d/1HeqexBe3F3YoMpvyz-axBe1Xaxj_twzN/view?usp=drive_link",
    ctaText: "Watch demo"
  },
  {
    name: "SICOSA2U",
    category: "COVID-19 Medical Imaging Platform",
    status: "ARCHIVED · DEMO",
    description: [
      "A hospital imaging platform for reviewing lung scans and using deep-learning models to assist COVID-19 analysis.",
      "The system brought image ingestion, processing, model predictions, and clinical review into one workflow instead of requiring researchers to process images separately."
    ],
    stack: ["React", "Django", "TensorFlow", "Cornerstone.js", "DICOM", "Orthanc", "PostgreSQL"],
    link: "https://drive.google.com/file/d/1m6ciVQThLE09sKwlAbD7NWFU_rgJ0q7E/view?usp=drive_link",
    ctaText: "Watch demo"
  },
  {
    name: "iDERM4U",
    category: "Dermatology Consultation Platform",
    status: "LIVE",
    description: [
      "A dermatology consultation platform connecting patients, doctors, clinics, and hospitals, with image-based AI assistance integrated into the consultation workflow.",
      "The platform supported role-specific workflows across the different participants and served 500+ registered users across clinics and a hospital during the project."
    ],
    stack: ["React", "Django", "TensorFlow", "OpenCV", "PostgreSQL"],
    link: "https://iderm4u.com/",
    ctaText: "Visit site"
  }
];

export const openSourceContributions: readonly ProjectEntry[] = [
  {
    name: "NIfTI → OHIF / Orthanc",
    category: "Medical Imaging Developer Tool",
    description: [
      "An open-source tool for taking medical images in NIfTI format and making them usable in a standard web-based DICOM viewing workflow.",
      "It converts NIfTI files to DICOM, stores the resulting studies in Orthanc, and makes them available for viewing and comparison through OHIF Viewer. I built it to bridge research-oriented medical-imaging files with tools commonly used for clinical image viewing."
    ],
    stack: ["Python", "FastAPI", "NIfTI", "DICOM", "Orthanc", "OHIF", "Docker"],
    link: "https://github.com/altairrostam/nifti-ohif-orthanc",
    ctaText: "View on GitHub"
  },
  {
    name: "GitLab",
    category: "Open-Source Contributor",
    metric: "4 merged MRs",
    description: [
      "Contributed to the GitLab codebase through four merged community contributions across product code, bug fixes, and documentation, shipped in GitLab releases 17.2–17.4.",
      "The contributions touched areas including Team Planning, Knowledge, Security Policy, Vue.js, and GitLab Development Kit documentation."
    ],
    stack: ["Vue.js", "GitLab Rails", "GDK", "Documentation"],
    link: "https://gitlab.com/gitlab-org/gitlab/-/merge_requests?author_username=altairrostam&state=merged",
    ctaText: "View merged contributions"
  }
];
