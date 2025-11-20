import Image from "next/image";

const Logo = ({ isColored = false }: { isColored?: boolean }) => {
  return (
    <>
      {isColored ? (
        <Image
          src="/icons/shopdz-colored-logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
      ) : (
        <Image
          src="/icons/shopdz-white-logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
      )}
    </>
  );
};

export default Logo;
