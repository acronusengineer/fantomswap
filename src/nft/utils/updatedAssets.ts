import { BigNumber } from "@ethersproject/bignumber";
import { UpdatedGenieAsset } from "nft/types";

export const updatedAssetPriceDifference = (asset: UpdatedGenieAsset) => {
  if (!asset.updatedPriceInfo) return BigNumber.from(0);
  return BigNumber.from(asset.updatedPriceInfo.ETHPrice).sub(
    BigNumber.from(asset.priceInfo.ETHPrice)
  );
};

export const sortUpdatedAssets = (
  x: UpdatedGenieAsset,
  y: UpdatedGenieAsset
) => {
  return updatedAssetPriceDifference(x).gt(updatedAssetPriceDifference(y))
    ? -1
    : 1;
};

export const getTotalNftValue = (nfts: UpdatedGenieAsset[]): BigNumber => {
  return (
    nfts &&
    nfts.reduce(
      (ethTotal, nft) =>
        ethTotal.add(
          BigNumber.from(
            nft.updatedPriceInfo
              ? nft.updatedPriceInfo.ETHPrice
              : nft.priceInfo.ETHPrice
          )
        ),
      BigNumber.from(0)
    )
  );
};
