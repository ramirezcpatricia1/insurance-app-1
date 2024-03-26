const Layout = ({ children }) => {
  console.log(children);
  return <div className="flex flex-col  mt-20">{children}</div>;
};

export default Layout;
