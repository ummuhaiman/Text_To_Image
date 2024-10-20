const token = "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";  // Your token
const inputTXt = document.getElementById("input");
const image = document.getElementById("image");
const button = document.getElementById("btn");

async function query() {
    image.src="/loding.gif"
    const response = await fetch(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
        {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"  // Fixed missing comma
            },
            method: "POST",
            body: JSON.stringify({ "inputs": inputTXt.value })
        }
    );
    const result = await response.blob();
    return result;
}

button.addEventListener('click', async function () {
    query().then((response) => {
        const objectURL = URL.createObjectURL(response);
        image.src = objectURL;
    });
});
