import Image from "next/image";

const Loader = () => {
  return (
    <div>
      <Image src={"/3-dots-bounce.svg"} height={30} width={30} alt="Loader" />
    </div>
  );
};

export default Loader;
