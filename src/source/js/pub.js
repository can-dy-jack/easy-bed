// node
const imagesShowArea = document.querySelector("images-show-area");


// sm.ms
function smms() {
    fetch("https://sm.ms/api/v2/upload_history", {
        method: 'GET',
        headers: {
            // my api token for test
            "Authorization": "token dxNiJTyFwrfwGBAzZU5sviy36TXByy4S",
            "Access-Control-Allow-Origin": "*"
        }
    })
        .then(response => response.json())
        .then(result => {
            imgs = result.data;
            for(let i = 0;i<imgs.length;i++) {
                const img = document.createElement("img");
                img.src = imgs[i].url;
                img.alt = imgs[i].filename;
                imagesShowArea.append(img);
            }
        })
        .catch(error => console.log('error', error));
}
