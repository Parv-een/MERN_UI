import GradeLevel from "./gradelevel";

export default interface Student {
    firstName: string;
    lastName: string;
    age: number;
    gradeLevel: GradeLevel;
    grades?: number[];
}