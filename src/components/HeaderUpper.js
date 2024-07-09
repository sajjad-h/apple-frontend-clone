import Container from '../layouts/Container';
import styles from './HeaderUpper.module.css';

export default function HeaderUpper() {
  return (
    <div className={styles['header-upper']}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <div
          style={{
            display: 'flex',
          }}

        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '15px',
              fontSize: '12px',
            }}
          >
            <div>Education Store Home</div>
            <div
              style={{
                width: '0.5px',
                backgroundColor: 'black',
                height: '15px',
              }}
            />
            <div>Exit</div>
          </div>
        </div>

      </Container>
    </div>
  );
}
