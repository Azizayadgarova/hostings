 // DOM elements
 const numberInput = document.getElementById('numberInput');
 const addButton = document.getElementById('addBtn');
 const subtractButton = document.getElementById('subtractBtn');
 const resultDisplay = document.getElementById('result');

 let currentValue = 0; // Start value for the counter

 // Update the result display function
 function updateResult() {
     resultDisplay.textContent = currentValue;
     if (currentValue > 0) {
         resultDisplay.classList.remove('text-red-500', 'text-gray-800');
         resultDisplay.classList.add('text-green-500');
     } else if (currentValue < 0) {
         resultDisplay.classList.remove('text-green-500', 'text-gray-800');
         resultDisplay.classList.add('text-red-500');
     } else {
         resultDisplay.classList.remove('text-green-500', 'text-red-500');
         resultDisplay.classList.add('text-gray-800');
     }
 }

 // Add event listeners for buttons
 addButton.addEventListener('click', function() {
     const inputValue = parseInt(numberInput.value);
     if (!isNaN(inputValue)) {
         currentValue += inputValue;  // Add input value
         updateResult();  // Update the display
     }
 });

 subtractButton.addEventListener('click', function() {
     const inputValue = parseInt(numberInput.value);
     if (!isNaN(inputValue)) {
         currentValue -= inputValue;  // Subtract input value
         updateResult();  // Update the display
     }
 });