import React from 'react';

// Create context object used by GlobalContextProvider and useGlobalState
export const GlobalContext = React.createContext<any>(null);

export const GlobalContextProvider = ({ children }:any) => {

    // States goes here
    const [peerConnection, setPeerConnection] = React.useState<RTCPeerConnection>();
    const [webSocketConnection, setWebSocketConnection] = React.useState<WebSocket>();

    // Add States down here
    const value = {
        peerConnection, setPeerConnection,
        webSocketConnection, setWebSocketConnection,
    }


    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalState = () => {
    const context = React.useContext(GlobalContext);
    if(!context)
        throw new Error("Error when using context, useGlobalState must be used inside GlobalContextProvider");
    return context;
}
