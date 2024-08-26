import { useState } from 'preact/hooks'

export function Counter () {
    const [counter, setCounter] = useState(0)
// Solo para verificar lo de dinamic islands
    return (
        <>
            <span class="text-yellow-300 text-xl mr-4">{counter}</span>
            <button class="border px-4 py-2 tex-xl" onClick={() => setCounter(counter => counter + 1)}>+</button>
            <button class="border px-4 py-2 tex-xl" onClick={() => setCounter(counter => counter - 1)}>-</button>
        </>
    )
}
