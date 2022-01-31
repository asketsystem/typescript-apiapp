import './Header.css';

interface IHeaderProps {

}

const Header: React.FunctionComponent<IHeaderProps> = () => {
    return (
        <div className='navbar'>
            <h3>React TypeScript Api</h3>
        </div>
    );
};

export default Header;