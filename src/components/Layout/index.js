import cls from './Layout.module.css';

export default function Layout({ title, descr, urlBg, colorBg }) {
    const styles = {
        backgroundColor: colorBg,
        backgroundImage: urlBg && `url(${urlBg})`
    }
    console.log(styles)
    return (
        <section style={styles} className={cls.root}>
            <div className={cls.wrapper}>
                <article>
                    <div className={cls.title}>
                        {title && <h3>{title}</h3>}
                        <span className={cls.separator}></span>
                    </div>
                    <div className={cls.desc + ' ' + cls.full}>
                        {descr && <p>{descr}</p>}
                    </div>
                </article>
            </div>
        </section>
    );
}