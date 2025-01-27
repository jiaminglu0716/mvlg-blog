export {};

declare global {
  interface Archive {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly NEXT_PUBLIC_AUTH0_DOMAIN: string;
    readonly NEXT_PUBLIC_AUTH0_CLIENT_ID: string;
    readonly NEXT_PUBLIC_BASE_URL: string;
  }

  type ArchiveY2MD<T extends any> = {
    year: number;
    mds: {
      month: number;
      day: number;
      data: T[];
    }[];
  }[];

  type ArchiveLinkY1M = {
    year: number;
    months: number[];
  }[];
}
