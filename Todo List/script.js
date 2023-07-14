let btn = document.getElementById("deleteBtn")
sumbit.addEventListener("click",(e) =>{
    e.preventDefault();
    titleCon = title.value
    descCon = desc.value
    localStorage.setItem("Todo",JSON.stringify([title,desc]))
    console.log(e);

    let tbody = document.getElementsByTagName('tbody')[0]
    let tr = document.createElement("tr")
    tr.setAttribute("id","delTr");
    tr.innerHTML = `
    
      <td>${titleCon}</td>
      <td>${descCon}</td>
    
    `
    tbody.appendChild(tr)
    title.value = ""
    desc.value = ""
})
btn.addEventListener("click",(e) =>{
    e.preventDefault();
    let rowDel = document.getElementById("delTr")
    let parentRow = rowDel.parentNode
    parentRow.removeChild(rowDel)
    localStorage.removeItem("Todo")
    tr.innerHTML = ""
    
})