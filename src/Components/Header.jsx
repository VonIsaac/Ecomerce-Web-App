

const Header = ({ children }) => {
    return (
      <header className="mt-2 py-2 flex justify-center">
        <div className="bg-slate-900 w-2/3 py-4 flex justify-center items-center mx-auto rounded-md">
          {children}
        </div>
      </header>
    );
  };
  
  export default Header;
  