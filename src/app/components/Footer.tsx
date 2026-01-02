export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© {new Date().getFullYear()} Iðunn Garðarsdóttir</p>
          <p className="text-gray-400">prófarkalestur | textagerð | lögfræði</p>
        </div>
      </div>
    </footer>
  );
}