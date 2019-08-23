declare module 'global';
declare module 'simplebar-react';
declare module 'markdown-to-jsx';
declare module '*.md';

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/jsx' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/bash' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/css' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/languages/prism/markup' {
    const language: any;
    export default language;
}

declare module 'react-syntax-highlighter/dist/cjs/prism-light' {
    const light: any;
    export default light;
}
