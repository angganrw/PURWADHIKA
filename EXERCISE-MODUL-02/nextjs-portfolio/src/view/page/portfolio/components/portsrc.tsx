import Image from "next/image";
import Link from "next/link";

interface PortoList {
  title: string;
  description: string;
  gambarURL: string;
  linkURL: string;
}

const Portsrc: React.FC<PortoList> = ({
  title,
  description,
  gambarURL,
  linkURL,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-[#414142] rounded-lg shadow-2xl transition-transform transform hover:scale-105">
      <Image
        src={gambarURL}
        alt={title}
        width={256}
        height={256}
        className="mb-4"
      />
      <Link
        href={linkURL}
        className="text-xl font-bold text-white mb-2 hover:underline"
      >
        {title}
      </Link>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
};

export default Portsrc;
