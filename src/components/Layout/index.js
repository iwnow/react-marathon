import cls from './Layout.module.css';
import classNames from 'classnames';
import {styleObj} from '@utils';

export default function Layout({ title, descr, urlBg, colorBg }) {
    const styles = styleObj({
        backgroundColor: colorBg,
        backgroundImage: urlBg && `url(${urlBg})`
    })
    return (
        <section style={styles} className={cls.root}>
            <div className={cls.wrapper}>
                <article>
                    <div className={cls.title}>
                        {title && <h3>{title}</h3>}
                        <span className={cls.separator}></span>
                    </div>
                    <div className={classNames(cls.desc, cls.full)}>
                        {descr && <p>{descr}</p>}
                    </div>
                </article>
            </div>
        </section>
    );
}