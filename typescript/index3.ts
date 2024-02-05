const url='https://jsonplaceholder.typicode.com/users/1'

async function fetchData(url:string):Promise<unknown>{

    const resp=await fetch(url)

    if(!resp.ok){
        throw new Error('Network response was not ok')
    }

    return resp.json()
}

async function handleData(url:string) {
    
    try{
        const data:unknown=await fetchData(url)

        if(typeof data==='object' && data!==null && 'id' in data && 'name' in data){

            console.log(`User ID: ${(data as {id:number}).id}`);
            console.log(`User Name: ${(data as {name:string}).name}`);
            console.log(data);
            
            
        }else{
            console.log('Invalid data format');
            
        }
    }catch(error){

        console.error('Error fetching data :',error);
        
    }
}

handleData(url)