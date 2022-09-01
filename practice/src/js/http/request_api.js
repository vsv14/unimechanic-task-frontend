export async function request_API(urlApi, method='GET'){
    return await fetch(urlApi, {
        method
        
    }).then(response=>response.json())
}