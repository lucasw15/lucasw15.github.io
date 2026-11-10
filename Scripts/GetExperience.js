import { ConfigSingleton } from "./GetProfile.js";
// Usage
(async () => {
  try {
      const configInstance = await ConfigSingleton.getInstance();
      updateHTML(configInstance.getConfig());
    } catch (error) {
      console.error('Error:', error);
    }
})();
  
function updateHTML(configData) {
  document.querySelector("#pfThumbnail").src = "Content/".concat(configData.About.Thumbnail);
  document.querySelector("#pfLinkedIn").href = configData.Contact.LinkedIn;
  document.querySelector("#pfGitHub").href = configData.Contact.GitHub;

  // Page Detail
  document.querySelector("#pfExpText").innerHTML = configData.Experience.ExperienceText;

  document.querySelector("#expEdu>h2").innerHTML = "Education";
  document.querySelector("#pfSchool").innerHTML = configData.Experience.School;
  document.querySelector("#pfMajor").innerHTML = configData.Experience.Major;
  document.querySelector("#pfGraduation").innerHTML = configData.Experience.Graduation;
  document.querySelector("#pfEducationText").innerHTML = configData.Experience.EducationText;

  document.querySelector("#expEmp>h2").innerHTML = "Employment";
  document.querySelector("#pfEmployment").innerHTML = configData.Experience.Employment;
  document.querySelector("#pfRole").innerHTML = configData.Experience.Role;
  document.querySelector("#pfEmploymentText").innerHTML = configData.Experience.EmploymentText;

  document.querySelector("#expSkills>h2").innerHTML = "Skills";
  document.querySelector("#pfSkills").innerHTML = configData.Experience.Skills.join(", ");
  document.querySelector("#pfSkillsText").innerHTML = configData.Experience.SkillsText;

  // Hide any line or section that has no content
  document.querySelectorAll(".experience-section p").forEach(p => {
    if (!p.innerHTML.trim()) p.style.display = "none";
  });
  if (!configData.Experience.ExperienceText) document.querySelector("#experience-info").style.display = "none";
  if (!configData.Experience.Employment) document.querySelector("#expEmp").style.display = "none";
  if (!configData.Experience.Skills.length && !configData.Experience.SkillsText) document.querySelector("#expSkills").style.display = "none";

  // document.querySelector("#pfResume").href = "./Content/".concat(configData.Experience.Resume);
  // Hide any line or section that has no content
  document.querySelectorAll(".experience-section p").forEach(p => {
    if (!p.innerHTML.trim()) p.style.display = "none";
  });
  if (!configData.Experience.ExperienceText) document.querySelector("#experience-info").style.display = "none";
  if (!configData.Experience.Employment) document.querySelector("#expEmp").style.display = "none";
  if (!configData.Experience.Skills.length && !configData.Experience.SkillsText) document.querySelector("#expSkills").style.display = "none";

  // document.querySelector("#pfResume").href = "./Content/resume.pdf";
  document.querySelector("#pfResume").onclick = () => {
    let url = "./Content/".concat(configData.Experience.Resume);
    window.open(url, "_blank");
  }

}