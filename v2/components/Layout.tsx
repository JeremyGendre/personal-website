import Head from "next/head";
import {PropsWithChildren} from "react";
import Header from "./header/Header";

export default function Layout({children}: PropsWithChildren){
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="theme-color" content="#1e293b"/>
                <meta name="description" content="Jeune développeur informatique, je suis passionné de technologies web. Découvrez mes projets, compétences et bien plus !"/>
                <meta name="keywords" content="jérémy,gendre,web,developpeur,developper,informatique"/>
                <meta name="author" content="Jérémy Gendre"/>
                <link rel="apple-touch-icon" href="/favicon.ico"/>
                <link rel="manifest" href="/manifest.json"/>
                <title>Gendre Jérémy</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex">
                <main className="flex-1">
                    {children}
                </main>
                <Header/>
            </div>
        </>
    );
}