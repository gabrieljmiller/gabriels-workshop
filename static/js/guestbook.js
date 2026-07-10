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


loadEntries();