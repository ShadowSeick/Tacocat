//Controller Function
function startPalindrome() {
    
    let textToCheck = document.getElementById("stringCheckPalindrome").value;
    
    if (textToCheck) {
        let isPalindrome = checkPalindrome(textToCheck);
        displayResultPalindrome(isPalindrome, textToCheck);
    }
    else {
        alert("Enter a String!")
    }
    
}

//Reverse string
function reverseString(text) {
    return text.split("").reverse().join("");
}

//Logic Function
function checkPalindrome(text) {

    let onlyLettersText = text.replace(/[^a-zA-Z]/g, "");
    return reverseString(onlyLettersText) === text;
    
}

//DisplayFunction
function displayResultPalindrome(isPalindrome, text) {

    let placeToShowResult = document.getElementById("result");
    placeToShowResult.innerHTML = "";
    
    //Find and remove result element color class 
    let alertClassColorMatch = /(?:alert-[\w]+)$/;
    let classesInAlert = placeToShowResult.className;
    let alertClassColor = classesInAlert.match(alertClassColorMatch);
    placeToShowResult.classList.remove(alertClassColor);

    let headingResultText = "";

    if (isPalindrome) {
        placeToShowResult.classList.add("alert-success");
        headingResultText = "your text is a palindrome!";
    }
    else {
        placeToShowResult.classList.add("alert-warning");
        headingResultText = "no palindrome here!";
    }

    placeToShowResult.innerHTML += `<h4 class="alert-heading text-uppercase">${headingResultText}</h4> <hr>
                                    <p class="mb-0">Your text reversed is: ${reverseString(text)}</p>`
    placeToShowResult.classList.remove("d-none");
}