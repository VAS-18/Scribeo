import Image from "next/image";

const LoaderSmall = () => {
    return ( <div>
        <div className="animate-spin"><Image src={"/spinner-svgrepo-com.svg"} alt="Spinner" height={20} width={20}/></div>
    </div> );
}
 
export default LoaderSmall;