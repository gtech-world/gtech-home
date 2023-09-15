import { DependencyList, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAsyncFn } from "react-use";
import { FunctionReturningPromise } from "react-use/lib/misc/types";

export function useAsyncM<T extends FunctionReturningPromise>(fn: T, deeps: DependencyList = []) {
  const ref = useRef(true);
  const ids = useRef(0);
  const [, freshUI] = useState(1);
  const setLoading = useCallback((loading: boolean) => {
    ref.current = loading;
    freshUI((old) => 1 - old);
  }, []);
  const [state, req] = useAsyncFn(fn, deeps);
  const mReq = () => {
    if (!ref.current) setLoading(true);
    const cId = ids.current + 1 > 100000 ? 0 : ids.current + 1;
    ids.current = cId;
    req().finally(() => ids.current == cId && setLoading(false));
  };
  useEffect(() => {
    mReq();
  }, deeps);
  return useMemo(
    () => ({
      ...state,
      value: ref.current || state.error ? undefined : state.value,
      loading: ref.current,
      req: mReq,
    }),
    [state, ref.current],
  );
}
