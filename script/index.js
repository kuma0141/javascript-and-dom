let headings1 = document.getElementsByClassName("bg-main-content")[0];

let tag = document.getElementById("tag-line");

let headings = document.querySelectorAll(".bg-main-content h2");

let collect = `${tag.textContent}\n`;
for (let heading of headings) {
    collect += `${heading.textContent}\n`;
}

alert(collect);

let when_to_launch = headings1.getElementsByClassName("box")[12];

let lastHeadings = when_to_launch.children;

collect = `${lastHeadings[0].textContent}\n`;

let lengthOfHeadings = lastHeadings.length;

for (let count = 1; count < lengthOfHeadings; count++) {
    collect += `${lastHeadings[count].textContent}\n`;
}

alert(collect);
