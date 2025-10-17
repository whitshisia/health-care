// src/pages/Auth.tsx
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink, } from "firebase/auth";
import { auth } from "@/lib/firebase";
const Auth = () => {
    const [email, setEmail] = useState("");
    const [linkSent, setLinkSent] = useState(false);
    const { toast } = useToast();
    // Action code settings for Firebase email link
    const actionCodeSettings = {
        url: `${window.location.origin}/finishSignIn`, // Redirect after email click
        handleCodeInApp: true,
    };
    // ✅ Send sign-in link
    const handleSendLink = async (e) => {
        e.preventDefault();
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            toast({
                title: "Invalid email",
                description: "Please enter a valid email address.",
                variant: "destructive",
            });
            return;
        }
        try {
            await sendSignInLinkToEmail(auth, email, actionCodeSettings);
            window.localStorage.setItem("emailForSignIn", email);
            setLinkSent(true);
            toast({
                title: "Email Sent",
                description: `A sign-in link has been sent to ${email}`,
            });
        }
        catch (err) {
            toast({
                title: "Error",
                description: err.message,
                variant: "destructive",
            });
        }
    };
    // ✅ Handle returning via email link
    useEffect(() => {
        const handleEmailLinkSignIn = async () => {
            if (isSignInWithEmailLink(auth, window.location.href)) {
                let storedEmail = window.localStorage.getItem("emailForSignIn");
                if (!storedEmail) {
                    storedEmail = window.prompt("Please confirm your email for sign-in") || "";
                }
                try {
                    await signInWithEmailLink(auth, storedEmail, window.location.href);
                    window.localStorage.removeItem("emailForSignIn");
                    toast({
                        title: "Success!",
                        description: "Your email has been verified. Welcome to MobiClinic!",
                    });
                }
                catch (err) {
                    toast({
                        title: "Sign-in failed",
                        description: err.message,
                        variant: "destructive",
                    });
                }
            }
        };
        handleEmailLinkSignIn();
    }, [toast]);
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-background to-accent/5", children: _jsxs(Card, { className: "w-full max-w-md shadow-[var(--shadow-card)]", children: [_jsxs(CardHeader, { className: "space-y-3", children: [_jsx("div", { className: "mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-[var(--shadow-primary)]", children: _jsx(Mail, { className: "w-8 h-8 text-primary-foreground" }) }), _jsx(CardTitle, { className: "text-2xl text-center", children: "Welcome to MobiClinic" }), _jsx(CardDescription, { className: "text-center", children: linkSent
                                ? "Check your inbox for the verification link."
                                : "Enter your email to receive a sign-in link" })] }), _jsx(CardContent, { children: !linkSent && (_jsxs("form", { onSubmit: handleSendLink, className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { htmlFor: "email", className: "text-sm font-medium", children: "Email Address" }), _jsx(Input, { id: "email", type: "email", placeholder: "you@example.com", value: email, onChange: (e) => setEmail(e.target.value), className: "text-lg" })] }), _jsx(Button, { type: "submit", className: "w-full bg-gradient-to-r from-primary to-primary/90 shadow-[var(--shadow-primary)]", children: "Send Sign-in Link" })] })) })] }) }));
};
export default Auth;
