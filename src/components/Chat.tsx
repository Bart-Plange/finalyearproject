import { Component } from 'react';

interface ExtendedWindow extends Window {
  kommunicate: never; // Adjust the type as needed
}
export class Chat extends Component {
    constructor(props: object | Readonly<object>) {
        super(props);
    }
    componentDidMount(): void {
        (function(_d, m){
        const kommunicateSettings = {"appId":"15fa81ae6ccaf07fbc6290c9b746391b0","popupWidget":true,"automaticChatOpenOnNavigation":true};
        const s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            const h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            const myWindow = window as unknown as ExtendedWindow;
        myWindow.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Chat