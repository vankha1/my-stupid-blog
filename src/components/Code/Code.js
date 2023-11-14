import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


function Code({ children, language }) {
    return ( 
        <SyntaxHighlighter
            language={language}
            style={materialDark}
        >
            {children}
        </SyntaxHighlighter>
    );
}

export default Code;