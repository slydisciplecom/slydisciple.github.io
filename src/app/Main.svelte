<script>
    // import { MailChimp } from "../components"
</script>

<main class="hero">
    <img class="background-image" src="/assets/cover.jpg" />
    <div class="info">
        <img class="album" src="/assets/cover.jpg" />
        <div class="text-container">
            <h1 class="title">Outworld</h1>
            <span class="message">Available Everywhere</span>
        </div>
    </div>
    <div class="footer">
        <a target="_blank" href="https://open.spotify.com/artist/6TSLU6RCFiLnRKXCBn0Sbo">
            <img src="/assets/spotify.png" alt="Spotify" />
        </a>
        <a
            class="youtube"
            target="_blank"
            href="https://www.youtube.com/channel/UCb854cgygVAg8MnBxIoYqcA"
        >
            <img src="/assets/youtube.png" alt="Youtube" />
        </a>
        <a target="_blank" href="https://music.apple.com/us/artist/sly-disciple/958399218">
            <img src="/assets/apple.png" alt="Apple Music" />
        </a>
        <a target="_blank" href="https://www.instagram.com/sly.disciple/">
            <img src="/assets/ig.png" alt="Instagram" />
        </a>
    </div>
</main>

<style lang="scss">
    main {
        background-color: #487ab4;
        color: white;
    }
    .hero {
        position: relative;
        width: 100%;
        height: 100vh;
    }
    .hero .background-image {
        overflow: hidden;
        width: 100%;
        height: 100vh;
        filter: blur(4px);
        object-fit: cover;
        object-position: 50% 38%;
    }

    .hero .album {
        margin: auto;
        max-width: 100%;
        height: 375px;
        object-fit: contain;
    }

    .hero img,
    .text-container,
    .footer {
        position: absolute;
    }

    .text-container {
        padding-left: 3vw;
        color: white;
        text-transform: uppercase;
    }

    .hero .info {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    .title {
        text-align: center;
        letter-spacing: 20px;
        font-size: 70px;
    }
    .message {
        display: block;
        text-align: center;
        letter-spacing: 5px;
        font-size: 25px;
    }

    a {
        color: white;
        text-decoration: none;
    }

    .footer {
        bottom: 0;
        left: 0;

        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }

    .footer {
        margin-left: -23px;
        height: 4rem;
    }

    .footer img {
        min-width: 50px;
        width: 3rem;
    }

    .footer img:hover {
        opacity: 0.8;
    }

    @media screen and (max-width: 615px) {
        .title {
            font-size: 8vw;
        }
        .footer {
            height: 30%;
        }
    }

    .youtube {
        padding-top: 8px;
    }
</style>
