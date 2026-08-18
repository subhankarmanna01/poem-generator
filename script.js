    // Science topic database
    const database = {

      photosynthesis: {

        title: "Photosynthesis",

        def: `The process by which green plants use sunlight to synthesize nutrients from carbon dioxide and water, involving chlorophyll and generating glucose as a product.`,

        poem: `
          Plants use <span class="keyword">sunlight</span> shining bright,<br>
          With <span class="keyword">chlorophyll</span> to catch the light.<br>
          They make <span class="keyword">glucose</span> for their sweet meal,<br>
          That's how they grow, it is so real!
        `
      },

      ohms_law: {

        title: "Ohm's Law",

        def: `A law stating that electric current is proportional to voltage and inversely proportional to resistance.`,

        poem: `
          <span class="keyword">Voltage</span> pushes power through,<br>
          While <span class="keyword">resistance</span> slows what it can do.<br>
          The <span class="keyword">current</span> flows right down the wire,<br>
          Ohm's law controls the electric fire!
        `
      },

      water_cycle: {

        title: "The Water Cycle",

        def: `The continuous movement of water within the Earth and atmosphere, driven by solar energy causing evaporation, condensation, and precipitation.`,

        poem: `
          The sun makes water <span class="keyword">evaporate</span> high,<br>
          To <span class="keyword">condense</span> into clouds up in the sky.<br>
          Then <span class="keyword">precipitation</span> brings the rain,<br>
          And the cycle starts all over again!
        `
      }

    };


    // Get HTML elements
    const generateBtn = document.getElementById("generate-btn");

    const topicSelect = document.getElementById("topic-select");

    const outputArea = document.getElementById("output-area");

    const outTitle = document.getElementById("out-title");

    const outPoem = document.getElementById("out-poem");

    const outDef = document.getElementById("out-def");


    // Generate poem button
    generateBtn.addEventListener("click", function () {

      const selectedValue = topicSelect.value;


      // Check if topic is selected
      if (!selectedValue) {

        alert("Please select a topic first!");

        return;
      }


      // Get selected topic data
      const data = database[selectedValue];


      // Display title
      outTitle.textContent = data.title;


      // Display poem
      outPoem.innerHTML = data.poem;


      // Display definition
      outDef.innerHTML =
        "<strong>Textbook Def:</strong> " + data.def;


      // Show output area
      outputArea.classList.add("visible");

    });