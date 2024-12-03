
let fetchData=()=> {
    return new Promise((resolve, reject) => {
      const success = true; 
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Error fetching data!");
        }
      }, 2000);
    });
  }
  
  
  fetchData()
    .then(result => {
      console.log(result); 
    })
    .catch(error => {
      console.log(error);   
    });
  
    //using async await

    
const fetchhData= async ()=> {
    const success = true; 
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Error fetching data!");
        }
      }, 2000);
    });
  }
  
 
  const fetchDataAsync= async ()=> {
    try {
      const result = await fetchhData(); 
      console.log(result);  
    } catch (error) {
      console.log(error);   
    }
  }
  
  fetchDataAsync();
  