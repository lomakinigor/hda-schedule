export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '16px',
        background: '#f5f5f5',
        color: '#111',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1>Приложение работает</h1>
      <p>Если ты видишь этот экран, значит React успешно рендерится.</p>
    </div>
  );
}