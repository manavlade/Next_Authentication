const AuthLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <div className="h-full justify-center flex items-center text-2xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400 to to-blue-700" >
                {children}
            </div>
        </>
    )
}
export default AuthLayout;