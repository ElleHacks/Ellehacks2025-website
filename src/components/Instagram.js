import React, { useEffect } from 'react';
import "../fonts/fonts.css";

function Instagram() {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "//www.instagram.com/embed.js";
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (

        <div className="mt-10 font-[Faustina] h-auto px-4 mx-auto lg:mx-20 xl:mx-64 mb-32 select-none w-full max-w-screen-xl">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 justify-items-center place-items-center">

                <blockquote
                    className="instagram-media rounded-lg shadow-lg mx-auto my-4"
                    data-instgrm-permalink="https://www.instagram.com/reel/DEyBaDgPnjR/?utm_source=ig_embed&amp;utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{
                        maxWidth: "200px",
                        margin: "auto",
                    }}
                >
                </blockquote>

                <blockquote
                    className="instagram-media rounded-lg shadow-lg mx-auto my-4"
                    data-instgrm-permalink="https://www.instagram.com/reel/DEabeyhxrl7?utm_source=ig_embed&amp;utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{
                        maxWidth: "200px",
                        margin: "auto",
                    }}
                >
                </blockquote>

                <blockquote
                    className="instagram-media rounded-lg shadow-lg mx-auto my-4"
                    data-instgrm-permalink="https://www.instagram.com/reel/DEJKJOXxORC/?utm_source=ig_embed&amp;utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{
                        maxWidth: "200px",
                        margin: "auto",
                    }}
                >
                </blockquote>
            </div>
        </div>
    );
}

export default Instagram;
