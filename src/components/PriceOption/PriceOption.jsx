import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/Ai';

const PriceOption = ({ option }) => {

    const {name, price, features} = option;

    return (
        <div className='bg-amber-200 m-4 rounded-lg p-6 flex flex-col'>
            <h2>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h4 className='text-3xl my-6'>{name}</h4>
            <div className='flex-grow'>
            {
                features.map((feature, idx) => <p 
                key={idx}
                className='text-left text-xl flex items-center gap-3'
                ><AiFillCheckCircle className='text-blue-600'></AiFillCheckCircle> {feature}</p>)
            }
            </div>
            <button className='bg-green-800 text-white text-2xl font-bold py-4 w-1/2 mx-auto rounded-lg mt-5 hover:bg-green-950'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;