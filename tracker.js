export default async function handler(req, res) {

    const sources = [
        "https://portwatch-vi.xyz/data/tracker.json",
        "https://portwatch-vi.xyz/tracker.json"
    ];

    for (const url of sources) {

        try {

            const response =
                await fetch(
                    url,
                    {
                        headers: {
                            "User-Agent":
                                "gtaaa/1.0"
                        },
                        cache: "no-store"
                    }
                );


            if (response.ok) {

                const data =
                    await response.json();


                res.setHeader(
                    "Cache-Control",
                    "s-maxage=60, stale-while-revalidate=300"
                );


                return res
                    .status(200)
                    .json(data);

            }

        } catch (error) {

            // Try the next source

        }

    }


    return res
        .status(502)
        .json({
            error:
                "Upstream PortWatch tracker unavailable"
        });

}
