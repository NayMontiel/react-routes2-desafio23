import pikachu from '../assets/img/pikachu.png'

const Home = () => {
  return (
    <div>
    <h1 className='animate__animated animate__backInLeft'>Bienvenido maestro pokemón</h1>
    <img src={pikachu} className='pikachu mt-4 animate__animated animate__shakeY'/>
</div>
  )
}

export default Home