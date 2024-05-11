import React from 'react';
import handleViewport, { InjectedViewportProps } from 'react-in-viewport';

// Define the higher-order component
const withViewportHandling = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  // Define props type for the wrapped component
  type Props = P & InjectedViewportProps<HTMLDivElement>;

  const BlockWithViewport: React.FC<Props> = (props) => {
    const { inViewport, forwardedRef, ...rest } = props;
    return (
      <div className="viewport-block" ref={forwardedRef}>
        {inViewport && <WrappedComponent {...rest as P} />}
      </div>
    );
  };

  // Wrap the Block component with the viewport handling logic
  const ViewportBlock = handleViewport(BlockWithViewport);

  // Return the HOC
  return ViewportBlock;
};

export default withViewportHandling;
