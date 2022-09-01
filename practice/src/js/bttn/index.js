import { createModalPartnership } from "../../common/components/modal/modal";
import { tableLoadData } from "../../common/components/table/table";
import { request_API } from "../http/request_api";

const bttn_addPartner = document.getElementById('bttn_add-partner');
bttn_addPartner.addEventListener('click', event=>{
    document.body.style.overflowY = 'hidden';
    createModalPartnership();
});


const bttn_LoadPosts = document.getElementById('bttn_load-posts');
bttn_LoadPosts.addEventListener('click', event=>{
    const parent = bttn_LoadPosts.parentElement;

    request_API('https://jsonplaceholder.typicode.com/posts?_limit=50')
        .then(posts=>{
            tableLoadData(parent.querySelector('table#table-posts'), posts);
        });
});