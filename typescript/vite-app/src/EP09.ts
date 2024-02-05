import axios from "axios"

async function getData(url:string):Promise<unknown>{

    try {
        const response = await axios.get(url);
        const data:unknown=response.data

        if (typeof data==='object' && data!==null && 'name' in data && 'id' in data){

            return (`User id : ${data.id} User name : ${data.name}`);
            
        }else{
            return 'Invalid data format'
        }

    } catch (error) {
        console.error("Error fetching data:", error)
    }
}

export default getData