export const getProjects = async() =>{
    const res = await fetch('http://0.0.0.0:8110/projects',{
      method: 'GET',
    }
    )
    if(res.status===200 | res.status===201){
      var data = await res.json()
    }
    else{
      var data=[];
    }  
    return data
}