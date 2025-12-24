import { Download, Link, Send, Cpu, Lock, Shield } from "lucide-react";

export const SCENARIOS = [
  {
    user: "Sarah Chen",
    initials: "SC",
    userColor: "bg-purple-500",
    query: "@Dream schedule a kickoff sync with the design team for next Tuesday.",
    response: "I've scheduled the Design Kickoff for next Tuesday, Oct 24 at 10:00 AM. Invites have been sent to all 4 team members."
  },
  {
    user: "Marcus Rodriguez",
    initials: "MR",
    userColor: "bg-blue-500",
    query: "@Dream update the Acme Corp opportunity to Closed Won in Salesforce.",
    response: "Done. I've updated the Acme Corp opportunity to Closed Won in Salesforce and logged the $120k TCV. Congratulations on closing the deal!"
  },
  {
    user: "Elena Kovac",
    initials: "EK",
    userColor: "bg-emerald-500",
    query: "@Dream reach out to the top 5 candidates for the Senior Dev role.",
    response: "I've drafted personalized outreach messages for the top 5 candidates for the Senior Eng Role. They're ready for your review in LinkedIn Recruiter."
  },
  {
    user: "David Park",
    initials: "DP",
    userColor: "bg-orange-500",
    query: "@Dream draft a project brief for the Apollo launch in Confluence.",
    response: "I've created a new project brief for the Apollo Launch in the Engineering space on Confluence. It's currently in draft status and ready for you to edit."
  },
  {
    user: "Alex Kim",
    initials: "AK",
    userColor: "bg-indigo-500",
    query: "@Dream file a high-priority bug for the login timeout issue in Jira.",
    response: "Ticket created: PROJ-142 'Login Timeout Issue'. I've assigned it to the on-call engineer and marked it as High Priority in Jira."
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    title: "Install the app",
    description: "Download the Dream desktop agent for macOS.",
    icon: Download
  },
  {
    title: "Connect Workplace",
    description: "Connect your Slack workspace securely.",
    icon: Link
  },
  {
    title: "Message",
    description: "Just mention @Dream in any channel to start.",
    icon: Send
  }
];

export const VISIBILITY_ACTIVITIES = [
  { text: "Navigated to salesforce.com", time: "10:42:01 AM" },
  { text: "Clicked 'Opportunities' tab", time: "10:42:03 AM" },
  { text: "Found 'Acme Corp' record", time: "10:42:05 AM" },
  { text: "Updated stage to 'Closed Won'", time: "10:42:08 AM" },
];

export const SECURITY_FEATURES = [
  {
    title: "Local execution only",
    description: "Dream runs entirely on your local machine. No remote code execution.",
    icon: Cpu
  },
  {
    title: "Credentials stay safe",
    description: "Your session cookies and login data never leave your browser environment.",
    icon: Lock
  },
  {
    title: "No third-party access",
    description: "Zero data harvesting. Your business data stays strictly within your control.",
    icon: Shield
  }
];
