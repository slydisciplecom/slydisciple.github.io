<script>
    import { MailChimp } from "../components"
    const alt = "outworld album cover"

    const links = [
        {
            href: "https://open.spotify.com/artist/6TSLU6RCFiLnRKXCBn0Sbo",
            src: "/assets/spotify.png",
            alt: "Spotify"
        },
        {
            href: "https://www.youtube.com/channel/UCb854cgygVAg8MnBxIoYqcA",
            src: "/assets/youtube.png",
            alt: "Youtube",
            clazz: "pt-2"
        },
        {
            href: "https://music.apple.com/us/artist/sly-disciple/958399218",
            src: "/assets/apple.png",
            alt: "Apple Music"
        },
        {
            href: "https://www.instagram.com/sly.disciple/",
            src: "/assets/ig.png",
            alt: "Instagram"
        }
    ]
</script>

<main class="hero relative w-full h-full">
    <img
        class="background-image absolute z-0 overflow-hidden w-full h-full object-cover"
        src="/assets/cover.jpg"
        {alt}
    />
    <div class="top-0 left-0 z-10 flex items-center justify-center w-full h-full">
        <img
            class="h-96 absolute m-auto max-w-full max-h-full object-contain"
            src="/assets/cover.jpg"
            {alt}
        />
        <div class="text-container z-20 text-white">
            <h1 class="tracking-4 text-center uppercase font-bold text-3xl sm:text-5xl">
                Sly Disciple
            </h1>
            <div class="text-center tracking-widest text-xl">
                <span class="uppercase font-semibold">Outworld</span> The Album
                <br /> <span class="italic">Now Available</span>
            </div>
        </div>
    </div>
    <div class="footer h-1/3 justify-evenly absolute bottom-0 left-0 flex w-full sm:h-16">
        {#each links as { href, src, alt, clazz }}
            <a class="{clazz ?? ''} text-white" target="_blank" {href}>
                <img class="hover:opacity-80 duration-300 transition absolute w-12" {src} {alt} />
            </a>
        {/each}
    </div>
</main>

<MailChimp />

<style lang="scss">
    .tracking-4 {
        letter-spacing: 1rem;
    }

    main {
        background-color: #487ab4;

        .background-image {
            filter: blur(4px);
            object-position: 50% 38%;
        }

        .footer {
            margin-left: -23px;
            img {
                min-width: 50px;
            }
        }
    }
</style>
