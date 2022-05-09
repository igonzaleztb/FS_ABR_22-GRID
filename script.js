function applyStyles(style) {
  let stylesPadre =  document.getElementById("grid-container").style;

  if (style == "grid-template-columns-20") {

    stylesPadre.gridTemplateColumns = "20% 20% 20% 20% 20%";
    

 

  }else if (style == "grid-template-areas") {
  
 
    document.querySelector(".item1").style.gridArea = "menu1"
    document.querySelector(".item2").style.gridArea = "menu2"
    document.querySelector(".item3").style.gridArea = "menu3"
    document.querySelector(".item4").style.gridArea = "menu4"
    document.querySelector(".item5").style.gridArea = "menu5"


 stylesPadre.gridTemplateAreas = `
 "menu3 menu3 menu3 menu4 menu4 menu4"
 "menu1 menu1 menu1 menu1 menu2 menu2"

 "menu5 menu5 menu5 menu5 menu5 menu5"
 
 
 `
 
  }else if(style == "grid-template-columns-10"){
    stylesPadre.gridTemplateColumns = "10% 10% 10% 10% 60%";

  }
  
  /*  else if (style == "justify-content-flex-start") {
    stylesPadre.justifyContent = "flex-start";
    document.getElementById("result").innerHTML= "flex-start"

  } else if (style == "justify-content-flex-end") {
    stylesPadre.justifyContent = "flex-end";
    document.getElementById("result").innerHTML= "flex-end"

  } else if (style == "justify-content-space-evenly") {
    stylesPadre.justifyContent = "space-evenly";
    document.getElementById("result").innerHTML= "space-evenly"
  } else if (style == "justify-content-space-between") {
    stylesPadre.justifyContent = "space-between";
    document.getElementById("result").innerHTML= "space-between"

  } else if (style == "justify-content-space-around") {
    stylesPadre.justifyContent = "space-around";
    document.getElementById("result").innerHTML= "space-around"

  } */
  ///FLEX DIRECTION
/*   else if (style == "flex-direction-row") {
    stylesPadre.flexDirection = "row";
    document.getElementById("result").innerHTML= "row"

  } else if (style == "flex-direction-row-reverse") {
    stylesPadre.flexDirection = "row-reverse";
    document.getElementById("result").innerHTML= "row-reverse"

  } else if (style == "flex-direction-column") {
    stylesPadre.flexDirection = "column";
    document.getElementById("result").innerHTML= "column"

  } else if (style == "flex-direction-column-reverse") {
    stylesPadre.flexDirection = "column-reverse";
    document.getElementById("result").innerHTML= "column-reverse"

  } */
  ///ALIGN ITEMS
  /* else if (style == "align-items-center") {
    stylesPadre.alignItems = "center";
    document.getElementById("result").innerHTML= "center"

  } else if (style == "align-items-flex-start") {
    stylesPadre.alignItems = "flex-start";
    document.getElementById("result").innerHTML= "flex-start"

  } else if (style == "align-items-flex-end") {
    stylesPadre.alignItems = "flex-end";
    document.getElementById("result").innerHTML= "flex-end"

  } else if (style == "align-items-stretch") {
    stylesPadre.alignItems = "stretch";
    document.getElementById("result").innerHTML= "stretch"

  } else if (style == "align-items-baseline") {
    stylesPadre.alignItems = "baseline";
    document.getElementById("result").innerHTML= "baseline"

  } */
}


 

function show(divs){

    if(divs =="justify-content"){

        document.getElementById("div-jcontent").style.display="block"
    }
    else  if(divs =="flex-direction"){

        document.getElementById("div-fdirection").style.display="block"
    }
    else  if(divs =="align-items"){

        document.getElementById("div-aitems").style.display="block"
    }


}


 

function cerrar (divs){


    if(divs =="justify-content"){

        document.getElementById("div-jcontent").style.display="none"
    }
    else  if(divs =="flex-direction"){

        document.getElementById("div-fdirection").style.display="none"
    }
    else  if(divs =="align-items"){

        document.getElementById("div-aitems").style.display="none"
    }
   
}

/* 
display: grid;
gridTemplateColumns: 20% 20% 20% 20% 20%  ; */