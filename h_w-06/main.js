let bordElement = document.getElementsByClassName("box");
let counter = 0;
for(let i = 0; i < bordElement.length; i++)
{
    bordElement[i].onclick = () => {
        if(bordElement[i].style.backgroundColor == "" )
        {
            if(counter++ % 2 == 1 )
            {
                bordElement[i].style.backgroundColor = "green";
            }
            else
            {
                bordElement[i].style.backgroundColor = "blue";
            }
        }
    }
}