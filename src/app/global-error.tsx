'use client'

export default function GlobalError(
    {error, reset}: {error: Error & {digest?: string}, reset: () => void}
) {

    return<html>
        <body>
        <h1>{error.message}</h1>
        <h2>{error.digest}</h2>
        <button onClick={reset}>Try again</button>
        </body>
    </html>
}