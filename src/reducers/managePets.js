export let state;


export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return { ...state, pets: [...state.pets, action.payload] }
    case 'REMOVE_PET':
      let newPets = state.pets.filter(function(pet) {
        return pet.id !== action.payload
      })
      return { ...state, pets: newPets }
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let petListItems = state.pets.map(function(pet) {
    return `<li>${pet.name}</li>`
  }).join('')
  document.getElementById('container').innerHtml = `<ul>${petListItems}</ul>`
}
