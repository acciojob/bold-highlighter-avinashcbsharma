function highlight() {
    var boldElements = document.getElementById('paragraph').querySelectorAll('strong');
    
	// Add a class to each <strong> element to change its color to green
    boldElements.forEach(function(element) {
       element.classList.add('highlighted');
     });
}


function returnNormal() {
          // Get all <strong> elements within the paragraph
          var boldElements = document.getElementById('paragraph').querySelectorAll('strong');

        // Remove the class from each <strong> element to revert its color back to black
         boldElements.forEach(function(element) {
              element.classList.remove('highlighted');
         });
}
