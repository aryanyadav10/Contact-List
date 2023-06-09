let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup',filterNames);

function filterNames() {
    //Get values of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    //Get names ul
    let ul = document.getElementById('names');
    //Get li from ul
    let li = ul.querySelectorAll('li.collection-item');
    //Loop through collection item li
    for(let i=0;i<li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        //if matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
           li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
    }   
}