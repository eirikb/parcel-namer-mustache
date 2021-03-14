// @ts-ignore
import { Namer } from '@parcel/plugin';
import path from 'path';
import nullthrows from 'nullthrows';

export default new Namer({
  name({ bundle, bundleGraph }: any) {
    const bundleGroup = bundleGraph.getBundleGroupsContainingBundle(bundle)[0];
    const entryFilePath = nullthrows(
      bundle
        .getEntryAssets()
        .find((a: any) => a.id === bundleGroup.entryAssetId)
    ).filePath;
    return path.basename(entryFilePath).replace(/\.mustache/i, '');
  },
});
