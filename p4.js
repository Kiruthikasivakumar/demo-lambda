const order = {
    orderId: 123,
    customer: {
      name: 'John Doe',
      address: {
        street: '456 Elm St',
        city: 'Boston',
        country: 'USA'
      }
    },
    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 }
    ]
  };
  
  const { orderId='0', customer: { name: customerName='', address: { street='', city='' }={} }={}, items:[{quantity='0'}={}]=[] } = order|| {};
  
  console.log(orderId);       
  console.log(customerName);   
  console.log(street);         
  console.log(city);  
  console.log(quantity);   
  