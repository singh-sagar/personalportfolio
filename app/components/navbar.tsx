export default function Navbar(){
    return(
      <nav className="flex justify-center items-center bg-black h-[100px] w-screen">
        {/* justify-between makes the first child on left and rest on right*/ }
        <div className="h-full max-w-6xl w-full bg-red-400 flex justify-between items-center px-20">
            <div className="font-bold text-black text-4xl font-stretch-extra-expanded">Sagar Singh</div>
            {/* gap gives equal gaps between child nodes*/ }
            <ul className="flex gap-6"  >
                <a className="text-white text-xl bg-black rounded-lg px-2" href="/">Home</a>
                <a className="text-white text-xl bg-black rounded-lg px-2" href="https://github.com/singh-sagar">Projects</a>
                <a className="text-white text-xl bg-black rounded-lg px-2" href="https://www.linkedin.com/in/sagar-singh-ou/">Social</a>
                <a className="text-white text-xl bg-black rounded-lg px-2" href="">Blog</a>
            </ul>
            
        </div>
      </nav>
    );
}