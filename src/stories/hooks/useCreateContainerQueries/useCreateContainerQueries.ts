import React, { useEffect } from 'react';

const useContainerQueries = (
  ref: React.RefObject<HTMLElement>,
  requiredBreakpoints: number[] = []
) => {
  useEffect(() => {
    let resizeObserver: any;

    if (ref.current) {
      resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const width = Math.floor(entry.contentRect.width);

          // set css custom property, usable in the styling
          ref.current?.style.setProperty("--width", width.toString());

          // add classnames based on requirements
          requiredBreakpoints.forEach(breakpoint  => {
            if (width >= breakpoint) {
              ref.current?.classList.add('min-'.concat(breakpoint.toString()));
            } else {
              ref.current?.classList.remove('min-'.concat(breakpoint.toString()));
            }
          })
        }
      });

      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver?.disconnect();
      console.log('disconnect');
    };
  }, [ref, requiredBreakpoints]);

  return;
}

export default useContainerQueries;
