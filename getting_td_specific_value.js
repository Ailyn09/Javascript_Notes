var Row = document.getElementById("purchase_tr2"); //Table Name
var Cells = Row.getElementsByTagName("td"); //Table Column
var CellValue = (Cells[5].innerText); //Set Number To get Value

if (CellValue="SUCCESS") { //Setting Comparison
     //If Action | Below Sample Action
    document.getElementById('div_reciever').style.display = 'block';            
    document.getElementById('div_dt_recieve').style.display = 'block';
} else {
    //Else Action
}
                
