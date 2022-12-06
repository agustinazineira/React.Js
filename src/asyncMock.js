const notes =[
    {
      id:'1',
      tittle:'New York',
      text:'Salmón, palta y queso'
    },
    {
      id:'2',
      tittle:'Buenos Aires',
      text:'Langostino, palta y queso'
    }
]
  
export const getNotes = () =>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(notes)
      }, 2000)
    })
}

export const getNotesById = () => {
    
}