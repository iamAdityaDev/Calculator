let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    let eight = document.getElementById("eight");
    let nine = document.getElementById("nine");
    let zero = document.getElementById("zero");
    let dot = document.getElementById("dot");

    let input = document.getElementById("input");
    let output = document.getElementById("output");

    let div = document.getElementById("div");
    let mul = document.getElementById("mul");
    let sub = document.getElementById("sub");
    let add = document.getElementById("add");
    let equal = document.getElementById("equal");
    let per = document.getElementById("per");

    let ac = document.getElementById("ac");
    let de = document.getElementById("de");

    let str_in = "";
    let str_out = "";

    one.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
      } else {
        str_in += "1";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });
    two.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
      } else {
        str_in += "2";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });
    three.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
      } else {
        str_in += "3";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });
    four.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
      } else {
        str_in += "4";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });
    five.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
      } else {
        str_in += "5";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });
    six.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
      } else {
        str_in += "6";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });
    seven.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
      } else {
        str_in += "7";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });
    eight.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
      } else {
        str_in += "8";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });
    nine.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
      } else {
        str_in += "9";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });
    dot.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
      } else {
        str_in += ".";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });

    zero.addEventListener("click", function () {
      if (str_in.length >= 26) 
      {
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
      else
      {
        str_in += "0";
        let temp = str_in.replace(/\*/g, "x");
        if (temp[temp.length - 2] == "/")
        {
            output.innerHTML = "Cannot divide";
            temp = "";
            str_in = "";
        }
        input.innerHTML = temp;
      }
      
    });

    div.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
        output.innerHTML = "input field is full";
      } else {
        str_in += "/";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });
    mul.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
        output.innerHTML = "input field is full";
      } else {
        str_in += "*";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });
    add.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
        output.innerHTML = "input field is full";
      } else {
        str_in += "+";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });
    sub.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
        output.innerHTML = "input field is full";
      } else {
        str_in += "-";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });
    per.addEventListener("click", function () {
      if (str_in.length >= 26) {
        let temp = str_in.replace(/\*/g, "x");
        output.innerHTML = "input field is full";
      } else {
        str_in += "%";
        let temp = str_in.replace(/\*/g, "x");
        input.innerHTML = temp;
      }
    });

    equal.addEventListener("click", function () {
      if (str_in[str_in.length - 1] == "+" || "-" || "/" || "*" || "%") {
        output.innerHTML = "invalid input";
      }
      str_out = eval(str_in);
      output.innerHTML = str_out;
    });

    ac.addEventListener("click", function () {
      str_in = "";
      let temp = str_in.replace(/\*/g, "x");
      input.innerHTML = temp;
      output.innerHTML = "";
    });
    de.addEventListener("click", function () {
      str_in = str_in.slice(0, str_in.length - 1);
      let temp = str_in.replace(/\*/g, "x");
      input.innerHTML = temp;
    });