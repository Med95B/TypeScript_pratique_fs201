//A======================================================
const Url='https://jsonplaceholder.typicode.com/users/1'

async function fetchData(url:string):Promise<unknown>{

        const resp=await fetch(url)
        if(!resp.ok){
            throw new Error('network response was not ok')
        }
        return resp.json()
}
//console.log(fetchData(Url));
 
//B======================================================
import axios from "axios"

async function getData(url:string):Promise<unknown>{

    try {
        const response = await axios.get(url);
        const data:unknown=response.data

        if (typeof data==='object' && data!==null){

            return data;
            
        }

    } catch (error) {
        console.error("Error fetching data:", error)
    }
}


