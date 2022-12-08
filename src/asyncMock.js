const notes =[
    {
      id:'1',
      category: 'Roll Clasico',
      title:'New York',
      text:'Salmón, palta y queso',
      price: 2200,
      pictureUrl: './images/New York.jpg'
    },
    {
      id:'2',
      category: 'Roll Clasico',
      title:'Buenos Aires',
      text:'Langostino, palta y queso',
      price: 2200,
      pictureUrl: './images/Buenos Aires.jpg'
    },
    {
      id:'3',
      category: 'Roll Clasico',
      title:'Philadelphia',
      text:'Salmón y queso',
      price: 2100,
      pictureUrl: './images/New York.jpg'
    },
    {
      id:'4',
      category: 'Roll Especial',
      title:'Tamago',
      text:'Salmón, ciboulette y queso, con huevo por fuera',
      price: 2400,
      pictureUrl: './images/New York.jpg'
    },
    {
      id:'5',
      category: 'Roll Especial',
      title:'Soul',
      text:'Palmito y salmón, con queso por fuera y praliné de almendras',
      price: 2400,
      pictureUrl: './images/New York.jpg'
    },
    {
      id:'6',
      category: 'Roll Especial',
      title:'Placer Real',
      text:'Queso palta y palmito, con salmón por fuera y crocante de batatas',
      price: 2400,
      pictureUrl: './images/New York.jpg'
    },
    {
      id:'7',
      category: 'Roll Caliente',
      title:'Hot Mex',
      text:'Queso chedar y salmón, empanado y frito, con guacamole',
      price: 2450,
      pictureUrl: './images/New York.jpg'
    },
    {
      id:'8',
      category: 'Niguiri',
      title:'Niguiri',
      text:'Salmón flambeado con salsa agridulce, sobre bocado de arroz',
      price: 2500,
      pictureUrl: './images/New York.jpg'
    },
]
  
export const getNotes = () =>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(notes)
      }, 500)
    })
}

export const getNotesByCategory = (categoryId) =>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(notes.filter(note => note.category === categoryId))
    }, 500)
  })
}

export const getNotesById = (id) => {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(notes.find(note => note.id === id))
    }, 500)
  })
}