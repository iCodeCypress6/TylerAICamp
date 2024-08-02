import { toBase64, uploadFile } from "./aicamp_day3/ai_camp_day3.js";

let input = document.querySelector(".user-input")
let submit = document.querySelector(".submit")


async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
		{
			headers: { Authorization: "Bearer hfJ_maUXyfEfAJjOuVCwqzTJVLvFxArkPCnIP" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}


submit.addEventListener("click", () => {
	if(input.value != ""){
		query({"inputs": input.value}).then(async (response) => {

			let base64 = await toBase64(response)
			let imageURL = await uploadFile(base64)
			console.log(imageURL)
		
			let img = document.createElement('img')
			img.src = imageURL 
			document.body.appendChild(img) 
		});
	}
}); 