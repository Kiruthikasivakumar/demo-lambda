// Promise.all()
const fetchUserData=() =>{
    return new Promise(resolve => setTimeout(() => resolve("User data fetched"), 2000));
  }
  
  const fetchPosts=()=> {
    return new Promise(resolve => setTimeout(() => resolve("Posts fetched"), 3000));
  }
  
  const fetchData= async ()=> {
    try {
      
      const [userData, posts] = await Promise.all([fetchUserData(), fetchPosts()]);
      
      console.log(userData);  
      console.log(posts);     
    } catch (error) {
      console.log(error);  
    }
  }
  
  fetchData();
  