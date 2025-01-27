"use strict";
const searchInput = document.getElementById("search-input");
const resultsList = document.getElementById("results");
searchInput?.addEventListener("keyup", async (event) => {
    const query = searchInput.value.trim();
    if (query.length === 0) {
        resultsList.innerHTML = "";
        return;
    }
    try {
        const res = await fetch(`http://localhost:3001/?query=${encodeURIComponent(query)}`);
        console.log(res);
        const data = await res.json();
        if (Array.isArray(data)) {
            resultsList.innerHTML = data
                .map((comment) => `<li>${comment.name}</li>`)
                .join("");
        }
        else {
            resultsList.innerHTML = "<li>No results found</li>";
        }
    }
    catch (error) {
        console.error("Error fetching data:", error);
        resultsList.innerHTML = "<li>Error fetching results</li>";
    }
});
