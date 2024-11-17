/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_MOCK_SERVICES: boolean;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
