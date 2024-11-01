// src/pages/auth/SignIn.jsx
import { useState } from 'react';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');  // New field
    const [phone, setPhone] = useState('');        // New field
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!username || !phone || !email || !password) {
            setError("All fields are required");
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/users/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, phone, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            localStorage.setItem('token', data.token);
            setSuccess("Login successful! Redirecting to dashboard...");
            navigate('/dashboard');

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <section className="m-8 flex justify-center gap-4">
            <div className="w-full lg:w-3/5 mt-24">
                <div className="text-center">
                    <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
                    <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your details to sign in.</Typography>
                </div>
                {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                {success && <div className="text-green-500 text-center mb-4">{success}</div>}
                <form onSubmit={handleSubmit} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
                    <div className="mb-1 flex flex-col gap-6">
                        <Input
                            size="lg"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            size="lg"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Input
                            size="lg"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            size="lg"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button className="mt-6" fullWidth type="submit">Sign In</Button>
                    <div className="flex items-center justify-left gap-2 mt-6">
                        <Typography variant="small" className="font-medium text-gray-900">
                            <Link to="#">Forgot Password</Link>
                        </Typography>
                    </div>
                    <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
                        Not registered?
                        <Link to="/auth/sign-up" className="text-gray-900 ml-1">Create account</Link>
                    </Typography>
                </form>
            </div>
        </section>
    );
}

export default SignIn;
