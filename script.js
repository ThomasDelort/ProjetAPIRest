const req = new XMLHttpRequest();
const method = 'GET';
const url = "https://jsonplaceholder.typicode.com/posts"

req.open(method, url);

req.onreadystatechange = function (event) {
    if (this.readyState === 4) {
        if (this.status === 200) {
            tableau = JSON.parse(this.responseText);
            console.log(tableau);
            for (ligne of tableau) {
                var node = document.createElement("p"); // Create a <li> node
                var textnode = document.createTextNode(`${ligne.id} - ${ligne.body}`); // Create a text node
                node.appendChild(textnode); // Append the text to <li>
                document.body.appendChild(node); // Append <li> to <ul> with id="myList"
            }

        } else {
            console.log(this.status)
        }
    }
}

req.send();