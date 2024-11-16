import './External.css'
import styles from './External.module.css'
const FunctionComp = () => {
    return (
      <div className="border border-primary border-5 my-5 py-5 w-50 ms-3">
        <h1 className={`color fonts`}>External Function</h1>
        <h1 style={{color: 'pink'}}>Internal using Function</h1>
        <h1 className={styles.cl}>Module using Function</h1>
        <h1 className='text-warning'>Bootstrap using Function</h1>
        <h1 className="text-lime-500">Tailwind using function</h1>
      </div>
    );
}

export default FunctionComp;