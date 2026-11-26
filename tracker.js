export default async function handler(req, res) {

  try {

    const response = await fetch(
      "https://portwatch-vi.xyz/tracker.json",
      {
        headers: {
          "User-Agent": "VI-PortWatch"
        }
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Tracker unavailable"
      });
    }

    const data = await response.json();

    res.setHeader(
      "Cache-Control",
      "s-maxage=60, stale-while-revalidate=300"
    );

    return res.status(200).json(data);

  } catch (error) {

    return res.status(500).json({
      error: "Could not load tracker"
    });

  }
}export default async function handler(req, res) {

  try {

    const response = await fetch(
      "https://portwatch-vi.xyz/tracker.json",
      {
        headers: {
          "User-Agent": "gtaaa"
        }
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Tracker unavailable"
      });
    }

    const data = await response.json();

    res.setHeader(
      "Cache-Control",
      "s-maxage=60, stale-while-revalidate=300"
    );

    return res.status(200).json(data);

  } catch (error) {

    return res.status(500).json({
      error: "Could not load tracker"
    });

  }
}
