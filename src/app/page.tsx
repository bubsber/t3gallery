import Link from "next/link";


const mockUrls =["https://3n04q5mcjl.ufs.sh/f/zaolA81xK5uU5KQRmAydDQV6jMzBKSowe93TUg8PbtadAh4H", "https://3n04q5mcjl.ufs.sh/f/zaolA81xK5uU0TiojIyA3Ufcn1jKpI2C9FQwu5geEdVsTMzH", "https://3n04q5mcjl.ufs.sh/f/zaolA81xK5uUPKLqGpfYXug63ltTvMBhHCySVrL5PmfRdezA", "https://3n04q5mcjl.ufs.sh/f/zaolA81xK5uUgMngu5PUFLQVK8q1cXyjAwGupMYDmzZWNR0s"]
  const mockImage = mockUrls.map((url, index) => ({
  id: index + 1,
  url,

    }))
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap gap-4">{
      mockImage.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt="image" />
        </div>
      ))
    }
      </div>
    
    </main>
  );
}
