const formData = {
    email: "",
    message: ""
}

const feedback = document.querySelector(".feedback-form");
const userEmail = document.querySelector("input");
const userMessage = document.querySelector("textarea");

const storageKey = "feedback-form-state";

feedback.addEventListener("input", (event) => {
    if (event.target.name === "email") {
        formData.email = event.target.value.trim();
    }
    if (event.target.name === "message") {
        formData.message = event.target.value.trim();
    }
    localStorage.setItem(storageKey, JSON.stringify(formData));
})

storageInfo();

feedback.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        return alert("Fill please all fields");
    } else {
        console.log(formData);
        feedback.reset();
        localStorage.removeItem(storageKey);
        formData.email = "";
        formData.message = "";
    }
}

function storageInfo() {
    const savedData = localStorage.getItem(storageKey);
    if (!savedData) {
        return;
    }
    const parsedData = JSON.parse(savedData);

    userEmail.value = parsedData.email ?? "";
    userMessage.value = parsedData.message ?? "";

}


