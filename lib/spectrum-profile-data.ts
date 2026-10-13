export interface CourseItem {
  id: string;
  title: string;
  duration: string;
  category: string;
  description: string;
  claimable: boolean;
  targetAudience?: string;
  badge?: string;
}

export interface ProgrammeCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
  description: string;
  courses: CourseItem[];
}

export interface AdvisorItem {
  name: string;
  initials: string;
  role: string;
  organization: string;
  badge?: string;
}

export interface DivisionItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: string;
  href: string;
}

export const COMPANY_INFO = {
  name: "Spectrum Edu Resources (M) Sdn. Bhd.",
  registrationNo: "202201007933 (1453630-H)",
  tagline: "Empowering Minds. Building Futures.",
  mission: "To bridge the gap between education and professional success.",
  hrdCorp: {
    status: "HRD Corp Registered Training Provider",
    certificateSerialNo: "202201007933",
    approvalDate: "22 July 2026",
    expiryDate: "21 July 2027",
    act: "Pembangunan Sumber Manusia Berhad Act 2001",
  },
  stats: {
    since: "2012",
    trainedCount: "5,000+",
    yearsInService: "25 yrs",
    yearlyRecords: "800K",
    programmesTotal: "45",
    categoriesCount: "9",
    marketingExecutives: "15",
    agentsNationwide: "20+",
    yearlyTargetAchieved: "80–100%",
  },
  address: {
    suite: "Suite 3A.18, I-01-05, 5th Floor, Block I",
    building: "Setiawalk, Persiaran Wawasan",
    city: "Puchong",
    state: "Selangor",
    country: "Malaysia",
    postcode: "47160",
    full: "Suite 3A.18, I-01-05, 5th Floor, Block I, Setiawalk, Persiaran Wawasan, 47160 Puchong, Selangor, Malaysia",
  },
  contact: {
    email: "contact@spectrum-malaysia.com",
    phone: "+60 3-8060 0000",
    hours: "Monday – Friday: 9:00 AM – 6:00 PM (MYT)",
  },
};

export const THREE_DIVISIONS: DivisionItem[] = [
  {
    number: "01",
    title: "Corporate Training",
    subtitle: "HRD Corp Claimable Programmes for Employers",
    description:
      "HRD Corp registered training provider delivering claimable public, in-house and remote online programmes tailored to each client's workforce and strategic objectives.",
    highlights: [
      "100% HRD Corp Levy Claimable",
      "45 Programmes across 9 Strategic Industry Areas",
      "Public, In-House, Remote Online & Blended Formats",
      "Full documentation, attendance logging & claim filing support",
    ],
    icon: "briefcase",
    href: "#corporate-training",
  },
  {
    number: "02",
    title: "Student Recruitment",
    subtitle: "Connecting Students with Top Colleges & Universities",
    description:
      "International and local student recruitment into leading Malaysian colleges and universities, backed by a nationwide agent network and international institutional partnerships.",
    highlights: [
      "80–100% Average yearly recruitment target achieved",
      "15 Permanent marketing executives & 20+ agents nationwide",
      "Partners across Nepal, Sri Lanka, Bangladesh, China, India, UAE & Africa",
      "Track record managing and operating private colleges in Malaysia",
    ],
    icon: "globe",
    href: "#student-recruitment",
  },
  {
    number: "03",
    title: "Lifelong Learning",
    subtitle: "Micro-Credentials Stackable to Diploma & Degree",
    description:
      "Micro-credential programmes with MQA and JPK, alongside government-funded upskilling (Program Madani, PERKESO EIS) empowering adult learners aged 18 and above.",
    highlights: [
      "MQA & JPK micro-credentials for working adults (18+)",
      "Stackable 5-day modular pathways leading toward Diploma or Degree",
      "Nationwide reskilling for retrenched workers under PERKESO EIS",
      "Trainers with Train-the-Trainer (TTT) & MOE teaching permits",
    ],
    icon: "award",
    href: "#lifelong-learning",
  },
];

export const VALUE_PROPOSITIONS = [
  {
    title: "Industry-Relevant Content",
    description: "Programmes designed around real job roles, current regulations, and skills modern employers demand.",
    icon: "target",
  },
  {
    title: "Customised to Your Needs",
    description: "Training Needs Analysis (TNA) and learning materials tailored to each organisation's unique workforce and KPIs.",
    icon: "settings",
  },
  {
    title: "Qualified Trainers",
    description: "Trainers certified with Train-the-Trainer (TTT) credentials, Ministry of Education permits, or deep industry expertise.",
    icon: "user-check",
  },
  {
    title: "Recognised Outcomes",
    description: "HRD Corp claimable courses plus MQA and JPK micro-credentials leading toward recognised national awards.",
    icon: "award",
  },
];

export const HRD_CORP_CLAIM_STEPS = [
  {
    step: 1,
    title: "Training Needs Analysis",
    subtitle: "We assess skill gaps with your HR team",
    description: "Identify current workforce capabilities, regulatory requirements, and strategic competency milestones.",
    icon: "search",
  },
  {
    step: 2,
    title: "Proposal & Quotation",
    subtitle: "Course outline, schedule & HRD Corp details",
    description: "We provide structured course proposals, course codes, timetable breakdown, and trainer CVs.",
    icon: "file-text",
  },
  {
    step: 3,
    title: "Grant Application",
    subtitle: "Employer applies via HRD Corp portal",
    description: "Your HR team submits the grant via the e-TRIS portal with our complete pre-approved documentation pack.",
    icon: "landmark",
  },
  {
    step: 4,
    title: "Training Delivery",
    subtitle: "Qualified trainers, attendance & assessments",
    description: "High-impact delivery via in-house, public, or remote online classes with certified TTT trainers.",
    icon: "presentation",
  },
  {
    step: 5,
    title: "Claim & Evaluation Report",
    subtitle: "Claim documents & post-training evaluation",
    description: "We supply attendance sheets, assessment results, and post-course evaluations for hassle-free levy reimbursement.",
    icon: "receipt",
  },
];

export const HRD_PROGRAMME_CATALOGUE: ProgrammeCategory[] = [
  {
    id: "leadership",
    name: "Leadership & Management",
    icon: "users",
    count: 5,
    description: "Empower managers and executives with decisive strategic thinking, supervisory excellence, and change management.",
    courses: [
      {
        id: "lm-1",
        title: "Leadership Excellence for Supervisors",
        duration: "2 Days",
        category: "Leadership & Management",
        description: "Essential supervisory competencies, delegation, emotional intelligence, and team leadership.",
        claimable: true,
      },
      {
        id: "lm-2",
        title: "Effective People Management",
        duration: "2 Days",
        category: "Leadership & Management",
        description: "Managing diverse teams, resolving interpersonal conflict, and motivating peak workplace performance.",
        claimable: true,
      },
      {
        id: "lm-3",
        title: "Strategic Thinking & Decision Making",
        duration: "2 Days",
        category: "Leadership & Management",
        description: "Frameworks for critical problem analysis, risk mitigation, and strategic scenario planning.",
        claimable: true,
      },
      {
        id: "lm-4",
        title: "Coaching & Mentoring for Managers",
        duration: "1 Day",
        category: "Leadership & Management",
        description: "Transforming managers into high-impact performance coaches with structured 1-on-1 feedback models.",
        claimable: true,
      },
      {
        id: "lm-5",
        title: "Leading Change in the Workplace",
        duration: "1 Day",
        category: "Leadership & Management",
        description: "Overcoming organisational inertia, communicating transitions, and driving successful change adoption.",
        claimable: true,
      },
    ],
  },
  {
    id: "communication",
    name: "Communication & Soft Skills",
    icon: "message-square",
    count: 5,
    description: "Build articulate, high-performing teams with impactful presentation, business writing, and EQ skills.",
    courses: [
      {
        id: "cs-1",
        title: "Effective Business Communication",
        duration: "2 Days",
        category: "Communication & Soft Skills",
        description: "Master professional cross-departmental dialogue, active listening, and business correspondence.",
        claimable: true,
      },
      {
        id: "cs-2",
        title: "Presentation Skills with Impact",
        duration: "2 Days",
        category: "Communication & Soft Skills",
        description: "High-stakes presentation structuring, stage presence, visual slide storytelling, and stakeholder persuasion.",
        claimable: true,
      },
      {
        id: "cs-3",
        title: "Emotional Intelligence at Work",
        duration: "1 Day",
        category: "Communication & Soft Skills",
        description: "Self-awareness, empathy, stress management, and building constructive workplace relationships.",
        claimable: true,
      },
      {
        id: "cs-4",
        title: "High-Performance Teamwork",
        duration: "1 Day",
        category: "Communication & Soft Skills",
        description: "Aligning team roles, building psychological safety, and fostering collaborative problem solving.",
        claimable: true,
      },
      {
        id: "cs-5",
        title: "Time Management & Productivity",
        duration: "1 Day",
        category: "Communication & Soft Skills",
        description: "Prioritisation matrices, workflow streamlining, eliminating procrastination, and daily execution discipline.",
        claimable: true,
      },
    ],
  },
  {
    id: "digital",
    name: "Digital & Technology",
    icon: "cpu",
    count: 5,
    description: "Accelerate digital transformation with practical data visualisation, Excel mastery, AI workplace tools, and cybersecurity.",
    courses: [
      {
        id: "dt-1",
        title: "Microsoft Excel: Intermediate to Advanced",
        duration: "2 Days",
        category: "Digital & Technology",
        description: "Advanced formulas, XLOOKUP, Pivot Tables, data validation, dashboards, and automated macros.",
        claimable: true,
      },
      {
        id: "dt-2",
        title: "Data Visualisation with Power BI",
        duration: "2 Days",
        category: "Digital & Technology",
        description: "Importing datasets, DAX fundamentals, dynamic dashboard creation, and enterprise business reporting.",
        claimable: true,
      },
      {
        id: "dt-3",
        title: "AI Tools for Workplace Productivity",
        duration: "1 Day",
        category: "Digital & Technology",
        description: "Practical generative AI, prompt engineering, automating routine workflows, and AI compliance.",
        claimable: true,
      },
      {
        id: "dt-4",
        title: "Digital Marketing & Social Media",
        duration: "2 Days",
        category: "Digital & Technology",
        description: "Omnichannel campaigns, content creation, Meta/Google ads targeting, and analytics conversion tracking.",
        claimable: true,
      },
      {
        id: "dt-5",
        title: "Cybersecurity Awareness",
        duration: "1 Day",
        category: "Digital & Technology",
        description: "Phishing defense, data privacy best practices, password hygiene, and safeguarding corporate assets.",
        claimable: true,
      },
    ],
  },
  {
    id: "osh",
    name: "Occupational Safety & Health (OSH)",
    icon: "shield-alert",
    count: 5,
    description: "Ensure complete compliance with OSHA 1994, HIRARC risk management, fire safety, and workplace wellbeing.",
    courses: [
      {
        id: "osh-1",
        title: "OSH Awareness & HIRARC",
        duration: "2 Days",
        category: "Occupational Safety & Health",
        description: "Hazard Identification, Risk Assessment and Risk Control (HIRARC) principles and Malaysian OSHA standards.",
        claimable: true,
      },
      {
        id: "osh-2",
        title: "Safety & Health Committee Effectiveness",
        duration: "1 Day",
        category: "Occupational Safety & Health",
        description: "Statutory roles of safety committees, conducting workplace audits, and managing incident investigations.",
        claimable: true,
      },
      {
        id: "osh-3",
        title: "First Aid & CPR",
        duration: "1 Day",
        category: "Occupational Safety & Health",
        description: "Hands-on emergency response, CPR protocols, wound dressing, and life-saving intervention training.",
        claimable: true,
      },
      {
        id: "osh-4",
        title: "Fire Safety & Emergency Response",
        duration: "1 Day",
        category: "Occupational Safety & Health",
        description: "Evacuation drills, fire extinguisher operation, emergency warden duties, and building safety protocols.",
        claimable: true,
      },
      {
        id: "osh-5",
        title: "Workplace Ergonomics",
        duration: "1 Day",
        category: "Occupational Safety & Health",
        description: "Preventing musculoskeletal disorders, workstation setup, posture health, and ergonomics assessment.",
        claimable: true,
      },
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: "truck",
    count: 5,
    description: "Streamline end-to-end supply chain operations, inventory control, procurement, and import-export procedures.",
    courses: [
      {
        id: "lsc-1",
        title: "Fundamentals of Supply Chain Management",
        duration: "2 Days",
        category: "Logistics & Supply Chain",
        description: "End-to-end supply chain flow, demand forecasting, vendor collaboration, and distribution strategies.",
        claimable: true,
      },
      {
        id: "lsc-2",
        title: "Warehouse & Inventory Management",
        duration: "2 Days",
        category: "Logistics & Supply Chain",
        description: "Stock accuracy, FIFO/LIFO, layout design, picking optimization, and reducing holding costs.",
        claimable: true,
      },
      {
        id: "lsc-3",
        title: "Effective Procurement & Purchasing",
        duration: "2 Days",
        category: "Logistics & Supply Chain",
        description: "Supplier evaluation, contract negotiation, purchase requisition workflows, and cost reduction.",
        claimable: true,
      },
      {
        id: "lsc-4",
        title: "Logistics Cost Optimisation",
        duration: "1 Day",
        category: "Logistics & Supply Chain",
        description: "Freight rate analysis, route planning, fleet efficiency, and identifying hidden distribution costs.",
        claimable: true,
      },
      {
        id: "lsc-5",
        title: "Import & Export Documentation",
        duration: "1 Day",
        category: "Logistics & Supply Chain",
        description: "Customs declaration, HS codes, Bill of Lading, Letters of Credit, and Malaysian trade compliance.",
        claimable: true,
      },
    ],
  },
  {
    id: "sales",
    name: "Customer Service & Sales",
    icon: "handshake",
    count: 5,
    description: "Elevate customer retention, close high-value deals with consultative sales, and master professional negotiation.",
    courses: [
      {
        id: "css-1",
        title: "Service Excellence",
        duration: "2 Days",
        category: "Customer Service & Sales",
        description: "Delivering memorable customer touchpoints, managing brand perception, and building customer loyalty.",
        claimable: true,
      },
      {
        id: "css-2",
        title: "Handling Difficult Customers",
        duration: "1 Day",
        category: "Customer Service & Sales",
        description: "De-escalation tactics, active empathy, complaint resolution frameworks, and emotional resilience.",
        claimable: true,
      },
      {
        id: "css-3",
        title: "Consultative Selling Skills",
        duration: "2 Days",
        category: "Customer Service & Sales",
        description: "Need-based discovery questions, value proposition crafting, overcoming objections, and deal closing.",
        claimable: true,
      },
      {
        id: "css-4",
        title: "Negotiation Skills",
        duration: "2 Days",
        category: "Customer Service & Sales",
        description: "Win-win bargaining strategies, psychological anchoring, BATNA analysis, and commercial agreement tactics.",
        claimable: true,
      },
      {
        id: "css-5",
        title: "Professional Telephone Etiquette",
        duration: "1 Day",
        category: "Customer Service & Sales",
        description: "Tone management, active listening, call control, message taking, and professional front-line representation.",
        claimable: true,
      },
    ],
  },
  {
    id: "finance",
    name: "Finance, HR & Administration",
    icon: "calculator",
    count: 5,
    description: "Equip staff with essential financial acumen, Employment Act 1955 amendments, payroll statutory rules, and administrative rigor.",
    courses: [
      {
        id: "fha-1",
        title: "Finance for Non-Finance Managers",
        duration: "2 Days",
        category: "Finance, HR & Administration",
        description: "Reading P&L statements, balance sheets, cash flow analysis, budgeting, and cost variance control.",
        claimable: true,
      },
      {
        id: "fha-2",
        title: "Employment Act 1955 & Latest Amendments",
        duration: "1 Day",
        category: "Finance, HR & Administration",
        description: "Working hours, overtime calculation, maternity/paternity leave, termination protocols, and compliance.",
        claimable: true,
      },
      {
        id: "fha-3",
        title: "Payroll & Statutory Contributions",
        duration: "1 Day",
        category: "Finance, HR & Administration",
        description: "EPF, SOCSO, EIS, PCB (MTD) calculation formulas, statutory deadlines, and payroll audit readiness.",
        claimable: true,
      },
      {
        id: "fha-4",
        title: "Effective Office Administration",
        duration: "1 Day",
        category: "Finance, HR & Administration",
        description: "Document filing systems, meeting management, office inventory control, and executive scheduling.",
        claimable: true,
      },
      {
        id: "fha-5",
        title: "Business Report Writing",
        duration: "2 Days",
        category: "Finance, HR & Administration",
        description: "Structuring executive summaries, analytical report formatting, clarity in recommendations, and editing.",
        claimable: true,
      },
    ],
  },
  {
    id: "quality",
    name: "Quality & Productivity",
    icon: "check-circle",
    count: 5,
    description: "Drive continuous operational improvement, Lean Six Sigma methodologies, 5S organisation, and KPI management.",
    courses: [
      {
        id: "qp-1",
        title: "5S Workplace Organisation",
        duration: "1 Day",
        category: "Quality & Productivity",
        description: "Seiri, Seiton, Seiso, Seiketsu, Shitsuke principles for eliminating waste and establishing clean workflows.",
        claimable: true,
      },
      {
        id: "qp-2",
        title: "Root Cause Analysis & Problem Solving",
        duration: "2 Days",
        category: "Quality & Productivity",
        description: "5 Whys, Fishbone (Ishikawa) diagrams, Pareto analysis, and corrective action implementation.",
        claimable: true,
      },
      {
        id: "qp-3",
        title: "Lean Six Sigma Yellow Belt",
        duration: "2 Days",
        category: "Quality & Productivity",
        description: "DMAIC roadmap, process mapping, identifying non-value-added activities, and defect reduction.",
        claimable: true,
      },
      {
        id: "qp-4",
        title: "KPI & Performance Management",
        duration: "2 Days",
        category: "Quality & Productivity",
        description: "Designing balanced scorecards, setting SMART departmental KPIs, tracking milestones, and appraisal coaching.",
        claimable: true,
      },
      {
        id: "qp-5",
        title: "Kaizen Continuous Improvement",
        duration: "1 Day",
        category: "Quality & Productivity",
        description: "Grassroots employee innovation, standardisation, Gemba walks, and small-step incremental productivity.",
        claimable: true,
      },
    ],
  },
  {
    id: "workforce",
    name: "Workforce Development",
    icon: "trending-up",
    count: 5,
    description: "Train-the-trainer methodology, instructional design, national reskilling transitions, and mental wellbeing.",
    courses: [
      {
        id: "wd-1",
        title: "Training Delivery Skills for Trainers",
        duration: "2 Days",
        category: "Workforce Development",
        description: "Adult learning principles (Andragogy), interactive facilitation, managing classroom dynamics, and coaching.",
        claimable: true,
      },
      {
        id: "wd-2",
        title: "Instructional Design Essentials",
        duration: "2 Days",
        category: "Workforce Development",
        description: "ADDIE model, learning objectives taxonomy, crafting courseware, and designing formative assessments.",
        claimable: true,
      },
      {
        id: "wd-3",
        title: "Reskilling for Career Transition",
        duration: "5 Days",
        category: "Workforce Development",
        description: "Comprehensive national reskilling for displaced or transitional workers under government initiatives.",
        claimable: true,
      },
      {
        id: "wd-4",
        title: "Personal Financial Management",
        duration: "1 Day",
        category: "Workforce Development",
        description: "Financial literacy, debt management, savings habits, investment fundamentals, and retirement planning.",
        claimable: true,
      },
      {
        id: "wd-5",
        title: "Workplace Wellbeing & Mental Health",
        duration: "1 Day",
        category: "Workforce Development",
        description: "Burnout prevention, mental resilience, supportive workplace culture, and peer intervention techniques.",
        claimable: true,
      },
    ],
  },
];

export const BOARD_OF_ADVISORS: AdvisorItem[] = [
  {
    name: "Encik Zabib Bin Bakar",
    initials: "ZB",
    role: "Ketua Penolong Pengarah Kanan",
    organization: "Malaysian Qualifications Agency (MQA)",
    badge: "MQA Oversight",
  },
  {
    name: "Professor Dr Nagarajah Lee",
    initials: "NL",
    role: "Academic Consultant",
    organization: "Brickfields Asia College (BAC), Wilmington University",
    badge: "Higher Education",
  },
  {
    name: "Dr. Anas Bin Tajudin",
    initials: "AT",
    role: "Timbalan Naib Canselor (Akademik & Antarabangsa)",
    organization: "Universiti Islam Melaka (UNIMEL)",
    badge: "University Leadership",
  },
  {
    name: "Dr. Zaidi Bin Abdul Razak",
    initials: "ZR",
    role: "JPK Advisor & Senior Consultant",
    organization: "Universiti Utara Malaysia (UUM) / JPK",
    badge: "Skills & TVET",
  },
  {
    name: "Assoc. Prof. Dr. Harwindar Singh",
    initials: "HS",
    role: "CPLM, CSCA, CSCM, CSSCP; Professional Trainer",
    organization: "Specialist in Occupational Safety & Health / Logistics",
    badge: "OSH & Supply Chain",
  },
];

export const ACCREDITATIONS = [
  { name: "HRD Corp", label: "Pembangunan Sumber Manusia Berhad", type: "Registered Training Provider" },
  { name: "PERKESO", label: "Pertubuhan Keselamatan Sosial", type: "EIS & Penjana Partner" },
  { name: "MQA", label: "Agensi Kelayakan Malaysia", type: "Micro-credentials Oversight" },
  { name: "JPK", label: "Jabatan Pembangunan Kemahiran", type: "National TVET Framework" },
  { name: "KPT", label: "Kementerian Pendidikan Tinggi", type: "Ministry of Higher Education" },
  { name: "USM", label: "Universiti Sains Malaysia", type: "Research University Partner" },
  { name: "OTHM", label: "OTHM Qualifications (UK)", type: "International Awarding Body" },
  { name: "MDEC", label: "Malaysia Digital Economy Corporation", type: "Digital Upskilling Partner" },
];

export const INSTITUTIONAL_PARTNERS = [
  { name: "ICMS", fullName: "International University College of Management and Sports", category: "University College" },
  { name: "Spectrum International University College", fullName: "Spectrum International University College", category: "University College" },
  { name: "UTMSPACE", fullName: "School of Professional and Continuing Education (UTM)", category: "Lifelong Learning" },
  { name: "Atlantic International College", fullName: "Atlantic International College", category: "Higher Education" },
  { name: "UniSZA", fullName: "Universiti Sultan Zainal Abidin", category: "Public University" },
  { name: "Wilmington Metropolitan University", fullName: "Wilmington Metropolitan University", category: "International University" },
  { name: "Universiti Melaka", fullName: "Universiti Melaka (UNIMEL)", category: "State University" },
];

export const RECRUITMENT_REGIONS = [
  "Nepal",
  "Sri Lanka",
  "Bangladesh",
  "China",
  "India",
  "United Arab Emirates",
  "African Nations",
];
