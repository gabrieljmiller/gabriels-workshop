const api = "https://guestbook.gabrieljmiller.workers.dev/";


async function loadEntries() {

    const container = document.getElementById("entries");

    container.innerHTML = "Loading...";

    const response = await fetch(api);

    const entries = await response.json();

    container.innerHTML = "";


    entries.forEach(entry => {

        const div = document.createElement("div");

        div.className = "guestbook-entry";


        const date = new Date(entry.created);


        div.innerHTML = `
            <strong></strong>
            <small></small>
            <p></p>
        `;


        div.querySelector("strong").textContent = entry.name;

        div.querySelector("small").textContent =
            date.toLocaleString();

        div.querySelector("p").textContent =
            entry.message;


        container.appendChild(div);

    });

}


// Submit a new guestbook entry
document
.getElementById("guestbook-form")
.addEventListener("submit", async function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const response = await fetch(api, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: name,
            message: message
        })

    });


    if (response.ok) {

        document.getElementById("status").textContent =
            "Thanks for signing!";

        this.reset();

        loadEntries();

    } else {

        document.getElementById("status").textContent =
            "Something went wrong.";

        console.log(await response.text());

    }

});


loadEntries();