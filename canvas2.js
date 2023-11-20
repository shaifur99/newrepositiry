   // Get the canvas element and its context
   const canvas = document.getElementById('buildingCanvas');
   const ctx = canvas.getContext('2d');

   // Set building dimensions and colors
   const buildingWidth = 150;
   const buildingHeight = 300;
   const buildingColor = "green"; // Gray color
   const roofColor = '#FF0000'; // Red color

   // Draw the building
   ctx.fillStyle = buildingColor;
   ctx.fillRect((canvas.width - buildingWidth) / 2, canvas.height - buildingHeight, buildingWidth, buildingHeight);

   // Draw the roof
   ctx.beginPath();
   ctx.moveTo(canvas.width / 2 - buildingWidth / 2 - 20, canvas.height - buildingHeight);
   ctx.lineTo(canvas.width / 2 + buildingWidth / 2 + 20, canvas.height - buildingHeight);
   ctx.lineTo(canvas.width / 2, canvas.height - buildingHeight - 50);
   ctx.closePath();
   ctx.fillStyle = roofColor;
   ctx.fill();


   