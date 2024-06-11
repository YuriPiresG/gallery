const mockUrls = [
  "https://utfs.io/f/9b1c3d76-6392-4746-97ff-3cf826839fc7-nb1kk6.png",
  "https://utfs.io/f/69326b7c-e6a3-419a-b328-6e0d385724e2-1w99p.png",
  "https://utfs.io/f/98bcefb5-fd4b-4777-9d1b-6796dfb2a7c7-1tcrm0.png",
  "https://utfs.io/f/f70ed02b-0c95-4a11-adbc-b65c6ea7cafd-ebcjnx.png",
  "https://utfs.io/f/8e554711-1d17-468e-b2f6-1cdabef92f0f-1l2g89.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hi, still in progress
    </main>
  );
}
