import profile from '../../images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 max-w-7xl mx-auto border-b-2'>
               <h1 className='text text-6xl text-right '>Knowledge-Cafe-React</h1>
               <img src={profile} alt="" />
        </header>
    );
};

export default Header;