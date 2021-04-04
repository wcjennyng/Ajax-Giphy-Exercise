const $searchBox = $('#search-box')
const $gifs = $('#gifs')

function newGif(response) {
    if (response.data.length) {
        let randomIdx = Math.floor(Math.random() * response.data.length)
    let $col = $("<div>", {class: "col-md-4 col-sm-6 my-3"})
    let $gif = $("<img>", {src: response.data[randomIdx].images.original.url, class: "img-fluid rounded"})
    
    $col.append($gif)
    $gifs.append($col)
    }
}

// form submit, reset search box, make ajax response
$("form").on('submit', async function(e) {
    e.preventDefault();
    let searchItem = $searchBox.val();
    $searchBox.val(''); //resets search box

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {q: searchItem, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}
    });
    newGif(res.data)
})

//removes gif
$("#remove").on('click', function(){
    $gifs.empty();
});