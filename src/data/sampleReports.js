// Initial sample data for StepFree application
// These 5 realistic initial reports showcase common accessibility barriers in urban environments.

export const INITIAL_REPORTS = [
  {
    id: "rep-101",
    title: "Blocked footpath near Central Bus Stand",
    reporterName: "Elena Rodriguez",
    reporterEmail: "elena.r@example.org",
    location: "Corner of Market St & 4th Ave, Near Bus Stand 3",
    category: "Blocked Footpath",
    severity: "High",
    status: "Reported",
    date: "Nov 18, 2026",
    description: "Commercial delivery crates, waste bins, and parked electric scooters are completely blocking the designated pedestrian walkway, forcing wheelchair users and seniors with walkers onto the busy vehicle lane.",
    isSample: true
  },
  {
    id: "rep-102",
    title: "Cracked wheelchair ramp with loose handrail",
    reporterName: "David Chen",
    reporterEmail: "david.chen@example.edu",
    location: "City Public Library, West Boulevard Entrance",
    category: "Broken Ramp",
    severity: "High",
    status: "In Review",
    date: "Nov 17, 2026",
    description: "The concrete wheelchair access ramp has cracked severely near the transition plate. The safety handrail on the left side is completely detached, presenting an immediate tipping and falling risk for mobility devices.",
    isSample: true
  },
  {
    id: "rep-103",
    title: "Unmarked construction materials obstructing sidewalk",
    reporterName: "Sarah Jenkins",
    reporterEmail: "s.jenkins@example.com",
    location: "Oakridge Avenue & Pine Road Crossing",
    category: "Construction Obstruction",
    severity: "Medium",
    status: "Reported",
    date: "Nov 19, 2026",
    description: "Piles of uncontained gravel and scaffolding extend across the tactile paving right before the signalized pedestrian crossing, blocking blind pedestrians and parents with baby strollers.",
    isSample: true
  },
  {
    id: "rep-104",
    title: "Steep 6-inch step at community clinic entrance",
    reporterName: "Marcus Thorne",
    reporterEmail: "marcus.t@example.org",
    location: "Sunrise Valley Health Center, Gate 2",
    category: "Inaccessible Entrance",
    severity: "Medium",
    status: "In Review",
    date: "Nov 16, 2026",
    description: "The primary entrance has a 6-inch non-beveled curb without any curb cut, tactile indicator, or portable ramp, preventing independent entrance for wheelchair users seeking medical appointments.",
    isSample: true
  },
  {
    id: "rep-105",
    title: "Eroded and sunken pathway in community park",
    reporterName: "Priya Sharma",
    reporterEmail: "priya.sharma@example.net",
    location: "North Meadow Walking Trail, Greenfield Public Park",
    category: "Damaged Sidewalk",
    severity: "Low",
    status: "Resolved",
    date: "Nov 14, 2026",
    description: "Recent storm drainage overflow eroded the asphalt path surface near the duck pond, creating deep ruts and puddles. The municipal park team has patched the surface and leveled the shoulder with fresh paving.",
    isSample: true
  }
];

export const CATEGORY_OPTIONS = [
  "Blocked Footpath",
  "Broken Ramp",
  "Damaged Sidewalk",
  "Inaccessible Entrance",
  "Construction Obstruction",
  "Missing Accessibility Signage",
  "Other"
];

export const SEVERITY_OPTIONS = ["Low", "Medium", "High"];

export const STATUS_OPTIONS = ["Reported", "In Review", "Resolved"];
