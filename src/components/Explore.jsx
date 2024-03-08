export const Explore = ({onSubmit, valorInput, onChange}) => {
    return (
      
      <form className='form-explore' onSubmit={onSubmit}>
          <input className= 'explore' value= {valorInput} onChange={onChange}>    
          </input>
      </form>
    )
  }