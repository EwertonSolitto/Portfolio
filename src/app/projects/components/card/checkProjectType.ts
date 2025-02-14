import ProjectType from "@/models/types/ProjectType";

export default function checkProjectType(type: string): type is ProjectType {
  return type === "Front-end" || type === "Back-end" || type === "Fullstack" || type === "Mobile"
}