import { root, forest, container } from './Header.module.css';

export default function Header({ title, descr }) {
    return (
        <header className={root}>
            <div className={forest}></div>
            <div className={container}>
                {title && <h1>{title}</h1>}
                {descr && <p>{descr}</p>}
            </div>
        </header>
    )
}