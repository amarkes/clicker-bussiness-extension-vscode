import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-surface-900 text-text-primary flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-brand-400">Clicker Business</h1>
        <p className="text-text-secondary">Tailwind configurado. Pronto para construir.</p>
        <button className="px-6 py-3 bg-brand-600 hover:bg-brand-500 rounded-lg font-semibold transition-colors">
          Trabalhar
        </button>
      </div>
    </div>
  )
}
