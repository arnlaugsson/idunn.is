export function Footer() {
  return (
    <footer className="py-12 bg-stone-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-xl text-stone-300 mb-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Iðunn Garðarsdóttir
          </p>
          <p className="text-xs tracking-[0.3em] uppercase text-stone-500">
            prófarkalestur &mdash; textagerð
          </p>
          <div className="w-8 h-px bg-stone-700 mx-auto my-6" />
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
