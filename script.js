function analyzeResume() {
    const resumeText = document.getElementById("resumeText").value.toLowerCase();

    const skills = [
        "java",
        "python",
        "javascript",
        "html",
        "css",
        "react",
        "node",
        "express",
        "mongodb",
        "postgresql",
        "docker",
        "git",
        "github",
        "dbms",
        "dsa"
    ];

    let foundSkills = [];
    let missingSkills = [];

    skills.forEach(skill => {
        if (resumeText.includes(skill)) {
            foundSkills.push(skill);
        } else {
            missingSkills.push(skill);
        }
    });

    let score = foundSkills.length * 6;

    if (resumeText.includes("project")) score += 10;
    if (resumeText.includes("internship")) score += 10;
    if (resumeText.includes("certification")) score += 5;
    if (resumeText.includes("github")) score += 5;

    if (score > 100) score = 100;

    document.getElementById("result").innerHTML = `
        <h2>Resume Score: ${score}/100</h2>

        <h3>Skills Found:</h3>
        <p>${foundSkills.length > 0 ? foundSkills.join(", ") : "No major skills found"}</p>

        <h3>Missing Skills:</h3>
        <p>${missingSkills.slice(0, 8).join(", ")}</p>

        <h3>Suggestions:</h3>
        <ul>
            <li>Add project links and GitHub repositories.</li>
            <li>Mention measurable achievements where possible.</li>
            <li>Add relevant technical skills clearly.</li>
            <li>Keep your resume ATS-friendly and concise.</li>
        </ul>
    `;
}
