import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className='px-4 hover:bg-slate-700 hover:text-white rounded-lg'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link;