import {Config} from "./types";

export const griffith: Config = {
    name: "griffith",
    url: "https://griffithfinal.com",
    pageTitle: "Griffith Final Exam Calculator",
    facebookAppId: "1276902305751898",
    ogImage: "https://griffithfinal.com/img/og.png",
    ogDescription: "Easily calculate the required marks for your final exams at Griffith University",
    metaDescription: "Want to know what you need on your final exam? Easily calculate the required marks for your exams at Griffith University with this calculator.",
    appName: "Griffith Final",
    googleAnalyticsId: "UA-105825775-1",
    placeholderCourseCode: "1016MSC",
    disclaimer: "Not affiliated with Griffith University. Always check the course profile.",
    bgColour: "#c02424",
    headerHeight: "240px",
    chartColour: "#c02424",
    themeColour: "#c02424",
    semesters: [
        {id: "2017-2", name: "Trimester 2, 2017"},
        {id: "2018-1", name: "Trimester 1, 2018"},
        {id: "2018-2", name: "Trimester 2, 2018"},
        {id: "2018-3", name: "Trimester 3, 2018"},
        {id: "2019-1", name: "Trimester 1, 2019"},
        {id: "2019-2", name: "Trimester 2, 2019"},
        {id: "2019-3", name: "Trimester 3, 2019"},
        {id: "2020-1", name: "Trimester 1, 2020"},
    ],
    defaultCutoffs: [0, 30, 45, 50, 65, 75, 85],
};
