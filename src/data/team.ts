export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department?: string;
  linkedinUrl?: string;
  image?: string;
  bio?: string;
}

export const facultyAdvisor: TeamMember = {
  id: "faculty-1",
  name: "Dr. Ananya Sharma",
  role: "Faculty Patron",
  department: "EII Department",
  bio: "Guiding students to innovate and create solutions that matter.",
};

export const coreLeadership: TeamMember[] = [
  { id: "cl-1", name: "Aarav Mehta", role: "President", linkedinUrl: "#" },
  { id: "cl-2", name: "Priya Singh", role: "Vice President", linkedinUrl: "#" },
  { id: "cl-3", name: "Rohan Gupta", role: "Secretary", linkedinUrl: "#" },
  { id: "cl-4", name: "Sneha Verma", role: "Treasurer", linkedinUrl: "#" },
];

export const departmentHeads: TeamMember[] = [
  { id: "dh-1", name: "Vikram Joshi", role: "Head", department: "Event Management", linkedinUrl: "#" },
  { id: "dh-2", name: "Anita Rao", role: "Head", department: "Public Relations", linkedinUrl: "#" },
  { id: "dh-3", name: "Karan Patel", role: "Head", department: "Technical Team", linkedinUrl: "#" },
  { id: "dh-4", name: "Meera Nair", role: "Head", department: "Design & Creatives", linkedinUrl: "#" },
  { id: "dh-5", name: "Arjun Das", role: "Head", department: "Finance & Sponsorship", linkedinUrl: "#" },
  { id: "dh-6", name: "Riya Kapoor", role: "Head", department: "Content & Social Media", linkedinUrl: "#" },
];

export const teamMembers: TeamMember[] = [
  { id: "tm-1", name: "Ishaan Malik", role: "Member", department: "Event Management" },
  { id: "tm-2", name: "Kavya Sharma", role: "Member", department: "Technical Team" },
  { id: "tm-3", name: "Nisha Agarwal", role: "Member", department: "Design & Creatives" },
  { id: "tm-4", name: "Dev Saxena", role: "Member", department: "Public Relations" },
  { id: "tm-5", name: "Tanya Mishra", role: "Member", department: "Content & Social Media" },
  { id: "tm-6", name: "Rahul Kumar", role: "Member", department: "Finance & Sponsorship" },
  { id: "tm-7", name: "Simran Kaur", role: "Member", department: "Event Management" },
  { id: "tm-8", name: "Aditya Bhatt", role: "Member", department: "Technical Team" },
];
