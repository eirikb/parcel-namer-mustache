// @ts-ignore
import { Namer } from '@parcel/plugin';
import path from 'path';

export default new Namer({
  name({ bundle, bundleGraph }: any): string | null {
    const bundleGroup = (bundleGraph.getBundleGroupsContainingBundle(bundle) ??
      [])[0];
    if (bundleGroup === undefined) return null;

    const entryFilePath = bundle
      .getEntryAssets()
      .find((a: any) => a.id === bundleGroup.entryAssetId)?.filePath;
    if (entryFilePath === undefined) return null;

    return path.basename(entryFilePath).replace(/\.mustache/i, '');
  },
});
