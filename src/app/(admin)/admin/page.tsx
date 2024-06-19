'use client'

import useAuthController from "@/app/(app)/user/authentication/useAuthController";
import {useEffect} from "react";

export default function AdminPage() {
    const {user, loading} = useAuthController()

    useEffect(() => {
        console.log(user, loading)
    },[user])

    return(
        <div>
            Connected user is : {`<${user?.email}>`} with {`<${user?.role}>`} access
        </div>
    )
}

// // pages/index.tsx
// import { useCounterStore } from '../path/to/counter-store';
//
// export async function getServerSideProps() {
//     const initialState = useCounterStore.getState();
//     return { props: { initialState } };
// }
//
// // pages/_app.tsx
// import ReactDOMClient from 'react-dom/client';
// import { useCounterStore } from '../path/to/counter-store';
//
// const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
//     const store = useCounterStore(pageProps.initialState);
//
//     return (
//         <StoreProvider store={store}>
//             <Component {...pageProps} />
//         </StoreProvider>
//     );
// };
