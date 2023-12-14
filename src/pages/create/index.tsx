import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Create() {
  const [prompt, setPrompt] = useState("");
  return (
    <Layout>
      <div>
        <div className="flex justify-center h-[90vh] items-center ">
          <div className="w-[75%]">
            <p className="text-6xl font-bold mb-8">Choose Blockchain</p>
            <p className="text-2xl font-bold text-[#9c9e9e]">
              Choose the most suitable blockchain for your needs.
            </p>
            <p className="text-2xl font-bold text-[#9c9e9e]">
              Log in your wallet to craft CraftNFTs. 🪄
            </p>
            <div className="grid grid-cols-2 gap-3 mt-10">
              <Link
                href={`/create/pego`}
                className="border-[2px] border-[#3c3f41] flex flex-col justify-center items-center h-[300px] rounded-2xl"
              >
                <Image
                  src="/tech/pego.png"
                  width={100}
                  height={100}
                  alt="pego"
                />
                <p className="text-white font-bold text-2xl mt-4">
                  PEGO Mainnet
                </p>
              </Link>

              <div className="border-[2px] border-[#3c3f41] flex flex-col justify-center items-center h-[300px] rounded-2xl cursor-default">
                <Image
                  src="/tech/polygon.png"
                  width={100}
                  height={100}
                  alt="mumbai"
                />
                <p className="text-[#9c9e9e] font-bold text-2xl mt-4">
                  Other Blockchains
                </p>
                <p className="text-[#3c3f41] font-semibold">Coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
