import lighthouse from "@lighthouse-web3/sdk";
import { WalletContextState } from "@solana/wallet-adapter-react";

export const uploadToIPFS = async (
  imageFile: File,
  name: string,
  description: string,
  symbol: string,
  wallet: WalletContextState
): Promise<string | null> => {
  try {
    const apiKey = import.meta.env.VITE_LIGHTHOUSE_API_KEY;
    console.log("Current API Key:", apiKey); // should not be undefined or null

    if (!wallet.publicKey) throw new Error("Wallet not connected");

    const publicKey = wallet.publicKey.toBase58();

    // Step 1: Upload image
    const imageUpload = await lighthouse.upload([imageFile], apiKey);

    const imageCID = imageUpload.data.Hash;
    const imageUrl = `https://gateway.lighthouse.storage/ipfs/${imageCID}`;

    // Step 2: Build Metaplex-compatible metadata JSON
    const metadata = {
      name,
      symbol,
      description,
      image: imageUrl,
      attributes: [],
      external_url: "",
      properties: {
        files: [
          {
            uri: imageUrl,
            type: imageFile.type || "image/png",
          },
        ],
        category: "image",
        creators: [
          {
            address: publicKey,
            share: 100,
          },
        ],
      },
    };

    // Step 3: Convert metadata to File and upload
    const metadataBlob = new Blob([JSON.stringify(metadata)], {
      type: "application/json",
    });
    const metadataFile = new File([metadataBlob], "metadata.json");

    const metadataUpload = await lighthouse.upload([metadataFile], apiKey);

    const metadataCID = metadataUpload.data.Hash;
    const metadataUrl = `https://gateway.lighthouse.storage/ipfs/${metadataCID}`;

    console.log("✅ Metadata uploaded to:", metadataUrl);

    return metadataUrl;
  } catch (error) {
    console.error("❌ Error uploading to IPFS:", error);
    return null;
  }
};
