const Loader = () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      zIndex: 50,
    }}>
        Loading &nbsp;&nbsp;&nbsp;
      <div style={{
        width: '40px',
        height: '40px',
        backgroundColor: 'blue',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style>{`
        @keyframes spin {
         0% { transform scale(0); }
         50% { transform: scale(1.2); }
         100% { transform: scale(0); }
        }
        }
      `}</style>
    </div>
  );
  
  export default Loader;
  