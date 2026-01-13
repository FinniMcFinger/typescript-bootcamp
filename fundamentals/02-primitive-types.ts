// number
const lessonCount = 10;
const lessonCountExplicit:number = 10;
const total  = lessonCount + 10;

console.log("total: " + total);

// string
const title = "Finni's Bootcamp";
const titleExplicit:string = "Finni's Bootcamp";
const subtitle = "Typescript Ultimate Bootcamp Course On Udemy";

console.log(title + ": " + subtitle);

// boolean
const published = false;
const publishedExplicit:boolean = false;

if (published) {
    console.log("course is published");
} else {
    console.log("course is not published");
}

// template string
const fullTitle = `Full Title - ${title}: ${subtitle}`;

console.log(fullTitle);
console.log(typeof fullTitle);


printCourse(title, subtitle, lessonCount);

function printCourse(title:string, subtitle:string, lessonCount:number) {
    let fullTitle = `${title}: ${subtitle}`;

    console.log(`${fullTitle} - ${lessonCount} ${pluralize(lessonCount, "lesson")}`);
}

function pluralize(factor:number, base:string) {
    if (factor === 1) {
        return base;
    } else {
        return `${base}s`;
    }
}

// objects
let course = {
    title: "The Title",
    subtitle: "Some subtitle here",
    lessonCount: 10
};
let courseExplicit: {
    title:string,
    subtitle:string,
    lessonCount:number
} = {
    title: "The Title",
    subtitle: "Some subtitle here",
    lessonCount: 10
};

// these generate compiler errors
// course = 10;
// course.fullTitle = "";
console.log(`course type - ${typeof course}`);
