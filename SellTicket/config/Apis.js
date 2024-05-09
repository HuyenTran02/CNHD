import axios from "axios";

const HOST = "https://bichhuyen02.pythonanywhere.com"
// const HOST = "http://127.0.0.1:8000"

export const endpoints = {
    'categories': "/categories/",
    'bStation': "/bStation/",
    'buses': "/buses/",
    'chair': (car_id) => `/cars/${car_id}/chair/`,
    'trip': "/trips/",
    'tripDetail': (trip_id) => `/trip/${trip_id}/`,
    'login': '/o/token/',
    'bookTicket_onl': (trip_id) => `/trip/${trip_id}/ticket-onl`,
 
    'lessons': (course_Id) => `/courses/${course_Id}/lessons/`,
    'lessonDetail': (lessonId) => `/lessons/${lessonId}/`,

    
    'login': '/o/token/',
    'current_user': '/user/current-user/',
    'register': '/user/',
    'comments': (lessonId) => `/lessons/${lessonId}/comments/`
}

export const authApi = (accessToken) => axios.create({
    baseURL: HOST,
    headers: {
        "Authorization": `Bearer ${accessToken}`
    }
})

export default axios.create({
    baseURL: HOST
})