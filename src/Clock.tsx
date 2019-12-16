import React, { useEffect, useReducer } from 'react';

interface DataAction {
    type: string;
    payload?: any;
}

type CallableAction = () => any;

type ClockAction = DataAction | CallableAction;

interface ClockState {
    oneTimeActions: React.MutableRefObject<CallableAction[]>;
    permanentActions: React.MutableRefObject<CallableAction[]>;
}

function reducer(state: ClockState, action: ClockAction) {
    if (typeof action === 'function') {
        state.oneTimeActions.current.push(action);
        return state;
    } else {
        switch (action.type) {
            case 'REGISTER': {
                state.permanentActions.current.push(action.payload);
                return state;
            }
            case 'CLEAR_ONETIME': {
                state.oneTimeActions.current = [];
                return state;
            }
            default:
                throw new Error(`Unknown action type '${action.type}'`);
        }
    }
}

export const ClockContext = React.createContext<React.Dispatch<ClockAction>>(() => {});
export const Clock = ({ children }: { children: any }) => {
    const initialState: ClockState = {
        oneTimeActions: React.useRef([]),
        permanentActions: React.useRef([])
    }
    const [{ oneTimeActions, permanentActions }, dispatch] = useReducer(
        reducer,
        initialState
    )
    useEffect(() => {
        console.log('Starting clock interval..');
        const interval = setInterval(() => {
            oneTimeActions.current.forEach(action => action());
            permanentActions.current.forEach(action => action());
            dispatch({
                type: 'CLEAR_ONETIME'
            });
        }, 70);

        return () => {
            console.log('Clearing clock interval..');
            clearInterval(interval);
        }
    }, []);
    return (
        <ClockContext.Provider value={dispatch}>
            {
                children
            }
        </ClockContext.Provider>
    )
}