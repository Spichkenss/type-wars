/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  type ComponentProps,
  type ComponentType,
  Suspense,
} from "react";

export const suspened = <TComponent extends ComponentType<any>,
    FComponent extends ComponentType<any>>
  (Component: TComponent, FallbackComponent: FComponent) => {
  return (props: ComponentProps<TComponent>) => {
    return (
      <Suspense fallback={<FallbackComponent {...props} />}>
        <Component {...props} />
      </Suspense>
    );
  };
};
