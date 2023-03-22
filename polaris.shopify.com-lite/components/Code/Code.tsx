'use client';

import {ClipboardMinor} from '@shopify/polaris-icons';
import {Tab} from '@headlessui/react';
import {Fragment, useState} from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

// import {useCopyToClipboard} from '../../utils/hooks';
// import Icon from '../Icon';
import styles from './Code.module.scss';
import {className} from '@/utils';
// import Tooltip from '../Tooltip';

interface Props {
  code: {
    title: string;
    code: string;
    className?: string;
  }[];
}

function Code({code}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (code.length > 1) {
    return (
      <div className={className(styles.Code, 'dark-mode')}>
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <div className={styles.TopBar}>
            <Tab.List className={styles.Tabs}>
              {code.map(({title}) => (
                <Tab key={title} className={styles.Tab}>
                  {title}
                </Tab>
              ))}
            </Tab.List>
            {/* {code[selectedIndex] && (
            <CopyButton code={code[selectedIndex].code} />
          )} */}
          </div>

          <Tab.Panels>
            {code.map(({title, code, className}) => (
              <Tab.Panel key={title}>
                <HighlightedCode code={code} className={className} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    );
  } else if (code.length === 1) {
    return (
      <div className={className(styles.Code, 'dark-mode')}>
        <div className={styles.TopBar}>
          {/* <CopyButton code={code.code} /> */}
        </div>
        <HighlightedCode code={code[0].code} className={code[0].className} />
      </div>
    );
  }
  return null;
}

function HighlightedCode({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const match = /language-(\w+)/.exec(className || '');
  const lang = match ? match[1] : 'javascript';
  return (
    <SyntaxHighlighter
      // eslint-disable-next-line react/no-children-prop
      children={String(code).replace(/\n$/, '')}
      language={lang}
      codeTagProps={{className: styles.ActualCode}}
      useInlineStyles={false}
      PreTag={'span'}
    />
  );
}

// export function CopyButton({code}: {code: string}) {
//   const [copy, didJustCopy] = useCopyToClipboard(code);

//   return (
//     <div className={styles.CopyButtonWrapper}>
//       <Tooltip
//         ariaLabel="Copy to clipboard"
//         renderContent={() => <p>{didJustCopy ? 'Copied' : 'Copy'}</p>}
//       >
//         <button
//           type="button"
//           className={styles.CopyButton}
//           onClick={copy}
//           aria-label="Copy to clipboard"
//         >
//           <Icon source={ClipboardMinor} width={16} height={16} />
//         </button>
//       </Tooltip>
//     </div>
//   );
// }

export default Code;