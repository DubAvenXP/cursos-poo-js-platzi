

// class SuperObject {
//     static isObject(subject) {
//         return typeof subject == "object";
//     }

//     static isArray(subject) {
//         return Array.isArray(subject);
//     }

//     static deepCopy(subject) {
//         let copySubject;

//         const subjectIsObject = isObject(subject);
//         const subjectIsArray = isArray(subject);

//         if (subjectIsArray) {
//             copySubject = [];
//         } else if (subjectIsObject) {
//             copySubject = {};
//         } else {
//             return subject;
//         }

//         for (key in subject) {
//             const keyIsObject = isObject(subject[key]);

//             if (keyIsObject) {
//                 copySubject[key] = deepCopy(subject[key]);
//             } else {
//                 if (subjectIsArray) {
//                     copySubject.push(subject[key]);
//                 } else {
//                     copySubject[key] = subject[key];
//                 }
//             }
//         }

//         return copySubject;
//     }
// }

function SuperObject() { }

SuperObject.deepCopy = function (subject) {
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
};
SuperObject.isObject = function (subject) {
    return typeof subject == "object";
};
SuperObject.isArray = function (subject) {
    return Array.isArray(subject);
};

