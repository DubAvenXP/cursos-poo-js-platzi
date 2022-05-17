function isObject(subject) {
    return typeof subject == "object";
}

function isArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);

        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

// const studentBase = {
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     approvedCourses: undefined,
//     learningPaths: undefined,
//     socialMedia: {
//         facebook: undefined,
//         twitter: undefined,
//         instagram: undefined
//     }
// };


// const juan = deepCopy(studentBase);
// Object.seal(juan);
// Object.isSealed(juan);
// Object.isFrozen(juan);
// juan.name = "Juan";
// juan.email = "juan@email.com";

function requiredParam(param) {
    throw new Error(`Missing required parameter: ${param}`);
}

function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    approvedCourses = [],
    learningPaths = [],
    twitter,
    instagram,
    facebook
} = {}) {

    const private = {
        "_name": name,
    };
    const public = {
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            facebook,
            twitter,
            instagram
        },
        get name() {
            return private._name;
        },
        set name(value) {
            if (value.length !== 0) {
                private._name = value;
            } else {
                console.warn("Name can't be empty");
            }
        }
        // readName() {
        //     return private["_name"];
        // },
        // changeName(newName) {
        //     private["_name"] = newName;
        // }
    };

    // Object.defineProperties(public, {
    //     readName: {
    //         configurable: false,
    //         writable: false
    //     },
    //     changeName: {
    //         configurable: false,
    //         writable: false
    //     }
    // });

    return public;
}

const juan = createStudent({
    name: "Juan",
    email: "juan@email.com",
    age: 20,
    approvedCourses: ["JavaScript", "React"],
    learningPaths: ["React", "Node"],
    twitter: "@juan",
    instagram: "juan",
    facebook: "juan"
});
