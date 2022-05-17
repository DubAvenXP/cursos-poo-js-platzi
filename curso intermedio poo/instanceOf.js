function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}

function LearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    this.name = name;
    this.courses = courses;

}

function Student({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {

    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };

    if (isArray(learningPaths)) {
        this.learningPaths = [];
        for (let learningPath of learningPaths) {
            if (learningPath instanceof LearningPath) {
                this.learningPaths.push(learningPath);
            }
        }
    }


}

const escuelaDesarrolloWeb = new LearningPath({ name: "Escuela de Desarrollo Web" });
const escuelaDataScience = new LearningPath({ name: "Escuela de Data Science" });
const juan = new Student({
    email: "juanito@frijoles.co",
    name: "Juanito",
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaDataScience,
    ],
});