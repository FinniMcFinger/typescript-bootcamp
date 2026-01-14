interface HasId {
    id:string
}

interface HasTitle {
    title:string
}

type IntersectionCourse = HasId & HasTitle;

const course:IntersectionCourse = {
    id: "abc",
    title: "Title"
};