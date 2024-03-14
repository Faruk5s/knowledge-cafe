import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}= bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-3xl'>
            <h2 className='text-3xl'>{title}</h2>
        </div>
    );
};
Bookmark.proptypes ={
    bookmark: PropTypes.object
}

export default Bookmark;