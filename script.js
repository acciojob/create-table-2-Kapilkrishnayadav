 function createTable()
            {
                let n=prompt("Input number of rows");
                let m=prompt("Input number of columns");
                
                let str="";
                 for(let i=0;i<n;i++)
                {
                    let tr=document.createElement("tr");
                    for(let j=0;j<m;j++)
                    {
                       let td= document.createElement("td")
                       td.innerText=`Row-${i} Column-${j}`
                       tr.appendChild(td);

                    }
                    document.getElementById("myTable").appendChild(tr);
                }

            }