export declare const PdfHandler: () => Promise<{
    url: string;
    error?: undefined;
} | {
    error: unknown;
    url?: undefined;
}>;
export default PdfHandler;
