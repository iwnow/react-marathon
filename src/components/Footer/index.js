import { wrapper } from './Footer.module.css';

export default function Layout() {
    return (
        <footer>
            <div className={wrapper}>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    );
}