"use client"
import { useState } from 'react';
  
interface MessageState {
    type: string;
    content: string;
  }


const Join = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState<MessageState | null>(null);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        console.log('Submitting form data:', name, email);

        const formData = {
            name: name,
            email: email,
        };

        fetch('https://nexuspc.ru/api/subscribe/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://localhost:80',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Ошибка при подписке. Пожалуйста, попробуйте еще раз.');
                }
            })
            .then(data => {
                console.log('Response from server:', data);
                setMessage({ type: 'success', content: 'Подписка успешна!' });

                // Clear the message after a delay
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            })
            .catch(error => {
                console.error('Error:', error.message);
                setMessage({ type: 'error', content: error.message });

                // Clear the message after a delay
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
            });
    };

    return (
        <div className="bg-joinus my-32">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                <div className="text-center">

                    <h2 className="text-4xl sm:text-65xl font-bold my-6 leading-10"> Выведи свой бизнес  <br /> на новый уровень</h2>
                    <p className="font-medium text-lightblack text-2xl mt-5 text-center ">Подписка на рассылку от нашей компании, в которой мы делимся: <br /> новостями, советами, лайфхаками и акциями</p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                    <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                        <div>
                            <input
                                type="name"
                                value={name}
                                onChange={handleNameChange}
                                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black"
                                placeholder="Имя"
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black"
                                placeholder="Email"
                                autoComplete="off"
                            />
                        </div>
                        <div className="sm:mr-3">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue"
                            >
                                Подписаться
                            </button>
                        </div>
                    </div>
                </div>
                {message && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            padding: '1rem',
                            backgroundColor: message.type === 'success' ? '#4CAF50' : '#f44336',
                            color: 'white',
                            borderRadius: '8px',
                            zIndex: '1000',
                        }}
                    >
                        {message.content}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Join;
