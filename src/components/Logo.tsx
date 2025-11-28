import Image from "next/image";
import { useRouter } from "next/router";

const Logo = ({ isColored = false }: { isColored?: boolean }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
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
    </div>
  );
};

export default Logo;
