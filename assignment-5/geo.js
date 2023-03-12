function setTriangleElementValueById(elementId){
    const triangleElement = document.getElementById(elementId);
    // console.log(triangleElement); // add this line to check if triangleElement is null
    const triangleFirstInString = triangleElement.value;
    const triangleFirst= parseInt(triangleFirstInString);
    return triangleFirst;
}

document.getElementById('calculate').addEventListener('click', function() {
    const widths = setTriangleElementValueById('triangle-1');
    console.log(widths);
  });
  