export function tableLoadData(node, data){

    setThead(node, data);
    LoadTableBody(node, data);

    node.parentElement.parentElement.querySelector('input#search-post-input')?.addEventListener('input', event=>{
            if(event.target.value.length >= 3){
                LoadTableBody(node, filterData(data, event.target.value));
            }else{
                LoadTableBody(node, data);
            }
        });
}

export function setThead(node, data){
    const fields = Object.keys(data[0]);
    const thead = document.createElement('thead');
    const th = node.getElementsByTagName('thead')[0];
    if(th) node.removeChild(th);

    const tr = document.createElement('tr');
    fields.forEach(key=>{
        const th = document.createElement('th');
        const div = document.createElement('div');
        div.textContent = key;
        th.addEventListener('click', event=>{
            if(div.classList.toggle("thead-sort")){
                data = data.sort((a, b)=> {
                    if(typeof a[key] == 'string'){
                        let fa = a[key].toLowerCase(),
                            fb = b[key].toLowerCase();

                        if (fa > fb) {
                            return -1;
                        }
                        if (fa < fb) {
                            return 1;
                        }
                        return 0;
                    }
                    return b[key]-a[key]
                });
            }else{
                data = data.sort((a, b)=> {
                    if(typeof a[key] == 'string'){
                        let fa = a[key].toLowerCase(),
                            fb = b[key].toLowerCase();

                        if (fa < fb) {
                            return -1;
                        }
                        if (fa > fb) {
                            return 1;
                        }
                        return 0;
                    }
                    return a[key]-b[key]
                });
            }
            const searchValue = node.parentElement.parentElement.querySelector('input#search-post-input')?.value;

            const d = searchValue?.length>2?filterData(data, searchValue):data;
            d??=data;
            LoadTableBody(node, d);            
        });
        th.appendChild(div);
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    node.appendChild(thead);
}

export function LoadTableBody(node, data){
    
    const tbody = document.createElement('tbody');
    data.forEach(row=>{
        const tb_row = document.createElement('tr');
        Object.values(row).forEach(ceil=>{
            const td = document.createElement('td');
            td.textContent = ceil;
            tb_row.appendChild(td);
        })
        tbody.appendChild(tb_row);
    })

    const tb = node.getElementsByTagName('tbody')[0];
    if(tb) node.removeChild(tb);
    
    node.appendChild(tbody);
}

function filterData(data, str){
    return data.filter(item=>{
        let f = false;
        for(let value of Object.values(item)){
            f||=value.toString().includes(str);
        }
        return f;
    })
}