import React, { useState } from 'react';

export const PuzzleAbelardo: React.FC = () => {
  const [completado, setCompletado] = useState<boolean>(false);

  // Usamos una imagen de muestra estable o la tuya local
  const imagenUrl = "https://i.pinimg.com/736x/f2/af/68/f2af68c98135f706c1d93331f8260b63.jpg";

  return (
    <div style={styles.container}>
      <h2 style={styles.headerTitle}>🧩 Rompecabezas: El Gran Frentón</h2>
      <p style={styles.instruction}>
        ¡Arma el desafío visual con estilo colorido! Desafía tu mente.
      </p>

      <div style={styles.puzzleBox}>
        <div style={styles.imageWrapper}>
          <img 
            src={imagenUrl} 
            alt="Rompecabezas Abelardo" 
            style={{
              ...styles.image, 
              filter: completado ? 'none' : 'blur(6px) grayscale(60%)',
            }} 
          />
          {!completado && (
            <div style={styles.overlayText}>¡Piezas desordenadas! Haz clic abajo</div>
          )}
        </div>
      </div>

      <button 
        style={completado ? styles.buttonReset : styles.buttonAction}
        onClick={() => setCompletado(!completado)}
      >
        {completado ? '🔄 Reiniciar Rompecabezas' : '✨ Resolver Rompecabezas'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '450px',
    margin: '30px auto',
    padding: '25px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #f39c12 0%, #e74c3c 100%)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center' as const,
    color: '#ffffff',
  },
  headerTitle: {
    margin: '0 0 10px 0',
    fontSize: '22px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
  },
  instruction: {
    fontSize: '13px',
    marginBottom: '20px',
    opacity: 0.9,
  },
  puzzleBox: {
    backgroundColor: '#ffffff',
    padding: '10px',
    borderRadius: '12px',
    boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  },
  imageWrapper: {
    position: 'relative' as const,
    width: '100%',
    height: '240px',
    overflow: 'hidden',
    borderRadius: '8px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    transition: 'filter 0.5s ease',
  },
  overlayText: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#f1c40f',
    padding: '8px 16px',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '13px',
    width: '80%',
  },
  buttonAction: {
    backgroundColor: '#2ecc71',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },
  buttonReset: {
    backgroundColor: '#34495e',
    color: '#ffffff',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },
};

export default PuzzleAbelardo;