/* eslint-disable react/prop-types */
export default function EmptyPage({ RefeshHandler }) {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>No Tours</h1>
        <button onClick={RefeshHandler} style={styles.button}>Refresh</button>
      </div>
    );
  }

  const styles = {
    container: {
      display: 'flex',            
      flexDirection: 'column',    
      justifyContent: 'center',           
      textAlign: 'center',
      padding: '20px',
    },
    heading: {
      color: '#333',
      fontSize: '2rem',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
  };
  