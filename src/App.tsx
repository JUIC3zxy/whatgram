import React from "react";
import { Routes,Route } from "react-router-dom";
import './global.css'
import SigninForm from "../src/_auth/forms/SigninForm"
import SignupForm from "../src/_auth/forms/SignupForm"
import AuthLayout from "../src/_auth/AuthLayout"
import RootLayout from "../src/_root/RootLayout"
import { Home } from "../src/_root/pages"
import { Toaster } from "./components/ui/toaster";


export default function App() {
    return (
        <main className="flex h-screen">
            <Routes>
                {/* 暂不清楚作用 */}
                <Route element={<AuthLayout />}>
                    <Route path="/sign-in" element={<SigninForm />} />
                    <Route path="/sign-up" element={<SignupForm />} />
                </Route> 
                <Route element={<RootLayout />}>
                {/* private route */}
                {/* have index means it is the starting page */}
                     <Route index element={<Home />} />
                </Route>



            </Routes>
            <Toaster />
        </main>




  )
} 
