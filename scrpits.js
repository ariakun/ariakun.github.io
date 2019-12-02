function add_value() {
    let input = document.getElementById("input");
    let inputValue = input.value; // mengambil nilai input

    if (inputValue !== "") {
      let span = document.createElement("SPAN"); // membuat element Span <span></span>
      span.className = "contentSpan";  // memberi element Span sebuah class <span class="contentSpan"></span>
      span.innerHTML = inputValue;  // memberi isi text ke dalam element Span <span class="content_span">asdasdadads</span>
    

      let spanClose = document.createElement("SPAN");
      spanClose.className = "contentSpanClose";
      spanClose.innerHTML = "\u00D7";
      span.appendChild(spanClose);

      spanClose.addEventListener("click", function () {
        span.classList.add("contentNone");

      });

      let content = document.getElementById("content");
      content.appendChild(span);
    
    }

    input.value = "";

}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 && input.value !== "") {
        event.preventDefault();

        document.getElementById("tombolInput").click();
    }
});

