'use server'

import {renderRule, StructuredText} from "react-datocms"
import {isHeading, isParagraph, isRoot} from "datocms-structured-text-utils";
import React from "react";

const SingleContent = ({post}) => {

return (
    <>
      <div
        className='content-detail border-gray-800'
        data-wow-delay='.3s'
      >
        <div
          className='bg-gray-850'
          data-wow-delay='.1s'
        >

              <StructuredText data={post.content}
                  renderBlock={({ record }) => {
                      switch (record.__typename) {
                          case "ImageBlockRecord":
                              return <img src={record.image.url} alt={record.image.alt} />;
                          default:
                              return null;
                      }
                  }}
                customNodeRules={[
                  renderRule(
                      isParagraph,
                      ({ adapter: { renderNode }, children, key, ancestors }) => {
                          if (isRoot(ancestors[0])) {
                              const style = { color: '#94a9c9', lineHeight: '1.6', fontSize: 'clamp(16px, 0.61vi + 10.58px, 18.33px)' }
                              return renderNode(
                                  'p',
                                  { key, style: style },
                                  children,
                              );
                          } else {
                              return <React.Fragment key={key}>{children}</React.Fragment>;
                          }
                      },
                  ),
                  renderRule(
                      isHeading,
                      ({ node, children, key }) => {
                          const level = (node.level >= 2) ? 2 : node.level;

                          const Tag = `h${level}`;
                          let style = {
                              color: '#d8e6fb',
                              marginBottom: '0.5em',
                              fontSize: 'clamp(16px, 0.61vi + 12.58px, 21.33px)',
                              marginTop: '1em'
                          };

                          if (level === 1) {
                              style = {
                                  color: '#d8e6fb',
                                  fontSize: 'clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)',
                              };
                          }

                          return <Tag style={style} key={key}>{children}</Tag>;
                      },
                  ),
              ]}/>
        </div>
      </div>
    </>
  )
}
export default SingleContent
