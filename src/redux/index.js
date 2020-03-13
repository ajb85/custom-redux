import React, { useState, useEffect, useContext, createContext } from 'react';

const context = createContext();

export function createStore(reducer) {
  let state = reducer(undefined, {});
  let listeners = [];

  return {
    getState: () => state,

    dispatch: action => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    },

    subscribe: listener => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      };
    },

    unsubscribe: listener => {
      listeners = listeners.filter(l => l !== listener);
    }
  };
}

export function combineReducers(reducers) {
  return function(state, action) {
    const newState = {};
    for (let r in reducers) {
      newState[r] = reducers[r](state ? state[r] : undefined, action);
    }

    return newState;
  };
}

export function Provider(props) {
  const [state, setState] = useState(props.store.getState());

  useEffect(() => {
    const unsubscribe = props.store.subscribe(() =>
      setState(props.store.getState())
    );
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ContextProvider = context.Provider;
  return (
    <ContextProvider value={{ state, store: props.store }}>
      {props.children}
    </ContextProvider>
  );
}

export function useSelector(selecting) {
  const { state } = useContext(context);
  return selecting(state);
}

export function useDispatch() {
  const { store } = useContext(context);
  return store.dispatch;
}
