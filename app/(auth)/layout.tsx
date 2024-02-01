const AuthLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className=" flex flex-col justify-center py-12 md:py-20 sm:px-6 lg:px-8 w-full md:bg-dot-black/20 relative">
      <div className="absolute pointer-events-none inset-0 items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] hidden md:flex" />
      {children}
    </div>
  );
};

export default AuthLayout;