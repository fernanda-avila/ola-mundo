import Banner from "components/Banner"
import styles from "./inicio.module.css"
import posts from "../../assets-src/posts.json"
import Post from "../../components/Post"

export default function Inicio() {
    return (
        <main>
            <Banner />

            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
        </main>
    )
}