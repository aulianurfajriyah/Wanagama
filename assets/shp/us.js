var statesData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "United States Atas", density: 94.65 },
      geometry: {
        type: "Polygon",
        view: [],
        coordinates: [
          [
            [-125, 45], // atas kiri
            [-70, 45], //atas kanan
            [-75, 37], //bawah kanan
            [-125, 37], //bawah kiri
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "United States bawah", density: 2 },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-125, 37], // atas kiri
            [-75, 37], //atas kanan
            [-83, 30], //bawah kanan
            [-115, 30], //bawah kiri
          ],
        ],
      },
    },
  ],
};
