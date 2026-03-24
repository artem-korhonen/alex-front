import { History, Search } from "lucide-react";

function SearchPage() {
    const searchHistory = [
        "abc", "abcd", "abcdeeeeee", "ljaefwe", "aehoqijf", "lqjwfhoqiej", "pqifhoqjen", "pqifenjl", "qlwnfqjkw", "qoefqoejbfbqekhfbqebfhqbefhqebqefjbqkjefbkqjebfkqb"
    ]
    return (
        <div className="flex flex-col">
            <h1 className="text-[var(--color-text)] font-bold text-2xl">Поиск</h1>
            <div className="flex items-center gap-5 bg-[var(--color-bg)] my-5 p-3 py-5 rounded rounded-2xl">
                <Search className="text-[var(--color-primary)]" />
                <input className="placeholder:text-[var(--color-text-dark)] focus:outline-none focus:text-[var(--color-text)]" type="text" placeholder="Что хочешь послушать?" />
            </div>

            <h3 className="text-[var(--color-text)] font-bold mt-5 border-b border-[var(--color-border)] pb-5 ">Недавно искали</h3>
            {searchHistory.map((text) => (
                <div className="p-5 flex gap-7 items-center border-b border-[var(--color-border)] cursor-pointer hover:bg-[var(--color-bg)]">
                    <History className="text-[var(--color-primary)] shrink-0" size={20} />
                    <span className="text-[var(--color-text)] truncate text-lg">{text}</span>
                </div>
            ))}
        </div>
    )
}


export default SearchPage;