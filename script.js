function applyStyles(style) {
  let stylesPadre = document.getElementById("grid-container").style;
  let stylesHijo1 = document.getElementById("item1");
  let stylesHijo2 = document.getElementById("item2");
  let stylesHijo3 = document.getElementById("item3");
  let stylesHijo4 = document.getElementById("item4");
  let stylesHijo5 = document.getElementById("item5");
  let showCode = document.getElementById("show-code")
  let hiddenCode = showCode.innerHTML=""
 


  if (style == "grid-template-columns-20") {
    hiddenCode
    stylesPadre.gridTemplateColumns = `repeat(5, 20%)`;
   


  } else if (style == "grid-template-columns-fr") {
    hiddenCode
    stylesPadre.gridTemplateColumns = `1fr 1fr 2fr 2fr 1fr`;
   

  }
  else if (style == "grid-template-columns-fr-repeat") {
    hiddenCode
    stylesPadre.gridTemplateColumns = `repeat(5, 2fr)`;
 

  }

  //GRID-TEMPLATE-ROWS
  else if (style == "grid-template-rows-1fr-2fr-1fr-2fr-1fr") {
    hiddenCode
    stylesPadre.gridTemplateRows = `1fr 2fr 1fr 2fr 1fr`;


  }
  else if (style == "grid-template-rows-auto") {
    hiddenCode
    stylesPadre.gridTemplateRows = `auto`;
  

  }
  else if (style == "grid-template-rows-px") {
    hiddenCode
    stylesPadre.gridTemplateRows = `40px 40px 40px 40px 40px`;
   

  }
  else if (style == "grid-template-rows-repeat-5-40") {
    hiddenCode
    stylesPadre.gridTemplateRows = `repeat(5,40%)`;
  

  }

  else if (style == "grid-template-columns-fit-content") {
    hiddenCode
    stylesPadre.gridTemplateColumns = `fit-content(40%)`;
 

  }  else if (style == "grid-template-areas") {
    hiddenCode
    document.querySelector(".item1").style.gridArea = "menu1";
    document.querySelector(".item2").style.gridArea = "menu2";
    document.querySelector(".item3").style.gridArea = "menu3";
    document.querySelector(".item4").style.gridArea = "menu4";
    document.querySelector(".item5").style.gridArea = "menu5";

    stylesPadre.gridTemplateAreas = `
 "menu3 menu3 menu4 menu4 menu4 menu4"
 "menu1 menu1 menu1 menu1 menu2 menu2"

 "menu5 menu5 menu5 menu5 menu5 menu5"
 
 
 `;
  } else if (style == "grid-template-columns-10") {
    hiddenCode
    stylesPadre.gridTemplateColumns = "10% 10% 10% 10% 60%";
  }else if(style =="gap"){
    hiddenCode

    stylesPadre.gap = "5%";

  }
  else if(style =="grid-column-start"){
  
 
    stylesPadre.gridTemplateColumns = " auto auto auto auto auto";

    stylesHijo1.style.gridColumn ="1/-1"

    stylesHijo2.style.gridColumn ="1/span 2"

    stylesHijo3.style.gridRow ="2/ span 2"
    stylesHijo3.style.gridColumn ="3/span 3"

    stylesHijo4.style.gridColumn ="1/-1"

    stylesHijo5.style.gridColumn ="1/-1"
    


    
let elementStyle1 = window.getComputedStyle(stylesHijo1);
let elementStyle2 = window.getComputedStyle(stylesHijo2);
let elementStyle3 = window.getComputedStyle(stylesHijo3);
let elementStyle4 = window.getComputedStyle(stylesHijo4);
let elementStyle5 = window.getComputedStyle(stylesHijo5);

let gridCol1 = elementStyle1.getPropertyValue('grid-column');
let gridCol2 = elementStyle2.getPropertyValue('grid-column');
let gridCol3 = elementStyle3.getPropertyValue('grid-column');
let gridRow = elementStyle3.getPropertyValue('grid-row');
let gridCol4 = elementStyle4.getPropertyValue('grid-column');
let gridCol5 = elementStyle5.getPropertyValue('grid-column');
 
 
showCode.innerHTML = `
    
    .item-1{

      grid-column: ${gridCol1}
    }
    </br>
    </br>
    .item-2{

      grid-column: ${gridCol2}
    }
    </br>
    </br>
    .item-3{

      grid-column: ${gridCol3};
    
    
      grid-row: ${gridRow}
    }
    </br>
    </br>
    .item-4{

      grid-column: ${gridCol4}
    }
    </br>
    </br>
    .item-5{

      grid-column: ${gridCol5}
    }
    
    `


  }
  else if(style =="row-gap"){
    hiddenCode
    stylesPadre.rowGap = "20px";
 
  

  }
  else if(style =="column-gap"){
    hiddenCode

    stylesPadre.columnGap = "10px";
    stylesPadre.gridTemplateColumns = `repeat(5, 20%)`;

    

  }
  else if(style =="column-gap-20"){
    hiddenCode

    stylesPadre.columnGap = "50px";
    stylesPadre.gridTemplateColumns = `repeat(5, 20%)`;

    

  }
  else if(style =="grid-auto-rows"){
    hiddenCode


    let valueRange = document.getElementById("range").value
    document.getElementById("result").innerHTML=`${valueRange}px`


    
    stylesPadre.gridAutoRows = `${valueRange}px`;
    

  }else if (style =="grid-areas"){
    hiddenCode
 
   
    stylesPadre.gridColumn  ="2/3";
    stylesPadre.gridRow  ="2/3";
  }

  
}

function show(divs) {
  if (divs == "justify-content") {
    document.getElementById("div-jcontent").style.display = "block";
  } else if (divs == "flex-direction") {
    document.getElementById("div-fdirection").style.display = "block";
  } else if (divs == "align-items") {
    document.getElementById("div-aitems").style.display = "block";
  }
}

function cerrar(divs) {
  if (divs == "justify-content") {
    document.getElementById("div-jcontent").style.display = "none";
  } else if (divs == "flex-direction") {
    document.getElementById("div-fdirection").style.display = "none";
  } else if (divs == "align-items") {
    document.getElementById("div-aitems").style.display = "none";
  }
}

/* 
display: grid;
gridTemplateColumns: 20% 20% 20% 20% 20%  ; */
