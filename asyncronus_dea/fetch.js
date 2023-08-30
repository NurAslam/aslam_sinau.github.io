// fetch(
//   "https://api.unsplash.com/search/photos?page=1&query=office&client_id=ksg6y7tRFauQjnsjtdiGGEBassnKeCqmEoXJsOo_Clg"
// )
//   .then((response) => response.json())
//   .then((res) => console.log(res));
fetch(
  "https://api.unsplash.com/search/photos?page=1&query=office&client_id=ksg6y7tRFauQjnsjtdiGGEBassnKeCqmEoXJsOo_Clg"
).then((response) => {
  return response.json().then((res) => console.log(res));
});
