export const itemStructure = `export type IBlock = {
    id: BlockId;
    name: string;
    description?: string;
    component?: (props?: any) => JSX.Element;
    defaultDimension?: IDimension;
    tags?: string[];
    dataTags?: string[];
    blockType?: string;
    params?: IBlockParams;
    sampleData?: ISampleDataPerFlavour;
    dimensions?: IDimensionsPerFlavour;
    screenshots?: IScreenshotsPerFlavour;
    isBlock?: boolean;
};
`;
