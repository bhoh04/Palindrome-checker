document.getElementById('check-btn').addEventListener('click', function() {
    var userInput = document.getElementById('text-input').value;
    var resultDiv = document.getElementById('result');
    
    
    if (userInput.trim() === '') {
        alert('Please input a value');
        return;
    }
    
    
    function cleanString(str) {
        return str.replace(/[\W_]/g, '').toLowerCase();
    }
    
    
    function isPalindrome(str) {
        var cleanStr = cleanString(str);
        var reversedStr = cleanStr.split('').reverse().join('');
        return cleanStr === reversedStr;
    }
    
    
    if (isPalindrome(userInput)) {
        resultDiv.textContent = userInput + " is a palindrome";
    } else {
        resultDiv.textContent = userInput + " is not a palindrome";
    }
});