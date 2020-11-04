fetch('https://api.giphy.com/v1/gifs/random?api_key=2bfK2NN1yjPRMWseYYbgLQwM3Wy9g9YX')
    .then((response) => response.json())
    .then((json) => createGifhs(json.data))

let root = document.querySelector("#root");
// функция, которая принимает объект json, отрисовывает там fixed_height_downsampled_url гифку
function createGifhs(obj){
    // деструктурализация
    // let {fixed_height_downsampled_url} = obj;
    root.insertAdjacentHTML("afterbegin", `<img 
   src=${obj.fixed_height_downsampled_url}>`)
}
