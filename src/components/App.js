import React, { useEffect, useRef } from 'react';

const App = () => {
    const svgContainerRef = useRef();

  useEffect(() => {
    // Fetch the SVG from a file and load it into the div with id="svg-container"
    fetch('/assets/My_License2.svg')
      .then(response => response.text())
      .then(svgString => {
        svgContainerRef.current.innerHTML = svgString;

        // Access the embedded SVG element
        const svgElement = svgContainerRef.current.querySelector('svg');

        // Function to update SVG text based on id
         const updateTextById = (id, newText) => {
            const element = svgElement.getElementById(id);
            if (element) element.textContent = newText;
          };
          //Update the SVG text Fields
          updateTextById('textFNLN', 'DOW JOHN');
          updateTextById('textStreetAddress', '1273 TALL PINE AVE OSHAWA ON, L2V 1T6');
          updateTextById('textNumber', 'D 1023-7633-82292');
          updateTextById('textExpiryON', '2029/01/23');
          updateTextById('textIssueDate', '2023/10/29');
          updateTextById('ReferenceNumber', 'D912341003');
          updateTextById('textHeight', '165 cm');
          updateTextById('textGender', 'M');
          updateTextById('textCategory', 'G1');
          updateTextById('textDOB', '1999/10/29');
        })
        .catch(error => {
            console.error("Error fetching SVG:", error);
        });
        },[] );

        return(
            <div ref={svgContainerRef}>
                {/* SVG will be injected here */}
            </div>
        );
    };   
    export default App;


