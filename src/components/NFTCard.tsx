import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function NFTCard({
  image,
  owner,
  address,
  rarity,
  tokenId,
  mode,
}: {
  image: string;
  owner: string;
  address: string;
  rarity: string;
  tokenId: string;
  mode: string;
}) {
  return (
    <div className="border-[1px] border-[#3c3f41] p-2 rounded-lg font-theme">
      <Image
        src={image}
        width={400}
        height={400}
        alt="logo"
        className="bg-white rounded-lg"
      />
      <p className="text-[#9c9e9e] font-semibold text-sm mt-2 mx-2 text-center">
        by {mode}
      </p>
      <div className="my-2">
        <div className="flex justify-around mx-2">
          <div className="w-full">
            <p className="font-semibold text-center">Token Id</p>
          </div>
          <div className="w-full">
            <p className="font-semibold text-center">Rarity</p>
          </div>
        </div>
        <div className="flex justify-around mx-2">
          <div className="w-full">
            <p className=" text-center">#{tokenId}</p>
          </div>
          <div className="w-full">
            <p className="text-center">{rarity}</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg  bg-[#25272b] text-center  ">
        <div className="flex justify-around ">
          <div
            className="flex justify-center cursor-pointer"
            onClick={() => {
              window.open(`https://sepolia.etherscan.io/address/${address}`);
            }}
          >
            <p className="text-sm font-semibold text-[#9c9e9e] my-2 mr-2">
              Account
            </p>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-[#9c9e9e] text-sm font-normal my-auto"
            />
          </div>
          <div
            className="flex justify-center  cursor-pointer"
            onClick={() => {
              window.open(`https://sepolia.etherscan.io/address/${owner}`);
            }}
          >
            <p className="text-sm font-semibold text-[#9c9e9e] my-2 mr-2">
              Creator
            </p>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-[#9c9e9e] text-sm font-normal my-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
