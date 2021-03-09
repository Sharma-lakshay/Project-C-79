var menu_pizza=[
    "1. Margherita Pizza"
    ,
    "2. Pepperoni Pizza"
    ,
    "3. BBQ Chicken Pizza"
    ,
    "4. Veg. Pizza"
    ,
    "5. Paneer Tikka Pizza"
    
]

function get_menu(){
  document.getElementById("menu").innerHTML= menu_pizza[0] + "<br>" + menu_pizza[1] + "<br>" + menu_pizza[2] + "<br>" + menu_pizza[3] + "<br>" + menu_pizza[4];
}

function add_item(){
  new_pizza= document.getElementById("add_item").value;
  menu_pizza.push("<br>" + new_pizza);
  document.getElementById("menu").innerHTML=menu_pizza[0] + "<br>" + menu_pizza[1] + "<br>" + menu_pizza[2] + "<br>" + menu_pizza[3] + "<br>" + menu_pizza[4] +  menu_pizza[5];
  document.getElementById("rec").innerHTML= new_pizza + " is recommended. Please check it in the menu"
}