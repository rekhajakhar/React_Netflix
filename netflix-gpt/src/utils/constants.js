
export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const DEFAULT_USER_PHOTO = "https://avatars.githubusercontent.com/u/44399263?s=400&v=4";

export const BACKGROUND_MOVIE_IMAGE = "https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQsqirDLtHJLG_-eW3VZlp8rn8-nCW5bu_ZLqcz6egl8yM1V6noIeSx4uupcAjmNNTNMsLpYRX7NaCVvemvVXzQZ9HSWjFhaz7jv.webp?r=910";

export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODU3NmQ1ODdhZGMyYTEzY2YwMDkzMmZkNWM5Yjc2OCIsIm5iZiI6MTc3MDU0MDQ2MC4yOTIsInN1YiI6IjY5ODg0ZGFjNmIzMzJiOGVlZjVkOGI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xKR8SMtn-N3QNVIJ1zC4V90Jfn3F9jYR-t2g6Zr_tfI'
  }
};

export const MOVIE_POSTER_BASE_URL = "https://image.tmdb.org/t/p/w400";

export const SUPPORTED_LANGUAGE = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "spanish", name: "Spanish"}
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const OPENAI_GROQ_KEY = process.env.REACT_APP_OPENAI_GROQ_KEY;