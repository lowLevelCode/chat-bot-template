import { useEffect, useState } from 'react';
import { FromMessage, Message, TypeMessage } from '../../interfaces/message';
import './chatbot.css';

import { IoSendSharp, IoCloseOutline } from "react-icons/io5";

const ChatBotComponent = () => {

    const [messages, setMessages] = useState<Message[]>();

    useEffect(() => {
        setMessages([
            {
                from: FromMessage.BOT,
                type: TypeMessage.MESSAGE,
                content: 'Este es un mensaje emulado',
                datetime: new Date()
            },
            {
                from: FromMessage.ME,
                type: TypeMessage.MESSAGE,
                content: 'Este es un mensaje emulado',
                datetime: new Date()
            },
        ])
    }, []);

    return (
        <div>
            <button className='chat-button'>boton para chat</button>

            <div className='chat-container'>
                <header className='chat-header'>
                    <IoCloseOutline/>
                </header>
                <section className='chat-content'>
                    {messages?.map((msg, index) => (
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, flexDirection: msg?.from == FromMessage.BOT ? 'row' : 'row-reverse' }}>
                            <img src="https://www.creativefabrica.com/wp-content/uploads/2018/12/Robot-icon-by-rudezstudio-580x386.jpg" alt="" className='avatar-img' />
                            <div className={
                                msg?.from == FromMessage.BOT ?
                                    'message-content bot-message-color'
                                    : 'message-content me-message-color'}>
                                <div>
                                    <div>{msg?.content}</div>
                                    <div>{msg?.datetime.toDateString()}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
                <footer className='chat-footer-input'>
                    <div style={{display:'flex', gap:5, alignItems:'center'}}>
                        <input type="text" style={{ width: '100%' }} />
                        <IoSendSharp />
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default ChatBotComponent
