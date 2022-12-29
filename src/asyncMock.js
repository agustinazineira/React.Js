const products =[
    {
      id:'1',
      category: 'Roll Clasico',
      title:'New York',
      text:'Salmón, palta y queso',
      price: 2200,
      stock: 15,
      img: '../images/New York.jpg'      
    },
    {
      id:'2',
      category: 'Roll Clasico',
      title:'Buenos Aires',
      text:'Langostino, palta y queso',
      price: 2200,
      stock: 15,
      img: '../images/Buenos Aires.jpg'
    },
    {
      id:'3',
      category: 'Roll Clasico',
      title:'Philadelphia',
      text:'Salmón y queso',
      price: 2100,
      stock: 15,
      img: '../images/Philadelphia.jpg'
    },
    {
      id:'4',
      category: 'Roll Especial',
      title:'Tamago',
      text:'Salmón, ciboulette y queso, con huevo por fuera',
      price: 2400,
      stock: 10,
      img: '../images/Tamago.jpg'
    },
    {
      id:'5',
      category: 'Roll Especial',
      title:'Soul',
      text:'Palmito y salmón, con queso por fuera y praliné de almendras',
      price: 2400,
      stock: 10,
      img: '../images/Soul.jpg'
    },
    {
      id:'6',
      category: 'Roll Especial',
      title:'Placer Real',
      text:'Queso palta y palmito, con salmón por fuera y crocante de batatas',
      price: 2400,
      stock: 10,
      img: '../images/Placer.jpg'
    },
    {
      id:'7',
      category: 'Roll Caliente',
      title:'Hot Mex',
      text:'Queso chedar y salmón, empanado y frito, con guacamole',
      price: 2450,
      stock: 10,
      img: '../images/Hot Mexican.jpg'
    },
    {
      id:'8',
      category: 'Niguiri',
      title:'Niguiri',
      text:'Salmón flambeado con salsa agridulce, sobre bocado de arroz',
      price: 2500,
      stock: 12,
      img: '../images/Niguiri.jpg'
    },
]
  
export const getProducts = () =>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(products)
      }, 500)
    }, 500)
}

export const getProductsByCategory = (categoryId) =>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(products.filter(product => product.category === categoryId))
    }, 500)
  })
}

export const getProductsById = (id) => {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(products.find(product => product.id === id))
    }, 500)
  })
}